import AsyncStorage from '@react-native-async-storage/async-storage'
export const SetLocalStorage = async (token, id) => {
  try {
    await AsyncStorage.setItem('@id', id)
    await AsyncStorage.setItem('@token', token)
  } catch (e) {
    console.log(e)
  }
}
