import actions from './actions';

const initialState = {
  loader: false,
  guestcounter: null,
  usercounter: null,
}

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_COUNTER:
      return {
        ...state,
        loader: true
      }
    case actions.GET_COUNTER_FAILURE:
      return {
        ...state,
        loader: false
      }
    case actions.GET_COUNTER_SUCCESS:
      console.log("action.payload",action.payload)
      return {
        ...state,
        loader: false,
        guestcounter: action.payload.guestcounter,
        usercounter: action.payload.usercounter
      }
      case actions.UPDATE_COUNTER:
        return {
          ...state,
          loader: true
        }
      case actions.UPDATE_COUNTER_FAILURE:
        return {
          ...state,
          loader: false
        }
      case actions.UPDATE_COUNTER_SUCCESS:
        console.log("action.payload",action.payload)
        return {
          ...state,
          loader: false,
          guestcounter: action.payload.guestcounter,
          usercounter: action.payload.usercounter
        }
    default:
      return state
  }
}

export default Reducer;
