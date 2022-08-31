import config from './api';
import {store} from '../../Redux/configureStore';

export async function apiFetch(url, method, data, upload = false) {
  let endpoint = url?.includes('http') ? url : config.endpoints.test_api + url;
  const token = store.getState().user?.userToken ?? null;
  let options = {
    method: typeof method !== 'undefined' ? method : 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };
  if (upload === true) {
    options.body = new FormData();
    Object.keys(data).map(key => {
      if (data[key]['uri'] !== undefined) {
        options.body.append(key, {
          uri: data[key]['uri'],
          name: data[key]['fileName'],
          type: data[key]['type'],
        });
      } else {
        options.body.append(key, data[key]);
      }
    });

    // options['body'] = bod;
    options['headers']['Content-Type'] = 'multipart/form-data';
  } else if (typeof data !== 'undefined' && data !== null) {
    options['body'] = JSON.stringify(data);
    options['headers']['Content-Type'] = 'application/json';
  }
  return fetch(endpoint, options).then(async response => {
    if (response === undefined) return {success: false, error: 'No response'};

    try {
      const status = response.status;
      let res = await response.json();
      if (status >= 200 && status <= 299) {
        return await res;
      } else {
        if (status >= 300 && status <= 399) {
        } else if (status == 500) {
          return await res;
        } else if (status == 504) {
          return await res;
        } else if (status == 417) {
        } else if (status == 422) {
        }
        return '';
      }
    } catch (err) {
      if (err) return err;
    }
    return null;
  });
}
