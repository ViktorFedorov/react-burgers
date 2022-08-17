import React from 'react'
import ReactDOM from 'react-dom'
import styles from './modal-overlay.module.css'

const ModalOverlay = ({children}) => {
  return ReactDOM.createPortal((
    <div className={styles.overlay}>
      {children}
    </div>
  ), document.getElementById('modal-overlay'))
}

export default ModalOverlay