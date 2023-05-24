import React from 'react';
import Key from './Key';

import styles from '../../css/Keyboard.module.css';

function Row({ keyboardStatuses, letters }) {
  return (
    <div className={styles.row}>
      {letters.map(letter => (
        <Key
          key={letter}
          letter={letter}
          status={keyboardStatuses[letter]}
        />
      ))}
    </div>
  );
}

export default Row;