import Block from './Block'

import styles from '../../css/Display.module.css'
import {
  NO_MATCH,
  CORRECT_PLACEMENT,
  CORRECT_LETTER,
} from './constants'

function Row(props) {
  const {
    word,
    correctWord,
    isSelected,
    isDone,
  } = props;

  let newWord = word.slice();

  for (; newWord.length < 5;) {
    newWord = newWord + ' '
  }
  let wordAsArray = newWord.split('')
  let correctWordAsArray = correctWord.split('')

  const getStatus = (index) => {
    const correctLetter = correctWordAsArray[index]
    const currentLetter = wordAsArray[index]

    if (correctLetter === currentLetter) {
      const i = correctWordAsArray.indexOf(currentLetter)
      correctWordAsArray[i] = ''
      return CORRECT_PLACEMENT
    }

    if (correctWordAsArray.includes(currentLetter)) {
      const i = correctWordAsArray.indexOf(currentLetter)
      correctWordAsArray[i] = ''
      return CORRECT_LETTER
    }

    return NO_MATCH
  }

  return (
    <div className={isSelected ? `${styles.row} ${styles.selected}` : styles.row}>
      {wordAsArray.map((letter, index) =>
        <Block
          key={letter + index}
          letter={letter}
          status={!isDone && getStatus(index)}
        ></Block>
      )}
    </div>
  )
}

export default Row