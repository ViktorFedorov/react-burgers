import React, {useState} from 'react'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './tabs.module.css'

const Tabs = ({bunsRef, sauseRef, mainRef}) => {
  const [current, setCurrent] = useState('Булки')

  const handleClick = (e, el) => {
    setCurrent(e)
    el.current.scrollIntoView({block: "start", behavior: "smooth"})
  }

  return (
    <ul className={`mt-5 ${styles.tabs}`}>
      <li>
        <Tab
          active={current === 'Булки'}
          value='Булки'
          onClick={(e) => handleClick(e, bunsRef)}>
          Булки
        </Tab>
      </li>
      <li>
        <Tab
          active={current === 'Соусы'}
          value='Соусы'
          onClick={(e) => handleClick(e, sauseRef)}>
          Соусы
        </Tab>
      </li>
      <li>
        <Tab
          active={current === 'Начинки'}
          value='Начинки'
          onClick={(e) => handleClick(e, mainRef)}>
          Начинки
        </Tab>
      </li>
    </ul>
  )
}

export default Tabs