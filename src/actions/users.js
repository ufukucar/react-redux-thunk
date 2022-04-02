import * as actionTypes from '../constants/action-types'
import axios from 'axios'

export const fetchUsers = () => async (dispatch, getState) => {
  dispatch({ type: actionTypes.FETCH_USER_REQUEST })

  try {
    const response = await axios.get('http://localhost:7000/users')

    dispatch({ type: actionTypes.FETCH_USER_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_USER_FAILURE, payload: error })
  }
}

export const updateUser = (userObject) => async (dispatch, getState) => {
  dispatch({ type: actionTypes.UPDATE_USER_REQUEST })

  try {
    let userObject2 = {
      id: userObject.id,
      name: userObject.name,
      username: userObject.username,
      email: userObject.email,
      phone: userObject.phone,
    }

    const response = await axios.put(
      `http://localhost:7000/users/${userObject.id}`,
      userObject2,
    )

    dispatch({
      type: actionTypes.UPDATE_USER_SUCCESS,
      payload: userObject2,
    })
  } catch (error) {
    //alert('catch icine girdi')
    dispatch({ type: actionTypes.UPDATE_USER_FAILURE, payload: error })
  }
}
