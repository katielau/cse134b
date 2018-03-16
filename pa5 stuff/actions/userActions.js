import * as types from './actionTypes';
import userApi from '../api/mockUserApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users};
}

export function createUserSuccess(user) {
  return {type: types.CREATE_USER_SUCCESS, user};
}

export function loadUsers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return userApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveUser(user) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return userApi.saveUser(user).then(user => {
        dispatch(createUserSuccess(user));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
