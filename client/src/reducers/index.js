const initialState = {
  isLoggedIn: false
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'log-in':
      return { ...state, isLoggedIn: true }
    case 'log-out':
      return { ...state, isLoggedIn: false }
    default:
      return state
  }
}
