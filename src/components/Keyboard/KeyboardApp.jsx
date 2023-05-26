import React from 'react';
import Row from './Row';

import styles from '../../css/Keyboard.module.css';

function KeyboardApp({ keyboardStatuses }) {
  const Row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const Row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const Row3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "<="];

  return (
    <div className={styles.keyboard}>
      {[Row1, Row2, Row3].map((row, i) => (
        <Row
          key={i}
          keyboardStatuses={keyboardStatuses}
          letters={row}
        />
      ))}
    </div>
  );
}


export default KeyboardApp;