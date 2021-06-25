const initialState = {
  infoUser: {
    id: 1,
    name: 'default',
  },
  activeID: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      const newObj = [...state.infoUser]
      newObj.push(action.payload)
      return {
        ...state,
        infoUser: newObj,
      }
    }
    case 'DEL_USER': {
      return state
    }
    default: {
      return state
    }
  }
}
export default userReducer
