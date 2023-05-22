import React from 'react';

import styles from '../../css/Keyboard.module.css';
import {
  NO_MATCH,
  CORRECT_PLACEMENT,
  CORRECT_LETTER,
} from './../constants';

function Key({ children, status }) {
  let color, textColor;

  const yellow = 'rgba(200,180,88,255)';
  const green = 'rgba(107,170,100,255)';
  const gray = 'rgba(120,124,126,255)';

  switch (status) {
    case NO_MATCH:
      color = gray;
      textColor = "white";
      break;
    case CORRECT_LETTER:
      color = yellow;
      textColor = "white";
      break;
    case CORRECT_PLACEMENT:
      color = green;
      textColor = "white";
      break;
    default:
      color = "lightgray";
      textColor = "black";
  }

  const keyStyle = {
    backgroundColor: color,
    color: textColor,
  };

  return (
    <div className={styles.key} style={keyStyle}>
      <h3 className={styles.keyText}>
        {children}
      </h3>
    </div>
  );
}

export default Key;