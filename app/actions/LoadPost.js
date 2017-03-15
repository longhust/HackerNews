import { types } from './Types'
import API from '../api/ApiPost';
const api = new API();
export const loadData = (category) => {
  return (dispatch) => {
    dispatch({ type: types.FETCH_PENDING });
    api.getList(category)
      .then((response) => {
        if (response.error) {
          console.log('error', response.error);
          dispatch(fetchFailure(response.error))
        } else {
          // console.log('success', response);
          const listNews = response.map(item => {
            api.getNews(item)
              .then((data) => {
                //console.log('data', data);
                if (data != null) {
                  dispatch(addNews(data));
                }
              })
          });
        }
      })
      .catch(error => {
        console.log('error', error);
        dispatch(fetchFailure(error));
      });
  }
};

export const fetchSuccess = (data) => {
  return {
    type: types.FETCH_SUCCESS,
    payload: data
  }
}

export const fetchFailure = (error) => {
  return {
    type: types.FETCH_FAILURE,
    error: error
  }
}
export const addNews = (item) => {
  return {
    type: types.LOAD_DATA,
    payload: item
  }
}
