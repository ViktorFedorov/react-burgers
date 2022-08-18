import React from 'react'
import styles from './ingredient-details.module.css'

const IngredientDetails = ({data, id}) => {
  const ingredientArr = data.filter(ing => ing._id === id)
  const [ingredientObj] = ingredientArr

  return (ingredientObj && (
    <div className={styles.ingredients}>
      <img src={ingredientObj.image_large} alt={ingredientObj.name} />
      <h3 className='mt-4 text text_type_main-medium'>{ingredientObj.name}</h3>
      <ul className={`mt-8 mb-15 text text_type_main-default text_color_inactive ${styles.nutrients}`}>
        <li className={styles.nutrient}>
          <p>Калории, ккал</p>
          <p className="text text_type_digits-default">{ingredientObj.calories}</p>
        </li>
        <li className={styles.nutrient}>
          <p>Белки, г</p>
          <p className="text text_type_digits-default">{ingredientObj.proteins}</p>
        </li>
        <li className={styles.nutrient}>
          <p>Жиры, г</p>
          <p className="text text_type_digits-default">{ingredientObj.fat}</p>
        </li>
        <li className={styles.nutrient}>
          <p>Углеводы, г</p>
          <p className="text text_type_digits-default">{ingredientObj.carbohydrates}</p>
        </li>
      </ul>
    </div>)
  )
}

export default IngredientDetails

