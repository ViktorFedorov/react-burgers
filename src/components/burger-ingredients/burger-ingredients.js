import React from 'react'
import Tabs from '../tabs/tabs'
import IngredientList from '../ingredient-list/ingredient-list'
import PropTypes from 'prop-types'
import ingredientPropTypes from '../ingredient-item/ingredient-item'
import styles from './burger-ingredients.module.css'


const BurgerIngredients = ({data}) => {

  const buns = data.filter(ingredient => ingredient.type === 'bun')
  const sauce = data.filter(ingredient => ingredient.type === 'sauce')
  const main = data.filter(ingredient => ingredient.type === 'main')

  return (
    <section className={styles.ingredients}>
      <h1 className='text text_type_main-large mt-10'>
        Соберите бургер
      </h1>
      <Tabs />
      <div className={styles.scroll}>
        <IngredientList title='Булки' ingredients={buns} />
        <IngredientList title='Соусы' ingredients={sauce} />
        <IngredientList title='Начинки' ingredients={main} />
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes)
}

export default BurgerIngredients