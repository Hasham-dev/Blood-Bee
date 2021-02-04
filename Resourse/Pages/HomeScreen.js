import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, ScrollView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { AuthContext, AuthProvider } from '../Components/AuthProvider';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import FlatButton from '../utils/Button';
import { windowWidth } from '../utils/Dimensions';
import FindDonor from './FindDonorForm';
import { globalStyles } from '../styles/global';
// import DonorForm from './DonorForm';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';


const Home = ({ navigation }) => {
    const reviewSchema = yup.object({
        donorName: yup.string().required().min(4),
        city: yup.string().required(),
        bloodGroup: yup.string().required(),
        phoneNo: yup.string(Number).required(),
        eMail: yup.string().required(),
    
    
    })
    
    
    const [findDonorModal, setFindDonorModal] = useState(false);
    const [donorModal, setDonorModal] = useState(false);
    const { logout, user } = useContext(AuthContext)

    const donorFromHandle = () => {
        setDonorModal(false);
        console.log('Press');
        Alert.alert(
            'Added Successfully',
            'Thanks for registration',
            [
                {
                    text: "Continue"
                }
            ]
        )
    }

    const FirebaseIput = (values) => {
        firestore()
            .collection(`users/UW6nTBTkLMrOUKbXcI2A/${bloodGroup}`)
            .add(values)
            .then(() => {
                console.log('User added!');
                donorFromHandle();
            });
    }
    const [bloodGroup, setBloodGroup] = useState("A")


    const findDonorHandleSubmit = () => {
        try {
            setFindDonorModal(false);

            navigation.navigate('DonorsList');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.container}>
            {/* //Donor Modal */}

            <Modal
                animationType="slide"
                visible={donorModal}

            >
                <TouchableWithoutFeedback
                    onPress={() => Keyboard.dismiss()}
                >
                    <View style={styles.modalContent}>

                        <TouchableOpacity style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => {
                                setDonorModal(!donorModal);
                            }}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                        <ScrollView>
                            <View style={globalStyles.container}>
                                <Formik
                                    initialValues={{
                                        donorName: '',
                                        city: '',
                                        bloodGroup,
                                        phoneNo: '',
                                        eMail: '',
                                        userId: user.uid,
                                    }}
                                    validationSchema={reviewSchema}
                                    onSubmit={(values) => {
                                        console.log(values);
                                        FirebaseIput(values);
                                    }}
                                >
                                    {(props) => (
                                        <View>
                                            <Text style={{ ...globalStyles.text, ...globalStyles.headerText }}>Donor's Form</Text>
                                            <TextInput
                                                style={globalStyles.input}
                                                placeholder="Donor Name"
                                                onChangeText={props.handleChange('donorName')}
                                                value={props.values.donorName}
                                                onBlur={props.handleBlur('donorName')}
                                            />
                                            <Text style={globalStyles.errorText}>{props.touched.donorName && props.errors.donorName}</Text>
                                            <TextInput
                                                multiline minHeight={60}
                                                style={globalStyles.input}
                                                placeholder="Donor City"
                                                onChangeText={props.handleChange('city')}
                                                value={props.values.city}
                                                onBlur={props.handleBlur('city')}

                                            />
                                            <Text style={globalStyles.errorText}>{props.touched.city && props.errors.city}</Text>
                                            <Text style={{ ...globalStyles.text }}>Blood Group</Text>

                                            <Picker
                                                selectedValue={bloodGroup}
                                                style={globalStyles.input}
                                                onValueChange={(val) => {
                                                    setBloodGroup(val)
                                                    console.log(bloodGroup);
                                                    props.setFieldValue("bloodGroup", val)
                                                }}
                                            >
                                                <Picker.Item label="A" value="A" />
                                                <Picker.Item label="B" value="B" />
                                                <Picker.Item label="AB" value="AB" />
                                                <Picker.Item label="O" value="O" />
                                                <Picker.Item label="A-" value="A-" />
                                                <Picker.Item label="B-" value="B-" />
                                                <Picker.Item label="AB-" value="AB-" />
                                                <Picker.Item label="O-" value="O-" />
                                            </Picker>
                                            <TextInput
                                                style={globalStyles.input}
                                                placeholder="Donor Contact No."
                                                onChangeText={props.handleChange('phoneNo')}
                                                value={props.values.phoneNo}
                                                keyboardType="number-pad"
                                                onBlur={props.handleBlur('phoneNo')}

                                            />
                                            <Text style={globalStyles.errorText}>{props.touched.phoneNo && props.errors.phoneNo}</Text>
                                            <TextInput
                                                multiline minHeight={60}
                                                style={globalStyles.input}
                                                placeholder="Email Address"
                                                onChangeText={props.handleChange('eMail')}
                                                value={props.values.eMail}
                                                onBlur={props.handleBlur('eMail')}

                                            />
                                            <Text style={globalStyles.errorText}>{props.touched.eMail && props.errors.eMail}</Text>
                                            <FlatButton text={'Submit'} onPress={props.handleSubmit} />
                                        </View>

                                    )}
                                </Formik>
                            </View>
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Modal
                animationType="slide"
                visible={findDonorModal}

            >
                <TouchableWithoutFeedback
                    onPress={() => Keyboard.dismiss()}
                >
                    <View style={styles.modalContent}>

                        <TouchableOpacity style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => {
                                setFindDonorModal(!findDonorModal);
                            }}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                        <ScrollView>
                            <FindDonor handle={findDonorHandleSubmit} />
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            {/* Find a Donor Modal */}


            <View style={styles.detailContainer}>
                <LinearGradient
                    colors={['#f5a4a4', '#fc033d', '#fc8d8d']}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <View style={styles.description}>
                        <View style={styles.ImageParent}>

                            <Image style={styles.Image} source={{
                                uri: user.photoURL
                            }} />
                        </View>
                        <Text style={{ ...styles.welcome, ...globalStyles.text }}>Welcome</Text>
                        <Text style={{ ...styles.userName, ...globalStyles.textBold }}>{user.displayName || user.email}</Text>
                        <TouchableOpacity onPress={() => logout()} style={styles.Btn} >
                            <Text style={styles.btntxt}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
            <View style={styles.container2}>
                <View style={styles.flatBtn}>
                    <FlatButton text={"Find a donor"} onPress={async () => {
                        // await setDonor(false);
                        await setFindDonorModal(true);
                    }} />
                </View>
                <View style={styles.flatBtn}>
                    <FlatButton text={"Be a donor"} onPress={async () => {
                        // await setDonor(true)
                        await setDonorModal(true);
                    }} />
                    {/* <FlatButton text="Alert" onPress={()=>donorFromHandle()}/> */}
                </View>
            </View>

        </View>
    )
}

