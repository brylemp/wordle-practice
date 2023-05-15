import styles from '../../css/Status.module.css'

function StatusApp(props) {
  const {
    correctWord,
    isLoading,
    isInvalid,
    isFinished,
    isWin,
    resetGame,
  } = props

  return (
    <div className={styles.statusContainer}>
      {isLoading && <h1 className={styles.statusText}>Loading</h1>}
      {isInvalid && <h1 className={styles.statusText}>Invalid Word</h1>}
      {isFinished && <h1 className={styles.statusText}>{isWin ? ` Congratulations!` : `The word was: ${correctWord}`}</h1>}
      {isFinished &&
        <button
          className={styles.statusText}
          onClick={resetGame}
        >
          Reset
        </button>
      }
    </div>
  )
}

export default StatusApp;