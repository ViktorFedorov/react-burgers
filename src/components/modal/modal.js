import React, {useEffect} from 'react'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay'
import {createPortal} from 'react-dom'

const Modal = ({children, header, isOpen, close}) => {
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        close()
      }
    })
  }, [])

  const handleCloseButton = () => close()

  return createPortal((
    <div className={styles.container} style={{
      display: isOpen ? 'block' : 'none'
    }}>
      <ModalOverlay close={handleCloseButton}/>
      <div className={styles.modal}>
        <button
          onClick={handleCloseButton}
          className={`mt-15 mr-10 ${styles.close}`}></button>
        <h2 className='pt-2  ml-10 mt-10 text text_type_main-large'>{header}</h2>
        {children}
      </div>
    </div>
  ), document.getElementById('modal'))
}

export default Modal