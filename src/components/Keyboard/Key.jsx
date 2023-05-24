import React from 'react';

import styles from '../../css/Keyboard.module.css';
import {
  NO_MATCH,
  CORRECT_PLACEMENT,
  CORRECT_LETTER,
  BLACK,
  WHITE,
  LIGHT_GRAY,
  GRAY,
  YELLOW,
  GREEN,
} from './../constants';

function Key({ letter, status }) {
  let color, textColor;

  textColor = WHITE;
  switch (status) {
    case NO_MATCH:
      color = GRAY;
      break;
    case CORRECT_LETTER:
      color = YELLOW;
      break;
    case CORRECT_PLACEMENT:
      color = GREEN;
      break;
    default:
      color = LIGHT_GRAY;
      textColor = BLACK;
  }

  const keyStyle = {
    backgroundColor: color,
    color: textColor,
  };

  return (
    <div className={styles.key} style={keyStyle}>
      <h3 className={styles.keyText}>
        {letter}
      </h3>
    </div>
  );
}

export default React.memo(Key);