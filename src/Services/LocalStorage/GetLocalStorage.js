import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
async function GetLocalStorage() {
  try {
    const Obj = {
      id: await AsyncStorage.getItem('@id'),
      token: await AsyncStorage.getItem('@token'),
    }
    return Obj
  } catch (error) {
    console.log(error)
  }
}
export default GetLocalStorage
