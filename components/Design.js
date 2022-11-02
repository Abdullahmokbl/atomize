import React from 'react';
import styles from './../styles/Design.module.css';

export default function Design() {
  return (
    <div className={`flex ${styles.design}`}>
      <h2>Design System for React JS</h2>
      <p>Atomize React is a UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly.</p>
      <div className={styles.btns}>
        <div className={styles.btn}>Get Started Now</div>
        <div className={styles.btn}>
        <svg viewBox="0 0 24 24" >
          <path d="M17.8436076,12.841119 L8.54075759,18.8215226 C8.07618755,19.1201747 7.4574737,18.9856717 7.15882152,18.5211017 C7.05513038,18.3598044 7,18.1720957 7,17.9803441 L7,6.01953696 C7,5.46725221 7.44771525,5.01953696 8,5.01953696 C8.19175162,5.01953696 8.37946026,5.07466734 8.54075759,5.17835848 L17.8436076,11.1587621 C18.3081776,11.4574142 18.4426806,12.0761281 18.1440285,12.5406981 C18.0665625,12.6612008 17.9641102,12.763653 17.8436076,12.841119 Z"/>
        </svg>
          Watch video</div>
      </div>
    </div>
  )
}
