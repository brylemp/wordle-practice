import styles from '../../css/Keyboard.module.css'

function Key({ children, done }) {
  let color = 'gray', textColor = 'white';
  if (!done) {
    color = 'darkgray'
    textColor = 'black'
  }

  const keyStyle = {
    backgroundColor: color,
    color: textColor,
  }

  return (
    <div className={styles.key} style={keyStyle}>
      <h3 className={styles.keyText}>
        {children}
      </h3>
    </div>
  )
}

export default Key;