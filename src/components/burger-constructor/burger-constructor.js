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

  return (
    <div className='pl-5 pt-20'>
      <div className={`mt-4 ${styles.item} ${styles.bun}`}>
        <ConstructorElement
          text={`${data[0].name} (верх)`}
          thumbnail={data[0].image_mobile}
          price={data[0].price}
          type='top'
          isLocked={true} />
      </div>
      <ul className={`pr-4 ${styles.scroll} ${styles.list}`}>
        {
          data.map(ingredient => {
            const {_id, name, image_mobile, price, type} = ingredient

            if (type !== 'bun') {
              return (
                <li key={_id} className={`mt-4 ${styles.item}`}>
                  <div className={styles.dropicon}></div>
                  <ConstructorElement
                    text={name}
                    thumbnail={image_mobile}
                    price={price} />
                </li>
              )
            }
          })
        }
      </ul>
      <div className={`mt-4 ${styles.item} ${styles.bun}`}>
        <ConstructorElement
          text={`${data[0].name} (низ)`}
          thumbnail={data[0].image_mobile}
          price={data[0].price}
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