import Key from './Key'

import styles from '../../css/Keyboard.module.css'

function Row({ keyboard, letters }) {
  return (
    <div className={styles.row}>
      {letters.map(key => <Key key={key} done={keyboard[key]}>{key}</Key>)}
    </div>
  )
}

export default Row;