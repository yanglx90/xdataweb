import request from "../util/request";

export async function getData(param) {
  return request('http://127.0.0.1:1903/api/users', {
    method: 'GET'
  })
}
