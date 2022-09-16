import React from 'react'
import PropTypes from 'prop-types'
import styles from './modal-overlay.module.css'

const ModalOverlay = ({close}) => {
  return (
    <div
      onClick={close}
      className={styles.overlay}></div>
  )
}

ModalOverlay.propTypes = {
  // close: PropTypes.func.isRequired
}

export default ModalOverlay