
import type { Action } from './types';

export const SET_USER = 'SET_USER';
export const SET_USER_FACEBOOK = 'SET_USER_FACEBOOK';

export function setUser(user:string):Action {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function loginFacebook(user:string):Action {
  return {
    type: SET_USER_FACEBOOK,
    payload: user,

  }
}