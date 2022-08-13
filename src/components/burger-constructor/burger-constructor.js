import React from 'react';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import Total from "../total/total";
import styles from './burger-constructor.module.css'

const BurgerConstructor = ({data}) => {
  return (
    <div className="pl-5 pt-20 pr-4">
      <div className={`mt-4 ${styles.item}`}>
        <div className={styles.dropicon}></div>
        <ConstructorElement
          text={data[0].name}
          thumbnail={data[0].image_mobile}
          price={data[0].price}
          type="top"
          isLocked={true} />
      </div>
      <ul className={`${styles.scroll} ${styles.list}`}>
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
      <Total />
    </div>
  );
};

export default BurgerConstructor;