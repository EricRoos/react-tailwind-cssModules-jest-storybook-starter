import React from 'react';

import styles from './styles.scss';

export const TestComponent = (props) => {
  return (
    <p className={styles.test}>Hello {`${props.msg}`}</p>
  )
}
