// https://api.discogs.com/artists/140140 OASIS
// https://api.discogs.com/artists/8029 jamiroquai
// https://api.discogs.com/artists/140140asdasd FAIL
import axios from 'axios'

export const getOasis = () => async dispatch => {
  dispatch({
    type: 'GET_OASIS_PENDING'
  })
  try {
    const response = await axios.get('https://api.discogs.com/artists/140140')
    dispatch({
      type: 'GET_OASIS_FULFILLED',
      payload: response.data
    })
  } catch (e) {
    dispatch({
      type: 'GET_OASIS_REJECTED',
      payload: e
    })
  }
}

export const getOasisReleases = url => async dispatch => {
  console.log(url)
  dispatch({
    type: 'GET_OASIS_RELEASES_PENDING'
  })
  try {
    const response = await axios.get(url)
    dispatch({
      type: 'GET_OASIS_RELEASES_FULFILLED',
      payload: response.data
    })
  } catch (e) {
    dispatch({
      type: 'GET_OASIS_RELEASES_REJECTED',
      payload: e
    })
  }
}

export const getJamiroquai = () => async dispatch => {
  dispatch({
    type: 'GET_JAMIROQUAI_PENDING'
  })
  try {
    const response = await axios.get('https://api.discogs.com/artists/140140')
    dispatch({
      type: 'GET_JAMIROQUAI_FULFILLED',
      payload: response.data
    })
  } catch (e) {
    dispatch({
      type: 'GET_JAMIROQUAI_REJECTED',
      payload: e
    })
  }
}

export const getJamiroquaiReleases = url => async dispatch => {
  console.log(url)
  dispatch({
    type: 'GET_JAMIROQUAI_RELEASES_PENDING'
  })
  try {
    const response = await axios.get(url)
    dispatch({
      type: 'GET_JAMIROQUAI_RELEASES_FULFILLED',
      payload: response.data
    })
  } catch (e) {
    dispatch({
      type: 'GET_JAMIROQUAI_RELEASES_REJECTED',
      payload: e
    })
  }
}
