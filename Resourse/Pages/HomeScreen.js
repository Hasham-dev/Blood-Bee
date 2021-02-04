import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Modal, ScrollView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { AuthContext, AuthProvider } from '../Components/AuthProvider';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import FlatButton from '../utils/Button';
import { windowWidth } from '../utils/Dimensions';
import DonorForm from './DonorForm';
import FindDonor from './FindDonorForm';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {
    const [findDonorModal, setFindDonorModal] = useState(false);
    const [donorModal, setDonorModal] = useState(false);
    const [donor, setDonor] = useState(true)
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
                                <DonorForm handle={donorFromHandle} />
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