import React, { useState } from 'react';
import Link from 'next/link';
import styles from './../styles/Navbar.module.css';

export default function Navbar() {
  const [showdp, setShowdp] = useState(false)
  console.log(showdp)
  return (
    <nav className={styles.nav}>
      <h2>Atomize</h2>
      <ul>
        <li><a href='#feautures'>features</a></li>
        <li>test1</li>
        <li>test2</li>
      </ul>
      <Link href='profile'><button className={styles.button}>Abdullah</button></Link>
      <div className={`${styles.menu} ${showdp? styles.active:''}`} onClick={() => !showdp ? setShowdp(true): setShowdp(false)}>
        <div></div>
        <div></div>
      </div>
      <div className={`${styles.dropdown} ${showdp? styles.show: ''}`} >
          <a href='#feautures' onClick={()=> setShowdp(false)}>features</a>
          <a>test1</a>
          <a>test2</a>
          <Link href='profile' onClick={()=> setShowdp(false)}><button>Abdullah</button></Link>
      </div>
      <div className=''></div>
    </nav>
  )
}
