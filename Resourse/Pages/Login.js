import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButton';
import { AuthContext } from '../Components/AuthProvider';
import LinearGradient from 'react-native-linear-gradient'
import { windowHeight } from '../utils/Dimensions';
import FlatButton from '../utils/Button';
import { windowWidth } from '../utils/Dimensions'
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login, googleLogin, fbLogin } = useContext(AuthContext);

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
      <Text style={styles.text}>Blood Bee Foundation</Text>

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
      <View style={styles.flatBtn}>

        <FlatButton
          text="Sign In"
          onPress={() => login(email, password)}
        />
      </View>
      <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
    // </LinearGradient>
  );
};

export default LoginScreen;

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
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    height: windowHeight,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    fontFamily: 'Nunito-ExtraBold'

  },

  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#5c5a5a',
    fontFamily: 'Lato-Regular',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  flatBtn: {
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