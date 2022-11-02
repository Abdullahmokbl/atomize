import React from 'react';
import Link from 'next/link';
import styles from './../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2>Atomize</h2>
      <ul>
        <li><a href='#feautures'>features</a></li>
        <li>test1</li>
        <li>test2</li>
      </ul>
      <Link href='profile'><button>Abdullah</button></Link>
    </nav>
  )
}
