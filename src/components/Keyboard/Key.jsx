import React, { useState, useContext } from 'react';
import { KeyboardContext } from '../App';

import styles from '../../css/Keyboard.module.css';
import { HiBackspace } from 'react-icons/hi';
import { BsArrowReturnLeft } from 'react-icons/bs';

import {
  NO_MATCH,
  CORRECT_PLACEMENT,
  CORRECT_LETTER,
} from './../constants';

function Key({ letter, status }) {
  const { setCurrentWord, handleEnter, isFinished } = useContext(KeyboardContext);
  const [pressed, setPressed] = useState(false);

  let keyStyle;
  switch (status) {
    case NO_MATCH:
      keyStyle = styles.noMatch;
      break;
    case CORRECT_LETTER:
      keyStyle = styles.correctLetter;
      break;
    case CORRECT_PLACEMENT:
      keyStyle = styles.correctPlacement;
      break;
  }

  const keyClasses = [styles.key, keyStyle];
  const keyTextClasses = [styles.keyText];

  if (letter === 'Enter' || letter === '<=') {
    keyClasses.push(styles.special);
    keyTextClasses.push(styles.special);
  }

  const handleClick = () => {
    setPressed(true);
    setTimeout(() => { setPressed(false); }, 100);

    if (isFinished) { return; }

    if (letter === 'Enter') {
      handleEnter();
      return;
    }

    setCurrentWord((currentWord) => {
      if (letter === '<=') {
        return currentWord.slice(0, -1);
      }

      if (currentWord.length === 5) { return currentWord; }

      return currentWord + letter;
    });
  };

  return (
    <div
      className={
        pressed ? `${keyClasses.join(' ')} pressed` :
          keyClasses.join(' ')
      }
      // style={keyStyle}
      onClick={handleClick}
    >
      <h3 className={keyTextClasses.join(' ')}>
        {
          letter === '<=' ? <HiBackspace /> :
            letter === 'Enter' ? <BsArrowReturnLeft /> :
              letter
        }
      </h3>
    </div>
  );
}

export default React.memo(Key);