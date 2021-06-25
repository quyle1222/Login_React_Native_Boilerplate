import { Config } from '@/Config'
import axios from 'axios'
import { useState } from 'react'
import GetLocalStorage from '../LocalStorage/GetLocalStorage'
import store from '@/Store/User/Store'
import { addNewUser } from '@/Store/User/Action'

function DetailsAPI() {
  const [User, setUser] = useState('')

  const fetchUser = async () => {
    const IdData = await GetLocalStorage()
    setUser(IdData)
  }
  fetchUser()
  return axios({
    method: 'GET',
    url: `${Config.API_DETAILS_URL}${User.id}`,
    headers: { Authorization: 'Bearer ' + User.token },
  })
    .then(res => {
      if (res.data.success == true) {
        store.dispatch(addNewUser(res.data.data))
      } else {
        return null
      }
    })
    .catch(err => {
      console.log(err)
      return null
    })
}
export default DetailsAPI
