import React from 'react';
import styles from '../../css/Status.module.css';

function StatusApp(props) {
  const {
    correctWord,
    isLoading,
    isInvalid,
    isFinished,
    isWin,
    resetGame,
  } = props;

  return (
    <div className={styles.status}>
      {isLoading && <div className={styles.loadingWheelContainer}>
        <div className={styles.loadingWheel}></div>
      </div>}
      {isInvalid && <h1 className={styles.statusText}>Invalid Word</h1>}
      {isFinished && <h1 className={styles.statusText}>{isWin ? ` Congratulations!` : `The word was: ${correctWord}`}</h1>}
      {isFinished &&
        <button
          className={`${styles.statusText} ${styles.statusBtn}`}
          onClick={resetGame}
        >
          Reset
        </button>
      }
    </div>
  );
}

export default React.memo(StatusApp, (prevProps, nextProps) => {
  return prevProps.isFinished === nextProps.isFinished &&
    prevProps.isInvalid === nextProps.isInvalid &&
    prevProps.isLoading === nextProps.isLoading;
});