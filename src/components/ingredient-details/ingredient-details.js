import React from 'react'
import styles from './ingredient-details.module.css'

const IngredientDetails = ({data, id}) => {
  const ingredient = data.filter(ing => ing._id === id)

  return (ingredient[0] && (
    <div className={styles.ingredients}>
      <img src={ingredient[0].image_large} alt={ingredient[0].name} />
      <h3 className='mt-4 text text_type_main-medium'>{ingredient[0].name}</h3>
      <ul className={`mt-8 mb-15 text text_type_main-default text_color_inactive ${styles.nutrients}`}>
        <li className={styles.nutrient}>
          <p>Калории, ккал</p>
          <p className="text text_type_digits-default">{ingredient[0].calories}</p>
        </li>
        <li className={styles.nutrient}>
          <p>Белки, г</p>
          <p className="text text_type_digits-default">{ingredient[0].proteins}</p>
        </li>
        <li className={styles.nutrient}>
          <p>Жиры, г</p>
          <p className="text text_type_digits-default">{ingredient[0].fat}</p>
        </li>
        <li className={styles.nutrient}>
          <p>Углеводы, г</p>
          <p className="text text_type_digits-default">{ingredient[0].carbohydrates}</p>
        </li>
      </ul>
    </div>)
  )
}

export default IngredientDetails

