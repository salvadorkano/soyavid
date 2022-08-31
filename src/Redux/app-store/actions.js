import {INITIALIZE, USER_LOGOUT, OPEN_RESTAURANT} from './keys';

export function onInitialStore(data) {
  return {
    type: INITIALIZE,
    data: data,
  };
}

export function onLogOut() {
  return {
    type: USER_LOGOUT,
  };
}

export function isRestOpen(data) {
  return {
    type: OPEN_RESTAURANT,
    data: data,
  };
}


    
