import React from 'react';
import styles from './styles.module.css'
const TestComponent = (props) => {
  return (
    <p className={styles.test}>Hello {`${props.msg}`}</p>
  )
}

export default TestComponent;

