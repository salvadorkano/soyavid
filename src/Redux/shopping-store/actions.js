import {INITIALIZE, USER_LOGOUT, OPEN_RESTAURANT, SHOPPING} from './keys';

export function inShopping(data) {
  return {
    type: SHOPPING,
    data: data,
  };
}
