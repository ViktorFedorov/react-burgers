import React from 'react'
import ReactDOM from 'react-dom'
import styles from './modal-overlay.module.css'

const ModalOverlay = ({children, isOpen, closeOverlay}) => {
  return ReactDOM.createPortal((
    <div
      onClickCapture={closeOverlay}
      onKeyDown={closeOverlay}
      className={`closed ${styles.overlay}`} style={{
      display: isOpen ? 'flex' : 'none'
    }}>
      {children}
    </div>
  ), document.getElementById('modal-overlay'))
}

export default ModalOverlay