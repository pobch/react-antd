import React from 'react'
import { Button } from 'antd'
import './App.less'
import styles from './Pob.module.css'
import Toy from './Toy'

function App() {
  return (
    <div>
      <Button type="primary">Howdy</Button>
      <h3 className={styles.pob}>Pob</h3>
      <Toy />
    </div>
  )
}

export default App
