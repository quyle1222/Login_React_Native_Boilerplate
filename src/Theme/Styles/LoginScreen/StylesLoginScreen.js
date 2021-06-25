import { StyleSheet } from 'react-native'

const StylesLoginScreen = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
  imageLogin: {
    marginTop: '30%',
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  InputContainer: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  textInputLogin: {
    margin: 10,
    color: '#383838',
  },
  InputLogin: {
    borderWidth: 2,
    borderColor: '#A9A9A9',
    borderRadius: 25,
    paddingLeft: 30,
  },
  buttonLogin: {
    width: 150,
    height: 50,
    backgroundColor: '#3183FF',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonLogin: {
    color: 'white',
  },
})
export default StylesLoginScreen
