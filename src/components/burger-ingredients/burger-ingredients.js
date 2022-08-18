import React from 'react'
import Tabs from '../tabs/tabs'
import IngredientList from '../ingredient-list/ingredient-list'
import PropTypes from 'prop-types'
import ingredientPropTypes from '../../utils/types'
import styles from './burger-ingredients.module.css'

const BurgerIngredients = ({data, onClick}) => {

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
        <IngredientList title='Булки' ingredients={buns} onClick={onClick}/>
        <IngredientList title='Соусы' ingredients={sauce} onClick={onClick}/>
        <IngredientList title='Начинки' ingredients={main} onClick={onClick}/>
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired
}

export default BurgerIngredients