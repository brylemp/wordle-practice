import Row from './Row'

import styles from '../../css/Display.module.css'

function DisplayApp(props) {
  const {
    numOfTries,
    index,
    currentWord,
    submittedWords,
    correctWord,
  } = props

  return (
    <div className={styles.display}>
      {[...Array(numOfTries)].map((_, i) =>
        <Row
          key={i}
          isSelected={index === i}
          isDone={index <= i}
          word={index === i ? currentWord : submittedWords[i]}
          correctWord={correctWord}
        ></Row>
      )}
    </div>
  )
}

export default DisplayApp;