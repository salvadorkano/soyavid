import {TOKEN_REFRESHED, CURRENT_USER} from './keys';

export function onRefreshToken(data) {
  return {
    type: TOKEN_REFRESHED,
    data: data,
  };
}

export function refreshCurrentUser(data) {
  return {
    type: CURRENT_USER,
    data: data,
  };
}
