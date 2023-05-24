import React from 'react';

import styles from '../../css/Display.module.css';
import {
  NO_MATCH,
  CORRECT_PLACEMENT,
  CORRECT_LETTER,
  BLACK,
  WHITE,
  GRAY,
  YELLOW,
  GREEN,
} from './../constants';

function Block({ letter, status }) {
  let color, borderColor, textColor;

  textColor = WHITE;
  switch (status) {
    case NO_MATCH:
      color = GRAY;
      borderColor = GRAY;
      break;
    case CORRECT_LETTER:
      color = YELLOW;
      borderColor = YELLOW;
      break;
    case CORRECT_PLACEMENT:
      color = GREEN;
      borderColor = GREEN;
      break;
    default:
      color = WHITE;
      textColor = BLACK;
      borderColor = GRAY;
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

export default React.memo(Block);