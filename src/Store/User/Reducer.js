const initialState = {
  infoUser: {},
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return {
        ...state,
        infoUser: action.payload,
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
