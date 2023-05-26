import React from 'react';

import styles from '../../css/Display.module.css';
import {
  NO_MATCH,
  CORRECT_PLACEMENT,
  CORRECT_LETTER,
} from './../constants';

function Block({ letter, status }) {
  let blockStyle;

  switch (status) {
    case NO_MATCH:
      blockStyle = styles.noMatch;
      break;
    case CORRECT_LETTER:
      blockStyle = styles.correctLetter;
      break;
    case CORRECT_PLACEMENT:
      blockStyle = styles.correctPlacement;
      break;
  }

  const blockClass = [styles.block, blockStyle];
  const blockTextClasses = [styles.blockText];

  return (
    <div className={`${blockClass.join(' ')} pressed`}>
      <h1 className={blockTextClasses.join(' ')}>
        {letter}
      </h1>
    </div>
  );
}

export default React.memo(Block);