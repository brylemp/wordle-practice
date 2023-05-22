import React from 'react';

import styles from '../../css/Display.module.css';
import {
  NO_MATCH,
  CORRECT_PLACEMENT,
  CORRECT_LETTER,
} from './../constants';

function Block({ letter, status }) {
  let color, borderColor, textColor;

  const yellow = 'rgba(200,180,88,255)';
  const green = 'rgba(107,170,100,255)';
  const gray = 'rgba(120,124,126,255)';

  switch (status) {
    case NO_MATCH:
      color = gray;
      borderColor = gray;
      textColor = "white";
      break;
    case CORRECT_LETTER:
      color = yellow;
      borderColor = yellow;
      textColor = "white";
      break;
    case CORRECT_PLACEMENT:
      color = green;
      borderColor = green;
      textColor = "white";
      break;
    default:
      color = "white";
      textColor = "black";
      borderColor = gray;
  }

  const blockStyle = {
    backgroundColor: color,
    border: `3px solid ${borderColor}`,
    color: textColor,
  };

  return (
    <div className={styles.block} style={blockStyle}>
      <h1 className={styles.blockText}>
        {letter}
      </h1>
    </div>
  );
}

export default Block;