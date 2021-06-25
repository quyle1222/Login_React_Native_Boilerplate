import DetailsAPI from '@/Services/Details/DetailsAPI'
import { addNewUser } from '@/Store/User/Action'
import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const DetailScreen = () => {
  DetailsAPI()
  // useDispatch(addNewUser(userInfo))
  const data = useSelector(state => state.infoUser)
  return (
    <View>
      <Text>{data.userId}</Text>
      <Text>{data.userFullName}</Text>
    </View>
  )
}
export default DetailScreen
