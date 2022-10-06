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
//Get info profile
export async function getInfo() {
  return await apiFetch('Customer/Account/GetInfo')
    .then(response => response)
    .catch(err => err);
}

//Confirm mail
export async function confirmEmail(data) {
  return await apiFetch('Customer/Account/ConfirmEmail', 'POST', data)
    .then(response => response)
    .catch(err => err);
}

//Resend code
export async function resendcode(data) {
  return await apiFetch('Customer/Account/resendcode', 'POST', data)
    .then(response => response)
    .catch(err => err);
}
//Resert password send code
export async function resetPassword(data) {
  return await apiFetch('Customer/Account/ResetPassword', 'POST', data)
    .then(response => response)
    .catch(err => err);
}

//Change password send code
export async function setNewPassword(data) {
  return await apiFetch('Customer/Account/SetNewPassword', 'POST', data)
    .then(response => response)
    .catch(err => err);
}
