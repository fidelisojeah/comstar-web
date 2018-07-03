
import {
  LOAD_HOME_PAGE_SUCCESS,
  LOAD_HOME_PAGE_FAILURE
} from '../types';

export function getHomePageSuccess(info) {
  return ({
    type: LOAD_HOME_PAGE_SUCCESS,
    info
  });
}

export function getHomePageFailure(error) {
  return ({
    type: LOAD_HOME_PAGE_FAILURE,
    error
  });
}

// export function getHomeInfo() {
//   return dispatch =>

// }
