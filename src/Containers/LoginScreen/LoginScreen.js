import LoginApi from '@/Services/Login/LoginAPI'
import StylesLoginScreen from '@/Theme/Styles/LoginScreen/StylesLoginScreen'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={StylesLoginScreen.layoutContainer}>
      <Image
        source={require('@/Assets/Images/Image.png')}
        style={StylesLoginScreen.imageLogin}
      />
      <View style={StylesLoginScreen.InputContainer}>
        <Text style={StylesLoginScreen.textInputLogin}>Email</Text>
        <TextInput
          placeholder="Enter you email"
          style={StylesLoginScreen.InputLogin}
          defaultValue={email}
          onChangeText={email => setEmail(`lethuhien.qn96@gmail.com`)}
        ></TextInput>
      </View>
      <View style={StylesLoginScreen.InputContainer}>
        <Text style={StylesLoginScreen.textInputLogin}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter you password"
          style={StylesLoginScreen.InputLogin}
          defaultValue={password}
          onChangeText={password => setPassword(`pss201806`)}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={StylesLoginScreen.buttonLogin}
        onPress={() => LoginApi(email, password, navigation)}
      >
        <Text style={StylesLoginScreen.textButtonLogin}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
