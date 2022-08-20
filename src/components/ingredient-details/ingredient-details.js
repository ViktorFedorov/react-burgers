import React from 'react'
import PropTypes from 'prop-types'
import styles from './ingredient-details.module.css'

const IngredientDetails = ({ingredient}) => {
  const {image_large, name, calories, proteins, fat, carbohydrates} = ingredient

  return (ingredient && (
    <div className={styles.ingredients}>
      <img className='mt-3' src={image_large} alt={name} />
      <h3 className='mt-4 text text_type_main-medium'>{name}</h3>
      <ul className={`mt-8 mb-15 text text_type_main-default text_color_inactive ${styles.nutrients}`}>
        <li className={styles.nutrient}>
          <p>Калории, ккал</p>
          <p className="mt-2 text text_type_digits-default">{calories}</p>
        </li>
        <li className={styles.nutrient}>
          <p>Белки, г</p>
          <p className="mt-2 text text_type_digits-default">{proteins}</p>
        </li>
        <li className={styles.nutrient}>
          <p>Жиры, г</p>
          <p className="mt-2 text text_type_digits-default">{fat}</p>
        </li>
        <li className={styles.nutrient}>
          <p>Углеводы, г</p>
          <p className="mt-2 text text_type_digits-default">{carbohydrates}</p>
        </li>
      </ul>
    </div>)
  )
}

IngredientDetails.propTypes = {
  ingredient: PropTypes.object.isRequired
}

export default IngredientDetails

