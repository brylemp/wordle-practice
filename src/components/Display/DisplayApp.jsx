import React from 'react';
import Row from './Row';

import styles from '../../css/Display.module.css';
import { GUESS_ATTEMPTS } from '../constants';

function DisplayApp(props) {
  const {
    attempt,
    currentWord,
    submittedWords,
  } = props;

  const getWordObjArr = (word) => {
    let newWord = word.slice();
    for (; newWord.length < 5;) {
      newWord = newWord + ' ';
    }

    return newWord.split('').map(letter => ({ [letter]: 0 }));
  };

  return (
    <div className={styles.display}>
      {[...Array(GUESS_ATTEMPTS)].map((_, i) =>
        <Row
          key={i}
          word={attempt === i ? getWordObjArr(currentWord) : submittedWords[i]}
        ></Row>
      )}
    </div>
  );
}

export default DisplayApp;