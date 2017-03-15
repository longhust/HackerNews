import {types} from '../actions/Types';

const INITIAL = {
  isFetching: false,
  error: null,
  data: []
};

export const reducer = (state = INITIAL, action)=>{
  switch (action.type) {
  	case types.FETCH_PENDING:
  		return {...state, isFetching: true, error: null};
    case types.FETCH_SUCCESS:
      return {...state, isFetching:false, error:null};
    case types.FETCH_FAILURE:
      return {...state, isFetching:false, error:action.error};
    case types.LOAD_DATA: {
      let data = [...state.data, action.payload];
      return {...state, data: data, isFetching:false}
    }
    default:
      return state;
  }
}
