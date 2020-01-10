// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户未登录或登录已过期。',
//   403: '用户权限不足。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。',
// };

const checkStatus = response => {
  console.log('response', response);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // const errortext = codeMessage[response.status] || response.statusText;
  // const error = new Error(errortext);
  // error.name = response.status;
  // error.response = response;
  // throw error;
};
//
// const cachedSave = (response) => {
//   if (response.headers.get('accessToken')) {
//     localStorage.setItem('accessToken', response.headers.get('accessToken'));
//   }
//   if (response.headers.get('location')) {
//     localStorage.setItem('TGT', response.headers.get('location').split('/cas/v1/tickets/')[1]);
//   }
//   return response;
// };

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(
  url,
  options
) {
  // options = { ...options,credentials: 'include' };
  // if ((options.body instanceof FormData) || (options.body instanceof URLSearchParams)) {
  //   options.headers = {
  //     accessToken: localStorage.getItem('accessToken'),
  //     path: sessionStorage.getItem('path'),
  //     ...options.headers,
  //   };
  // } else {
  options.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    // accessToken: localStorage.getItem('accessToken'),
    //     path: encodeURI(sessionStorage.getItem('path')),
    //     ...options.headers,
  };
  options.body = JSON.stringify(options.body);
  // }

  return fetch(url, options)
    .then(checkStatus)
    // .then(response => cachedSave(response))
    .then(response => {
      // if (response.headers.get('Content-Type').includes("application/json")) {
      //   return response.json();
      // } else {
      //   return response.text();
      // }
      return response.json()
    })
    .catch(e => {
      // const status = e.name;
      // if (!(e.response.url.includes("/cas/v1/tickets") || e.response.url.includes("/login"))) {
      //   if (status === 401) {
      //     window.g_app._store.dispatch({
      //       type: 'login/logout',
      //     });
      //     return;
      //   }
      //   if (status === 403) {
      //     router.push('/exception/403');
      //     return;
      //   }
      //   if (status <= 504 && status >= 500) {
      //     router.push('/exception/500');
      //     return;
      //   }
      //   if (status >= 404 && status < 422) {
      //     router.push('/exception/404');
      //   }
      console.log('网络请求', 'error');
      return
      // }
    });
}
