import React, {useEffect, useRef, useState} from 'react'
import IngredientList from '../ingredient-list/ingredient-list'
import PropTypes from 'prop-types'
import styles from './burger-ingredients.module.css'
import {useSelector} from 'react-redux'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerIngredients = ({onClick}) => {
  const {ingredients, loading, error} = useSelector(store => store.ingredients)
  const [current, setCurrent] = useState('Булки')

  const handleClick = (e, el) => {
    setCurrent(e)
    el.current.scrollIntoView({block: "start", behavior: "smooth"})
  }

  const buns = ingredients.filter(ingredient => ingredient.type === 'bun')
  const sauce = ingredients.filter(ingredient => ingredient.type === 'sauce')
  const main = ingredients.filter(ingredient => ingredient.type === 'main')

  const bunsSection = useRef(null)
  const sauceSection = useRef(null)
  const mainSection = useRef(null)
  const blockRef = useRef(null)

  useEffect(() => {
    const menu = document.getElementById('menu')
    const scrollBlock = () => {

      let coordsBun = ( null !== bunsSection.current ) && bunsSection.current.getBoundingClientRect().top
      let coordsSauces = ( null !== sauceSection.current ) && sauceSection.current.getBoundingClientRect().top
      let coordsMain = ( null !== mainSection.current ) && mainSection.current.getBoundingClientRect().top

      if ( 250 < coordsBun && coordsBun < 350 ) setCurrent('Булки')
      else if ( 250 < coordsSauces && coordsSauces < 350 ) setCurrent('Соусы')
      else if ( 250 < coordsMain && coordsMain < 350 ) setCurrent('Начинки')
    }

    menu && menu.addEventListener('scroll', scrollBlock);

    return () => {
      menu && menu.removeEventListener('scroll', scrollBlock);
    }
  })

  return (
    <>
      {loading && 'Загружаю...'}
      {error && 'Ошибка загрузки данных =('}
      {!loading && !error && (
        <section className={styles.ingredients}>
          <h1 className='text text_type_main-large mt-10'>
            Соберите бургер
          </h1>
          <ul className={`mt-5 ${styles.tabs}`}>
            <li>
              <Tab
                active={current === 'Булки'}
                value='Булки'
                id='bun'
                onClick={(e) => handleClick(e, bunsSection)}>
                Булки
              </Tab>
            </li>
            <li>
              <Tab
                active={current === 'Соусы'}
                value='Соусы'
                id='sauce'
                onClick={(e) => handleClick(e, sauceSection)}>
                Соусы
              </Tab>
            </li>
            <li>
              <Tab
                active={current === 'Начинки'}
                value='Начинки'
                id='main'
                onClick={(e) => handleClick(e, mainSection)}>
                Начинки
              </Tab>
            </li>
          </ul>
          <div
            id='menu'
            ref={blockRef}
            className={styles.scroll}>
            <div ref={bunsSection}>
              <IngredientList title='Булки' ingredients={buns} onClick={onClick} />
            </div>
            <div ref={sauceSection}>
              <IngredientList title='Соусы' ingredients={sauce} onClick={onClick} />
            </div>
            <div ref={mainSection}>
              <IngredientList title='Начинки' ingredients={main} onClick={onClick} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}

BurgerIngredients.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default BurgerIngredients





