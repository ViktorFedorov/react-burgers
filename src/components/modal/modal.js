import React, {useEffect} from 'react'
import ModalOverlay from '../modal-overlay/modal-overlay'
import {createPortal} from 'react-dom'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './modal.module.css'

const Modal = ({children, header, isOpen, close}) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return createPortal((
    <div className={isOpen ? styles.opened : styles.container}>
      <div className={styles.modal}>
        <div
          onClick={close}
          className={`mt-15 mr-10 ${styles.close}`}>
          <CloseIcon type='primary' />
        </div>
        <h2 className='pt-2  ml-10 mt-10 text text_type_main-large'>{header}</h2>
        {children}
      </div>
      <ModalOverlay close={close}/>
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