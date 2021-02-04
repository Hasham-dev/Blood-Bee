import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButton';
import { AuthContext } from '../Components/AuthProvider';
import LinearGradient from 'react-native-linear-gradient'
import { windowHeight, windowWidth } from '../utils/Dimensions';
import FlatButton from '../utils/Button'
import { globalStyles } from '../styles/global';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { register } = useContext(AuthContext);

  return (
    // <LinearGradient
    //   colors={['#fc565e', '#fafafa', '#fafafa', '#fafafa', '#fafafa', '#fafafa', '#ff9191']}
    //   style={styles.linearGradient}
    //   start={{ x: 1, y: 0 }}
    //   end={{ x: 1, y: 4 }}
    // >
      <ScrollView contentContainerStyle={styles.container}>
      <Circle  />
      <BottonCircle />
        <Text style={styles.text}>Create an account</Text>

        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormInput
          labelValue={confirmPassword}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
        />
        <View style={styles.flatBtn}>

          <FlatButton
            text="Sign Up"
            onPress={() => register(email, password)}
          />
        </View>

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
              Terms of service
          </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
            Privacy Policy
        </Text>
        </View>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Sign Up with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => { }}
            />

            <SocialButton
              buttonTitle="Sign Up with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => { }}
            />
          </View>
        ) : null}

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    // </LinearGradient>
  );
};

const Circle = () => {
  return (
    <View style={styles.circle}>

    </View>
  )
}
const BottonCircle = () => {
  return (
    <View style={styles.bottonCircle}>

    </View>
  )
}
export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: windowHeight,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    fontFamily: 'Nunito-ExtraBold'
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#5c5a5a',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  flatBtn:{
    width: "100%",


  },
  circle: {
    position: 'absolute',
    width: 250,
    height: 250,
    backgroundColor: '#fc2150',
    top: -60,
    left: -50,
    opacity: 0.3,
    borderRadius: 200
  },
  bottonCircle:{
    position: 'absolute',
    width: 250,
    height: 250,
    backgroundColor: '#90d5fc',
    bottom: -60,
    right: -50,
    opacity: 0.3,
    borderRadius: 200
  }
});