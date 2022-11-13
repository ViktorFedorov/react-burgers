import React from 'react'
import styles from './header-link.module.css'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

const HeaderLink = ({icon, children, textClass, path}) => {
  const {user} = useSelector(store => store.user)

  return (
    <NavLink
      to={path}
      className={styles.link}>
      {icon}
      <div className={`ml-2 ${textClass}`}>{children}</div>
    </NavLink>
  )
}

HeaderLink.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.element.isRequired,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  textClass: PropTypes.string.isRequired
}

export default HeaderLink