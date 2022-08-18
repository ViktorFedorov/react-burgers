import React, {useState, useEffect} from 'react'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay'
import ReactDOM from 'react-dom'

const Modal = ({children, header, isOpen}) => {
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        alert('ХУЛИ ЖМЕШЬ ТА!!!')
      }
    })
  }, [])

  return ReactDOM.createPortal((
    <div className={styles.container} style={{
      display: isOpen ? 'block' : 'none'
    }}>
      <ModalOverlay />
      <div className={styles.modal}>
        <button className={`mt-15 mr-10 ${styles.close}`}></button>
        <h2>{header}</h2>
        {children}
      </div>
    </div>
  ), document.getElementById('modal'))
}

export default Modal