import React, {useState} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './tabs.module.css'

const Tabs = () => {
  const [current, setCurrent] = useState('Булки')

  return (
    <ul className={`mt-5 ${styles.tabs}`}>
      <li>
        <Tab active={current === 'Булки'} value='Булки' onClick={() => setCurrent('Булки')}>
          Булки
        </Tab>
      </li>
      <li>
        <Tab active={current === 'Соусы'} value='Соусы' onClick={() => setCurrent('Соусы')}>
          Соусы
        </Tab>
      </li>
      <li>
        <Tab active={current === 'Начинки'} value='Начинки' onClick={() => setCurrent('Начинки')}>
          Начинки
        </Tab>
      </li>
    </ul>
  );
};

export default Tabs;