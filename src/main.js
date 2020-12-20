import React from 'react';

import './base.css';
import styles from './styles.module.css'
export const TestComponent = (props) => {
  return (
    <p className={styles.test}>Hello {`${props.msg}`}</p>
  )
}
