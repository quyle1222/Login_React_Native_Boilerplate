export const addNewUser = user => {
  return {
    type: 'ADD_USER',
    payload: user,
  }
}
export const delUser = user => {
  return {
    type: 'DEL_USER',
    payload: user,
  }
}
