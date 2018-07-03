import {
  LOAD_HOME_PAGE_SUCCESS,
  LOAD_HOME_PAGE_FAILURE
} from '../types';

import { initialData } from './init-data';
const initialState = initialData;


export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HOME_PAGE_SUCCESS:
      return {
        ...state,
        mediaLinks: action.info.media.mediaLinks,
        menuItems: action.info.media.menuItems,
        companyInfo: action.info.media.companyInfo,
        companyPhone: action.info.media.companyInfo[0].strong,
        companyemail: action.info.media.companyInfo[1].strong
      }
    case LOAD_HOME_PAGE_FAILURE:
      return state;
    default:
      return state;
  }
}
