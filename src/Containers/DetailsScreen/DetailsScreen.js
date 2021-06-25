import { addNewUser } from '@/Store/User/Action'
import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const DetailScreen = () => {
  const data = useSelector(state => state.infoUser)
  
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  )
}
export default DetailScreen
