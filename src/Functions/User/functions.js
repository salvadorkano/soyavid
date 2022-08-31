import {apiFetch} from '../Fetch/fetch';

//Login
export async function asyncLogin(data) {
  return await apiFetch('Customer/Auth/Login', 'POST', data)
    .then(response => response)
    .catch(err => err);
}

//Register new account
export async function asyncRegister(data) {
  return await apiFetch('Customer/Account/Create', 'POST', data)
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

// export async function addRestStep02(data) {
//   return await apiFetch('Restaurant/UpdateMainInfo', 'POST', data)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function checkRestaurantsData() {
//   return await apiFetch('Restaurant/GetAll')
//     .then(response => response)
//     .catch(err => err);
// }
// export async function getRestById(id) {
//   return await apiFetch('Restaurant/GetById?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }

// export async function getCuisines(id) {
//   return await apiFetch('Restaurant/GetCuisineTypes?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function getCategories(id) {
//   return await apiFetch('Restaurant/GetCategories?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function addCategory(body) {
//   return await apiFetch('Restaurant/AddCategory', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function updateLogo(body) {
//   return await apiFetch('Restaurant/UpdateLogo', 'POST', body, true)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function updateMainImage(body) {
//   return await apiFetch('Restaurant/UpdateMainImage', 'POST', body, true)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function addImages(body) {
//   return await apiFetch('Restaurant/AddImage', 'POST', body, true)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function deleteImage(body) {
//   return await apiFetch('Restaurant/DeleteImage', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function updateStep(body) {
//   return await apiFetch('Restaurant/UpdateStepNumber', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }

// export async function getDressCode(id) {
//   return await apiFetch('Restaurant/GetDressCodes?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function addDressCode(body) {
//   return await apiFetch('Restaurant/UpdateDressCode', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function saveCuisineTypes(body) {
//   return await apiFetch('Restaurant/UpdateCuisineType', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function saveCategoryTypes(body) {
//   return await apiFetch('Restaurant/UpdateCategory', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function getDetails(id) {
//   return await apiFetch('Restaurant/GetDetails?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }

// export async function addDetail(data) {
//   return await apiFetch('Restaurant/AddDetail', 'POST', data)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function updateInfoDetails(data) {
//   return await apiFetch('Restaurant/UpdateGeneralInfo', 'POST', data)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function getWeekDays(id) {
//   return await apiFetch('Restaurant/GetWeekdays?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function updateWeek(body) {
//   return await apiFetch('Restaurant/UpdateWeekdays', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function updateProtocols(body) {
//   return await apiFetch('Restaurant/UpdateSecurityProtocol', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }

// export async function getProtocols(id) {
//   return await apiFetch('Restaurant/GetSecurityProtocols?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function addExceptionDate(body) {
//   return await apiFetch('Restaurant/AddExceptionDate', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function getDates(id) {
//   return await apiFetch('Restaurant/GetExceptionDates?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function deleteExceptDate(body) {
//   return await apiFetch('Restaurant/DeleteExceptionDate', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }

// export async function updateTicket(body) {
//   return await apiFetch('Restaurant/UpdateAveragePrice', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }

// export async function updateBillingFormat(body) {
//   return await apiFetch('Restaurant/UpdateBilling', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function getBillingInfo(id) {
//   return await apiFetch('Restaurant/GetBilling?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }

// export async function getMenuImgs(id) {
//   return await apiFetch('Restaurant/GetMenuImages?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function addMenuImage(body) {
//   return await apiFetch('Restaurant/AddMenuImage', 'POST', body, true)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function getMenuCateg(id) {
//   return await apiFetch('Restaurant/GetMenuCategories?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function addMenuCategory(body) {
//   return await apiFetch('Restaurant/AddUpdateCategoryMenu', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }

// export async function getFullMenu(id) {
//   return await apiFetch('Restaurant/GetMenu?restaurantId=' + id)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function addDishToCategory(body) {
//   return await apiFetch('Restaurant/AddUpdateMenu', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function deleteDish(body) {
//   return await apiFetch('Restaurant/DeleteMenu', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }
// export async function deleteMenuImg(body) {
//   return await apiFetch('Restaurant/DeleteMenuImage', 'POST', body)
//     .then(response => response)
//     .catch(err => err);
// }
