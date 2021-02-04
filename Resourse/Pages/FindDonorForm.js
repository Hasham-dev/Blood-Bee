import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import FlatButton from '../utils/Button';
import { AuthContext } from '../Components/AuthProvider';
import { Picker } from '@react-native-picker/picker';



export default function FindDonor({ handle }) {
    const { setPatientGroup, patientBloodGroup } = useContext(AuthContext)
    return (
        <View style={globalStyles.container}>

            <View>
                <Text style={{ ...globalStyles.text, ...globalStyles.headerText }}>Receiver Blood Details</Text>
                <Text style={{ ...globalStyles.text, marginTop: 40 }}>Blood Group</Text>

                <Picker
                    selectedValue={patientBloodGroup}
                    style={globalStyles.input}
                    onValueChange={(val) => {
                        setPatientGroup(val);
                    }}
                // onBlur={props.handleBlur('bloodGroup')}
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
                <View style={{ marginTop: 60 }}>

                    <FlatButton text={'Find Donors'} onPress={() => handle()} />
                </View>

            </View>

        </View>
    )
}