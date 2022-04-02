import * as actionTypes from '../constants/action-types'

const initialState = { data: [], isLoading: false, error: null }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_REQUEST:
      return { data: [], isLoading: true, error: null }

    case actionTypes.FETCH_USER_SUCCESS:
      return { data: action.payload, isLoading: false, error: null }

    case actionTypes.FETCH_USER_FAILURE:
      return { data: state.data, isLoading: false, error: action.payload }

    case actionTypes.UPDATE_USER_REQUEST:
      return { data: state.data, isLoading: true, error: null }

    case actionTypes.UPDATE_USER_SUCCESS:
      let userId = action.payload.id

      let newState = state.data.map((user) => {
        if (user.id === userId) {
          user.name = action.payload.name
          user.email = action.payload.email
          user.phone = action.payload.phone
          user.username = action.payload.username
        }
      })

      return {
        ...state,
        data: state.data,
        isLoading: false,
        error: null,
      }

    case actionTypes.UPDATE_USER_FAILURE:
      return {
        data: state.data,
        isLoading: false,
        error: 'Bir sorun oluştu userReducer ici',
      }

    default:
      return state
  }
}