export default Home;


const styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#f20c50',
        shadowColor: "#f5f0f1",
        shadowOffset: {
            width: 5,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 100,
        elevation: 10,
        zIndex: 999,
    },
    description: {
        alignItems: 'center',
        width: "100%",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    Image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#f5f0f1',

    },
    ImageParent: {
        shadowColor: "#f5f0f1",
        shadowOffset: {
            width: 5,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 100,
        elevation: 16,
        marginBottom: 10,
        zIndex: 999,
    },
    container: {
        flex: 1,
    },
    detailContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5



    },
    Btn: {
        borderWidth: 2,
        borderColor: '#f5f0f1',
        borderRadius: 20,
        color: '#f0ebeb',
        padding: 7,
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#f20c50',
        shadowColor: "#f5f0f1",
        shadowOffset: {
            width: 5,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 100,
        elevation: 16,
        zIndex: 999,
    },
    welcome: {
        fontSize: 13,
        color: '#f0ebeb',

    },
    userName: {
        color: '#f0ebeb',
        fontSize: 15,

    },
    container2: {
        textAlign: 'center',
        marginTop: 20,
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
    },
    btntxt: {
        color: '#f0ebeb',
        fontWeight: '400',
        paddingHorizontal: 5,
        paddingVertical: 4,
        fontWeight: 'bold'
    },
    flatBtn: {
        width: windowWidth / 1.5,

        margin: 20,

    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,

    },

})