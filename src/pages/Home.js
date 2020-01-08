import React, {useState} from 'react';

function Home(props) {

  const [count,setCount]=useState(0);



  return (
    <div><button onClick={()=>setCount(count+1)}>Click me</button></div>
  );
}

export default Home;
