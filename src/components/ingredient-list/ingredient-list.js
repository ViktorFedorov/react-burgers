import React from 'react'
import IngredientItem from '../ingredient-item/ingredient-item'
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import ingredientPropTypes from'../../utils/types'
import styles from './ingredient-list.module.css'


const IngredientList = ({title, ingredients, onClick}) => {
  return (
    <>
      <h2 className='text text_type_main-medium mt-10'>{title}</h2>
      <div className={`ml-4 mt-6 mr-4 ${styles.grid}`}>
        {
          ingredients.map(ingredient => {
            const {_id, name, price, image} = ingredient
            return (
              <IngredientItem
                ingredient={ingredient}
                onClick={onClick}
                key={_id}
                id={_id}
                counter={<Counter count={0} />}
                name={name}
                price={price}
                image={image} />
            )
          })
        }
      </div>
    </>
  )
}

IngredientList.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired
}

export default IngredientList