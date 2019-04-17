export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_OASIS_PENDING':
      return {
        ...state,
        profile: {
          ...state.profile,
          pending: true
        }
      }
    case 'GET_OASIS_FULFILLED':
      return {
        ...state,
        profile: {
          success: true,
          pending: false,
          error: null,
          data: action.payload
        }
      }
    case 'GET_OASIS_REJECTED':
      return {
        ...state,
        profile: {
          ...state.profile,
          pending: false,
          success: false,
          error: action.payload
        }
      }
    case 'GET_OASIS_RELEASES_PENDING':
      return {
        ...state,
        releases: {
          ...state.releases,
          pending: true
        }
      }
    case 'GET_OASIS_RELEASES_FULFILLED':
      return {
        ...state,
        releases: {
          success: true,
          pending: false,
          error: null,
          data: action.payload
        }
      }
    case 'GET_OASIS_RELEASES_REJECTED':
      return {
        ...state,
        releases: {
          ...state.releases,
          pending: false,
          success: false,
          error: action.payload
        }
      }
    default:
      return state
  }
}
