import {apiFetch} from '../Fetch/fetch';

//Login
export async function asyncLogin(data) {
  return await apiFetch('Customer/Auth/Login', 'POST', data)
    .then(response => response)
    .catch(err => err);
}

//Register new account
export async function asyncRegister(data) {
  return await apiFetch('users', 'POST', data)
    .then(response => response)
    .catch(err => err);
}
//Get food
export async function getFood() {
  return await apiFetch('food', 'GET')
    .then(response => response)
    .catch(err => err);
}
