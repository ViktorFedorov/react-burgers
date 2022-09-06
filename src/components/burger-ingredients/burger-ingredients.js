import React, {useRef} from 'react'
import Tabs from '../tabs/tabs'
import IngredientList from '../ingredient-list/ingredient-list'
import PropTypes from 'prop-types'
import styles from './burger-ingredients.module.css'

const BurgerIngredients = ({onClick, ingredients}) => {
  const buns = ingredients.filter(ingredient => ingredient.type === 'bun')
  const sauce = ingredients.filter(ingredient => ingredient.type === 'sauce')
  const main = ingredients.filter(ingredient => ingredient.type === 'main')

  const bunsSection = useRef(null)
  const sauceSection = useRef(null)
  const mainSection = useRef(null)

  return (
    <section className={styles.ingredients}>
      <h1 className='text text_type_main-large mt-10'>
        Соберите бургер
      </h1>
      <Tabs bunsRef={bunsSection} sauseRef={sauceSection} mainRef={mainSection} />
      <div className={styles.scroll}>
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
  )
}

BurgerIngredients.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default BurgerIngredients