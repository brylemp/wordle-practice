import React from 'react';
import Block from './Block';

import styles from '../../css/Display.module.css';

function Row({ word }) {
  return (
    <div className={styles.row}>
      {word.map((obj, i) => {
        const entry = Object.entries(obj);
        const [letter, status] = entry[0];

        return (
          <Block
            key={letter + i}
            letter={letter}
            status={status}
          ></Block>
        );
      })}
    </div>
  );
}

export default Row;