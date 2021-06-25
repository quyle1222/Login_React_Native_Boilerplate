import { Config } from '@/Config'
import { addNewUser } from '@/Store/User/Action'
import store from '@/Store/User/Store'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import GetLocalStorage from '../LocalStorage/GetLocalStorage'

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
        const Obj = {
          id: 107,
          name: 'hien hien',
        }
        useDispatch(addNewUser(Obj))
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
