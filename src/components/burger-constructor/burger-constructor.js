import React, {useContext} from 'react'
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import Total from '../total/total'
import PropTypes from 'prop-types'
import ingredientPropTypes from '../../utils/types'
import {BurgerIngredientsContext} from '../../context/burger-ingredients-context'
import styles from './burger-constructor.module.css'

const BurgerConstructor = ({openOrderDetails}) => {
  const data = useContext(BurgerIngredientsContext)

  let sum = data.reduce((acc, item) => {
    return acc + item.price
  }, 0)

  const bun = data.filter(item => item.type === 'bun')[0]
  const ingredients = data.filter(item => item.type !== 'bun')

  return (
    <div className='pl-5 pt-20'>
      <div className={`mt-4 ${styles.item} ${styles.bun}`}>
        <ConstructorElement
          text={`${bun.name} (верх)`}
          thumbnail={bun.image_mobile}
          price={bun.price}
          type='top'
          isLocked={true} />
      </div>
      <ul className={`pr-4 ${styles.scroll} ${styles.list}`}>
        {
          ingredients.map(ingredient => {
            const {_id, name, image_mobile, price} = ingredient

            return (
              <li key={_id} className={`mt-4 ${styles.item}`}>
                <div className={styles.dragndrop_icon}></div>
                <ConstructorElement
                  text={name}
                  thumbnail={image_mobile}
                  price={price} />
              </li>
            )
          })
        }
      </ul>
      <div className={`mt-4 ${styles.item} ${styles.bun}`}>
        <ConstructorElement
          text={`${bun.name} (низ)`}
          thumbnail={bun.image_mobile}
          price={bun.price}
          type='bottom'
          isLocked={true} />
      </div>
      <Total
        openOrderDetails={openOrderDetails}
        total={sum} />
    </div>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  openOrderDetails: PropTypes.func.isRequired
}

export default BurgerConstructor