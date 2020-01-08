import React, { useCallback, useEffect } from 'react';
import { connect } from 'dva';


function Home(props) {
  const ussTest=useCallback(()=> {
    props.dispatch(
      {
        type: 'homeModel/add',
        payload:{count:122}
      }
    );
  })
  useEffect(
    ()=> {
      ussTest();
      return ()=>console.log('结束')
    },[props.homeModel.loading, ussTest]
  )


  return (
    <div>
      {/*<button onClick={() => props.home.add(count + 1)}>Click me</button>*/}
      <p>{props.homeModel.count}</p>
      <button onClick={ ussTest}>Click me</button>
    </div>
  );
}

export default connect(({homeModel}) => ({homeModel}))(Home);

