import React, { useState, useEffect, createContext } from 'react';

import KeyboardApp from './Keyboard/KeyboardApp';
import DisplayApp from './Display/DisplayApp';
import StatusApp from './Status/StatusApp';

import styles from '../css/App.module.css';
import getWord from '../../lib/word/getter';
import validateWord from '../../lib/word/validator';

import {
  WORD_LENGTH,
  GUESS_ATTEMPTS,
  KEY_DOWN,
  ENTER_KEY,
  BACK_SPACE_KEY,
  A_KEY,
  Z_KEY,
  EMPTY_WORDS,
  KEYBOARD,
} from './constants';

import {
  NO_MATCH,
  CORRECT_PLACEMENT,
  CORRECT_LETTER,
} from './constants';

export const KeyboardContext = createContext(null);

function App() {
  const [correctWord, setCorrectWord] = useState('RANDO');
  const [currentWord, setCurrentWord] = useState('');
  const [submittedWords, setSubmittedWords] = useState(EMPTY_WORDS);
  const [attempt, setAttempt] = useState(0);
  const [keyboard, setKeyboard] = useState(KEYBOARD);

  const [isFinished, setIsFinished] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInvalid, setIsInvalid] = useState(false);

  // Set starting word
  useEffect(() => {
    async function fetchData() {
      if (isFinished) { return; }
      const gotWord = await getWord(WORD_LENGTH);
      setCorrectWord(gotWord.toUpperCase());
      setIsLoading(false);
    }
    fetchData();
  }, [isFinished]);

  // Capture keyboard on keydown
  useEffect(() => {
    window.addEventListener(KEY_DOWN, handleKeyDown);

    return () => {
      window.removeEventListener(KEY_DOWN, handleKeyDown);
    };
  }, [currentWord, isLoading, isInvalid]);

  const handleKeyDown = ({ keyCode }) => {
    if (isLoading) { return; }

    if (keyCode === BACK_SPACE_KEY) {
      setCurrentWord(cw => cw.slice(0, -1));
      return;
    }

    if (keyCode === ENTER_KEY && currentWord.length === WORD_LENGTH) {
      handleEnter();
      return;
    }

    if (currentWord.length > WORD_LENGTH - 1) { return; }
    if (keyCode < A_KEY || keyCode > Z_KEY) { return; }

    setCurrentWord(cw => cw + String.fromCharCode(keyCode));
  };

  const getWordStatuses = () => {
    const wordAsArray = currentWord.split('');
    const correctWordAsArray = correctWord.split('');

    let wordStatuses = [];
    for (let i = 0; i < WORD_LENGTH; i++) {
      let letter = wordAsArray.shift();

      if (letter === correctWordAsArray[i]) {
        correctWordAsArray[i] = '';
        wordStatuses[i] = {
          [letter]: CORRECT_PLACEMENT
        };
        continue;
      }

      if (correctWordAsArray.includes(letter)) {
        correctWordAsArray[correctWordAsArray.indexOf(letter)] = '';
        wordStatuses[i] = {
          [letter]: CORRECT_LETTER
        };
        continue;
      }

      wordStatuses[i] = {
        [letter]: NO_MATCH
      };
    }

    return wordStatuses;
  };

  const handleEnter = async () => {
    // Validate word submitted
    setIsInvalid(false);
    setIsLoading(true);
    if (!await validateWord(currentWord)) {
      setIsInvalid(true);
      setIsLoading(false);
      setCurrentWord('');
      return;
    }

    setIsLoading(false);

    const wordStatuses = getWordStatuses();
    // Add word to submitted words
    let newWords = [...submittedWords];
    newWords[attempt] = wordStatuses;
    setSubmittedWords(newWords);

    // Update attempt count
    setCurrentWord('');
    setAttempt(attempt => attempt = attempt + 1);

    // Update keyboard
    const newKeyboard = { ...keyboard };
    for (let i = 0; i < currentWord.length; i++) {
      const currentLetter = currentWord[i];
      const currentStatus = newKeyboard[currentLetter];
      const newStatus = wordStatuses[i][currentLetter];

      if (currentStatus > newStatus) { continue; }

      newKeyboard[currentLetter] = newStatus;
    }
    setKeyboard(newKeyboard);

    // Validate game status
    if (currentWord === correctWord.toUpperCase()) {
      endGame(true);
      return;
    }

    if (attempt === GUESS_ATTEMPTS - 1) {
      endGame(false);
      return;
    }

    return;
  };

  const endGame = (didWin) => {
    setIsFinished(true);
    setIsWin(didWin);
  };

  const resetGame = () => {
    setSubmittedWords(EMPTY_WORDS);
    setIsFinished(false);
    setIsWin(false);
    setAttempt(0);
    setIsLoading(true);
    setKeyboard(KEYBOARD);
  };

  return (
    <div id={styles.app}>
      <div className={styles.displayContainer}>
        <DisplayApp
          attempt={attempt}
          currentWord={currentWord}
          submittedWords={submittedWords}
          correctWord={correctWord}
        />
      </div>
      <div className={styles.statusContainer}>
        <StatusApp
          correctWord={correctWord}
          isLoading={isLoading}
          isInvalid={isInvalid}
          isFinished={isFinished}
          isWin={isWin}
          resetGame={resetGame}
        />
      </div>
      <div className={styles.keyboardContainer}>
        <KeyboardContext.Provider value={{ setCurrentWord, handleEnter, isFinished }}>
          <KeyboardApp
            keyboardStatuses={keyboard}
          />
        </KeyboardContext.Provider>
      </div>
    </div >
  );
}

export default App;
