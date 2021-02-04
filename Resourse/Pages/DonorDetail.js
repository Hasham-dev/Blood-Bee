import React from 'react';
import { StyleSheet, View, Text, Image, Linking, Platform, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../Components/card';
import { globalStyles } from '../styles/global';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SocialButton from '../Components/SocialButton';


export default function DonorDetails({ route, navigation }) {
    const item = route.params;
    console.log(item);


    const callNumber = phone => {
        console.log('callNumber ----> ', phone);
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${phone}`;
        }
        else {
            phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Phone number is not available');
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    };

    const whatsappChat = async (phone) => {
        let message = `Assalam o Alaikum ${item.donorName}! 
        
I got your number throw blood bee app, if you are availble for blood donation so please let me known.`;
        let url = `whatsapp://send?text=${message}&phone=92${phone}`
        Linking.openURL(url).then(data => console.log(`Whatsapp open succesfully ${data}`))
            .catch((e) => console.log('Errr'))
    }
    return (

        <View >
            <HeaderComponent navigation={navigation} />
            <ScrollView >
                <View style={globalStyles.container}>

                    <Card>
                        <View style={styles.headWrapper}>

                            <View style={styles.bloodGroup}>
                                <Text style={styles.bloodGroupHeader}>Blood Group</Text>

                                <Text style={styles.bloodGroupText}>{item.bloodGroup}</Text>
                            </View>
                            <View style={styles.detailsWrapper}>

                                <View style={styles.iconWrapper}>
                                    <FontAwesome name={"user"} style={styles.icon} size={22} color={"black"} />
                                    <Text style={{ ...styles.iconText, ...globalStyles.textBold }}>{item.donorName}</Text>
                                </View>
                                <View style={styles.iconWrapper}>
                                    <FontAwesome name={"map-marker"} style={styles.icon} size={22} color={"black"} />
                                    <Text style={{ ...styles.iconText, ...globalStyles.text }}>{item.city}</Text>
                                </View>
                                <View style={styles.iconWrapper}>
                                    <FontAwesome name={"envelope"} style={styles.icon} size={20} color={"black"} />
                                    <Text style={{ ...styles.iconText, ...globalStyles.text }}>{item.eMail}</Text>
                                </View>


                                <SocialButton
                                    buttonTitle={`Call ${item.phoneNo}`}
                                    btnType="phone"
                                    color="#2d5373"
                                    backgroundColor="#d1e3eb"
                                    onPress={() => callNumber(item.phoneNo)}
                                />


                                <SocialButton
                                    buttonTitle={`WhatsApp ${item.phoneNo}`}
                                    btnType="whatsapp"
                                    color="#296647"
                                    backgroundColor="#dcf2e5"
                                    onPress={() => whatsappChat(item.phoneNo)}
                                />
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </View>
    )
}


const HeaderComponent = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <FontAwesome name={"arrow-left"} style={styles.iconNav} size={20} color={"#fff"} onPress={() => navigation.goBack()} />
            <Text style={{ ...styles.iconTextNav, ...globalStyles.textBold }}>Donor Detail's</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        marginTop: 16,
        paddingTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',

    },

    image: {
        marginTop: 5
    },
    bodyText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        textAlign: 'justify'
    },
    card: {
        flex: 1,
        flexDirection: 'row'
    },
    cardDetails: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    bloodGroup: {
        width: 100,
        height: 100,
        backgroundColor: '#808080',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        marginTop: 20,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,


    }, iconText: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBoldItalic',
        marginLeft: 10,
    }, iconWrapper: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'row'
    }, icon: {
        opacity: 0.5,
        // marginLeft: 10,
    },
    detailsWrapper: {
        marginTop: 25,
    },
    bloodGroupHeader: {
        position: 'absolute',
        backgroundColor: '#f51616',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 9,
        textAlign: 'center',
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold'
    },
    bloodGroupText: {
        marginTop: 40,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 40,
        alignSelf: 'center',
        alignItems: 'center',
    },
    headWrapper: {
        marginHorizontal: 10,
        marginVertical: 10,
        marginBottom: 20,
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