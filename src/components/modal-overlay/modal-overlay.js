import React from 'react'
import styles from './modal-overlay.module.css'

const ModalOverlay = ({close}) => {
  return (
    <div
      onClick={close}
      className={styles.overlay}></div>
  )
}

export default ModalOverlay