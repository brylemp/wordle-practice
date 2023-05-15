import { useState, useEffect } from 'react'

import KeyboardApp from './Keyboard/KeyboardApp'
import DisplayApp from './Display/DisplayApp'
import StatusApp from './Status/StatusApp'

import styles from '../css/App.module.css'
import getWord from '../../lib/word/getter'
import validateWord from '../../lib/word/validator'

import {
  emptyWords, enterKeyCode, backSpaceKeyCode,
  AkeyCode, ZkeyCode, keyDown, alphabet,
} from './constants';

function App() {
  const [correctWord, setCorrectWord] = useState('RANDO')
  const [currentWord, setCurrentWord] = useState('')
  const [submittedWords, setSubmittedWords] = useState(emptyWords)
  const [index, setIndex] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [isWin, setIsWin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isInvalid, setIsInvalid] = useState(false)
  const [keyboard, setKeyboard] = useState(alphabet)

  const maxLength = 5
  const numOfTries = 6

  useEffect(() => {
    async function fetchData() {
      if (!isLoading) {
        return
      }
      const gotWord = await getWord(maxLength);
      setCorrectWord(gotWord.toUpperCase());
      setIsLoading(false)
    }
    fetchData();
  }, [isLoading])

  useEffect(() => {
    window.addEventListener(keyDown, handleKeyDown);

    return () => {
      window.removeEventListener(keyDown, handleKeyDown);
    };
  }, [currentWord, isLoading, isInvalid])

  const handleKeyDown = ({ keyCode }) => {
    if (isLoading) {
      return
    }

    if (keyCode === backSpaceKeyCode) {
      setCurrentWord(cw => cw.slice(0, -1))
      return
    }

    if (keyCode === enterKeyCode && currentWord.length === maxLength) {
      handleEnter()
      return
    }

    if (currentWord.length > maxLength - 1) {
      return
    }

    if (keyCode < AkeyCode || keyCode > ZkeyCode) {
      return
    }

    const charWord = String.fromCharCode(keyCode)
    setCurrentWord(cw => cw + charWord)
  };

  const handleEnter = async () => {
    setIsInvalid(false)
    if (!await validateWord(currentWord)) {
      setIsInvalid(true)
      setCurrentWord('')
      return
    }

    let newWords = [...submittedWords]
    newWords[index] = currentWord
    setSubmittedWords(newWords)

    setCurrentWord('')
    setIndex(index => index = index + 1)

    const newKeyboard = { ...keyboard }

    for (let i = 0; i < currentWord.length; i++) {
      newKeyboard[currentWord[i]] = true
    }

    setKeyboard(newKeyboard)

    if (currentWord === correctWord.toUpperCase()) {
      endGame(true)
      return;
    }

    if (index === numOfTries - 1) {
      endGame(false)
      return;
    }

    return
  }

  const endGame = (didWin) => {
    setIsFinished(true)
    setIsWin(didWin)
  }

  const resetGame = () => {
    setSubmittedWords(emptyWords)
    setIsFinished(false)
    setIsWin(false)
    setIndex(0)
    setIsLoading(true)
    setKeyboard(alphabet)
  }

  return (
    <div id={styles.app}>
      <DisplayApp
        numOfTries={numOfTries}
        index={index}
        currentWord={currentWord}
        submittedWords={submittedWords}
        correctWord={correctWord}
      >
      </DisplayApp>
      <StatusApp
        correctWord={correctWord}
        isLoading={isLoading}
        isInvalid={isInvalid}
        isFinished={isFinished}
        isWin={isWin}
        resetGame={resetGame}
      >
      </StatusApp>
      <KeyboardApp keyboard={keyboard}></KeyboardApp>
    </div>
  )
}

export default App
