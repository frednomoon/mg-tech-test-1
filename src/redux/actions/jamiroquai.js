import axios from 'axios'

export const getJamiroquai = () => async dispatch => {
  dispatch({
    type: 'GET_JAMIROQUAI_PENDING'
  })
  try {
    const response = await axios.get('https://api.discogs.com/artists/8029')
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
