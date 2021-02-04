import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../utils/Button';
import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react/cjs/react.development';
import { AuthContext } from '../Components/AuthProvider';

const reviewSchema = yup.object({
    donorName: yup.string().required().min(4),
    city: yup.string().required(),
    bloodGroup: yup.string().required(),
    phoneNo: yup.string(Number).required(),
    eMail: yup.string().required(),


})

export default function DonorForm({ handle }) {
    const { logout, user } = useContext(AuthContext)
    console.log(user.uid);
    const FirebaseIput = (values) => {
        firestore()
            .collection(`users/UW6nTBTkLMrOUKbXcI2A/${bloodGroup}`)
            .add(values)
            .then(() => {
                console.log('User added!');
                handle();
            });
    }
    const [bloodGroup, setBloodGroup] = useState("A")
    return (
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
    )
}