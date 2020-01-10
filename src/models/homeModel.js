import {getData} from "../services/serv";

export default {
  namespace: 'homeModel',
  state: {countnum: 0, isLoading: true},
  reducers: {

    add(state, {payload: name}) {
      return Object.assign({}, state, {countnum: name.countnum})
    },
    'del'(state, {payload: name}) {
      return Object.assign(state
      );
    },
  },
  effects: {
    * test({payload: payloads}, {put, call}) {
      const respose = yield call(getData, payloads);
      yield put({type: 'add', payload: respose});
    },
  },
};
