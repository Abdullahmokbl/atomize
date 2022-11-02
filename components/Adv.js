import React from 'react';
import styles from './../styles/Adv.module.css';

export default function adv(props) {
    const {icon, title, p, a} = props;
  return (
    <div className={styles.adv}>
        <img src={icon} alt='' />
        <div>{title}</div>
        <p>{p}</p>
        <a>{!a? 'See How': a}</a>
    </div>
  )
}
