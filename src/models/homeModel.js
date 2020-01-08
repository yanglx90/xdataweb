export default {
  namespace: 'homeModel',
  state: { count: 0,loading:1 },
  reducers: {
    add(state, { payload: name }) {
      return {...state,count:state.count+1};
    },
  },
  effects: {},
};
