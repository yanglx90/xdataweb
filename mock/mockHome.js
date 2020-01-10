import * as Mock from "mockjs";

const api_user = (req, res) => res.send(Mock.mock(
  {'countnum|1-100': 21}
))

export default {
  'GET /api/users2': api_user
}
