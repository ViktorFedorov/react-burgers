import React from 'react'
import IngredientItem from '../ingredient-item/ingredient-item'
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-list.module.css'

const IngredientList = ({title, ingredients}) => {
  return (
    <>
      <h2 className='text text_type_main-medium mt-10'>{title}</h2>
      <div className={`ml-4 mt-6 mr-4 ${styles.grid}`}>
        {
          ingredients.map(ingredient => {
            const {_id, name, price, image} = ingredient
            return (
              <IngredientItem
                key={_id}
                counter={<Counter count={1} />}
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

export default IngredientList