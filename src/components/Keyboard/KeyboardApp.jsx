import Row from './Row'

import styles from '../../css/Keyboard.module.css'

function KeyboardApp({ keyboard }) {
  return (
    <div className={styles.keyboard}>
      <Row
        keyboard={keyboard}
        letters={["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]}
      ></Row>
      <Row
        keyboard={keyboard}
        letters={["A", "S", "D", "F", "G", "H", "J", "K", "L"]}
      ></Row>
      <Row
        keyboard={keyboard}
        letters={["Z", "X", "C", "V", "B", "N", "M"]}
      ></Row>
    </div>
  )
}


export default KeyboardApp;