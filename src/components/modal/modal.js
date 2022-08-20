import React, {useEffect} from 'react'
import ModalOverlay from '../modal-overlay/modal-overlay'
import {createPortal} from 'react-dom'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './modal.module.css'

const Modal = ({children, header, isOpen, close}) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      close()
    }
  }

  const handleCloseButton = () => close()

  return createPortal((
    <div className={styles.container} style={{
      display: isOpen ? 'block' : 'none'
    }}>
      <div className={styles.modal}>
        <div
          onClick={handleCloseButton}
          className={`mt-15 mr-10 ${styles.close}`}>
          <CloseIcon type='primary' />
        </div>
        <h2 className='pt-2  ml-10 mt-10 text text_type_main-large'>{header}</h2>
        {children}
      </div>
      <ModalOverlay close={handleCloseButton}/>
    </div>
  ), document.getElementById('modal'))
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
}

export default Modal