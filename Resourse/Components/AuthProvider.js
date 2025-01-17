import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { createContext } from 'react';
import { Alert } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

export const AuthContext = createContext();

export const AuthProvider = ({ children, navigation }) => {

    const [user, setUser] = useState(null);
    const [patientBloodGroup, setPatientGroup] = useState("A");
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                patientBloodGroup,
                setPatientGroup,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                        console.log('User account created & signed in!');
                    } catch (e) {
                        console.log("Err", e);
                        Alert.alert(`${e}`);
                    }
                },
                googleLogin: async () => {
                    try {

                        const { idToken } = await GoogleSignin.signIn();

                        // Create a Google credential with the token
                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

                        // Sign-in the user with the credential
                        await auth().signInWithCredential(googleCredential);
                    } catch (e) {
                        console.log(e);
                        Alert.alert(`${e}`);

                    }
                },
                fbLogin: async () => {
                    try {

                        // Attempt login with permissions
                        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

                        if (result.isCancelled) {
                            throw 'User cancelled the login process';
                        }

                        // Once signed in, get the users AccesToken
                        const data = await AccessToken.getCurrentAccessToken();

                        if (!data) {
                            throw 'Something went wrong obtaining access token';
                        }

                        // Create a Firebase credential with the AccessToken
                        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

                        // Sign-in the user with the credential
                        await auth().signInWithCredential(facebookCredential).then((user) => {
                            console.log(user)
                        })
                            .catch((err) => {
                                console.log(err)
                                Alert.alert(`${e}`);

                            })

                    } catch (e) {
                        console.log(e);
                    }

                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log("Err", e);
                        Alert.alert(`${e}`);

                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log("Err", e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}