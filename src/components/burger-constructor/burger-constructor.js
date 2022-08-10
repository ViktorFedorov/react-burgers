import React from 'react';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css'
import Total from "../total/total";

const BurgerConstructor = ({data}) => {
  return (
    <div className="pl-5 pt-20 pr-4">
      <ul className={styles.list}>
        {
          data.map(ingredient => {
            const {name, image_mobile, price} = ingredient

            return (
              <li className={`mt-4 ${styles.item}`}>
                <div className={styles.dropicon}></div>
                <ConstructorElement
                  text={name}
                  thumbnail={image_mobile}
                  price={price}
                />
              </li>
            )
          })
        }
      </ul>
      <Total />
    </div>
  );
};

export default BurgerConstructor;