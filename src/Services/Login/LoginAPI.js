import axios from 'axios'
import { Config } from '@/Config'
import { Alert } from 'react-native'
import { SetLocalStorage } from '../LocalStorage/SetLocalStorage'
const LoginApi = (userName, password, navigation) => {
  return axios({
    method: 'POST',
    url: Config.API_LOGIN_URL,
    data: {
      username: `${userName}`,
      password: `${password}`,
    },
  })
    .then(res => {
      if (res.data.success === true) {
        SetLocalStorage(res.data.data.token, res.data.data.userId)
        navigation.navigate('Details')
      } else {
        Alert.alert('Fail')
      }
    })
    .catch(err => {
      console.log(err)
    })
}
export default LoginApi
