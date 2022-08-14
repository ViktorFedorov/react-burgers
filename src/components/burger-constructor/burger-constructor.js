import React from 'react';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import Total from "../total/total";
import PropTypes from 'prop-types'
import styles from './burger-constructor.module.css'

const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string,
  __v: PropTypes.number
});

const BurgerConstructor = ({data}) => {
  return (
    <div className="pl-5 pt-20">
      <div className={`mt-4 ${styles.item}`}>
        <div className={styles.dropicon}></div>
        <ConstructorElement
          text={data[0].name}
          thumbnail={data[0].image_mobile}
          price={data[0].price}
          type="top"
          isLocked={true} />
      </div>
      <ul className={`pr-4 ${styles.scroll} ${styles.list}`}>
        {
          data.map(ingredient => {
            const {_id, name, image_mobile, price} = ingredient
            if (ingredient.type !== 'bun') {
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
      <div className={`mt-4 ${styles.item}`}>
        <div className={styles.dropicon}></div>
        <ConstructorElement
          text={data[data.length - 1].name}
          thumbnail={data[data.length - 1].image_mobile}
          price={data[data.length - 1].price}
          type="bottom"
          isLocked={true} />
      </div>
      <Total total={610} />
    </div>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes)
}

export default BurgerConstructor;