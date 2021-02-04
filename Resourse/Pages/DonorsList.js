import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../Components/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { globalStyles } from '../styles/global'
import Card from '../Components/card';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DonorsList = ({ navigation }) => {
    const [donorList, setDonorList] = useState(null);
    const { patientBloodGroup } = useContext(AuthContext)

    const bloodGroupA = async () => {
        //A Data
        const userDocument = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('A')
            .get()
        const userData = await userDocument.docs
        await setDonorList(userData);

        // AB Data
        const userDocumentAB = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('O')
            .get()
        const userDataAB = await userDocumentAB.docs
        await setDonorList(prevData => [
            ...prevData,
            ...userDataAB
        ])
        await console.log(donorList);
    }
    const bloodGroupB = async () => {
        //A Data
        const userDocument = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('B')
            .get()
        const userData = await userDocument.docs
        await setDonorList(userData);

        // AB Data
        const userDocumentAB = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('O')
            .get()
        const userDataAB = await userDocumentAB.docs
        await setDonorList(prevData => [
            ...prevData,
            ...userDataAB
        ])
        await console.log(donorList);
    }
    const bloodGroupAB = async () => {

        // AB Data
        const userDocumentO = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('O')
            .get()
        const userDataO = await userDocumentO.docs
        await setDonorList(userDataO);

        // A Data
        const userDocumentA = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('A')
            .get()
        const userDataA = await userDocumentA.docs
        await setDonorList(prevData => [
            ...prevData,
            ...userDataA
        ])
        // B Data
        const userDocumentB = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('B')
            .get()
        const userDataB = await userDocumentB.docs
        await setDonorList(prevData => [
            ...prevData,
            ...userDataB
        ])
        // AB Data
        const userDocumentAB = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('AB')
            .get()
        const userDataAB = await userDocumentAB.docs
        await setDonorList(prevData => [
            ...prevData,
            ...userDataAB
        ])
        await console.log(donorList);
    }

    const bloodGroupODemo = async () => {
        //O Data
        const userDocument = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('O')
            .get()
        const userData = await userDocument.docs
        await setDonorList(userData);

    }

    //

    const bloodGroupANegative = async () => {
        //A Data
        const userDocument = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('A-')
            .get()
        const userData = await userDocument.docs
        await setDonorList(userData);

        // AB Data
        const userDocumentAB = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('O-')
            .get()
        const userDataAB = await userDocumentAB.docs
        await setDonorList(prevData => [
            ...prevData,
            ...userDataAB
        ])
        await console.log(donorList);
    }
    const bloodGroupBNegative = async () => {
        //A Data
        const userDocument = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('B-')
            .get()
        const userData = await userDocument.docs
        await setDonorList(userData);

        // AB Data
        const userDocumentAB = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('O-')
            .get()
        const userDataAB = await userDocumentAB.docs
        await setDonorList(prevData => [
            ...prevData,
            ...userDataAB
        ])
        await console.log(donorList);
    }
    const bloodGroupABNegative = async () => {

        // AB Data
        const userDocumentO = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('O-')
            .get()
        const userDataO = await userDocumentO.docs
        await setDonorList(userDataO);

        // A Data
        const userDocumentA = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('A-')
            .get()
        const userDataA = await userDocumentA.docs
        await setDonorList(prevData => [
            ...prevData,
            ...userDataA
        ])
        // B Data
        const userDocumentB = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('B-')
            .get()
        const userDataB = await userDocumentB.docs
        await setDonorList(prevData => [
            ...prevData,
            ...userDataB
        ])
        // AB Data
        const userDocumentAB = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('AB-')
            .get()
        const userDataAB = await userDocumentAB.docs
        await setDonorList(prevData => [
            ...prevData,
            ...userDataAB
        ])
        await console.log(donorList);
    }

    const bloodGroupODemoNegative = async () => {
        //O Data
        const userDocument = await firestore()
            .collection('users')
            .doc('UW6nTBTkLMrOUKbXcI2A')
            .collection('O-')
            .get()
        const userData = await userDocument.docs
        await setDonorList(userData);

    }

    const dataFunction = async () => {
        if (patientBloodGroup == "O") {
            console.log("Function Started");
            bloodGroupODemo();
        } else if (patientBloodGroup == "A") {
            bloodGroupA();
        } else if (patientBloodGroup == "B") {
            bloodGroupB();
        } else if (patientBloodGroup == "AB") {
            bloodGroupAB();
        } else if (patientBloodGroup == "O-") {
            console.log("Function Started");
            bloodGroupODemoNegative();
        } else if (patientBloodGroup == "A-") {
            bloodGroupANegative();
        } else if (patientBloodGroup == "B-") {
            bloodGroupBNegative();
        } else if (patientBloodGroup == "AB-") {
            bloodGroupABNegative();
        } else {
            return null
        }
    }

    useEffect(() => {
        dataFunction();
    }, [patientBloodGroup])
    return (


        <FlatList
            ListHeaderComponent={() => <HeaderComponent navigation={navigation} />}
            data={donorList}
            renderItem={({ item }) =>
                <TouchableOpacity style={styles.cardOutside} onPress={() => { navigation.navigate('DonorDetails', item._data) }}>
                    <Card>
                        <View style={styles.card}>
                            <View style={styles.bloodGroup}>
                                <Text style={styles.bloodGroupHeader}>Blood Group</Text>

                                <Text style={styles.bloodGroupText}>{item._data.bloodGroup}</Text>
                            </View>
                            <View style={styles.cardDetails}>
                                <View style={styles.iconWrapper}>
                                    <FontAwesome name={"user"} style={styles.icon} size={22} color={"black"} />
                                    <Text style={{ ...styles.iconText, ...globalStyles.textBold }}>{item._data.donorName}</Text>
                                </View>
                                <View style={styles.iconWrapper}>
                                    <FontAwesome name={"map-marker"} style={styles.icon} size={22} color={"black"} />
                                    <Text style={{ ...styles.iconText, ...globalStyles.text }}>{item._data.city}</Text>
                                </View>

                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
            }
        />
    )
}
// }


export default DonorsList;

const HeaderComponent = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <FontAwesome name={"arrow-left"} style={styles.iconNav} size={20} color={"#fff"} onPress={() => navigation.goBack()} />
            <Text style={{ ...styles.iconTextNav, ...globalStyles.textBold }}>Donor's List</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        height: 80,
    }, cardOutside: {
        marginHorizontal: 20,
        marginVertical: 5,
    },
    cardDetails: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingBottom: 15,
        paddingTop: 5,
    }, iconWrapper: {
        flex: 1,
        marginLeft: 10,
        marginTop: 6,
        flexDirection: 'row'
    }, icon: {
        opacity: 0.5,
        // marginLeft: 10,
    },
    bloodGroup: {
        width: '28.6%',
        backgroundColor: '#808080',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,


    },
    bloodGroupHeader: {
        position: 'absolute',
        backgroundColor: '#f51616',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 5.9,
        color: "#fff",
        fontSize: 13,
        fontWeight: 'bold'
    }, iconText: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBoldItalic',
        marginLeft: 10,
    },
    bloodGroupText: {
        marginTop: 30,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        alignItems: 'center',
    },
    header: {
        height: 60,
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#fc5154'
    },
    iconTextNav: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 30
    },
    iconNav: {
        marginLeft: 10,
        width: 30
    }
})