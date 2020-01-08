import styles from './index.css';
import React, {useState} from "react";

export default function () {
  const [count,setCount]=useState(0);
  return (
    <div className={styles.normal}>
      <div className={styles.welcome}/>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Start11ed
          </a>


          {count}
          <div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>

        </li>
      </ul>
    </div>
  );
}
