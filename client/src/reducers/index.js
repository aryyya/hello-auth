const initialState = {
  isLoggedIn: false,
  name: 'Fes'
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'log-in':
      return { ...state, isLoggedIn: true }
    case 'log-out':
      return { ...state, isLoggedIn: false }
    case 'set-name':
      return { ...state, name: action.name }
    default:
      return state
  }
}
