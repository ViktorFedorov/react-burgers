import React from 'react';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderLink from "../header-link/header-link";
import styles from './app-header.module.css'

const AppHeader = () => {
  const textDefault = 'text text_type_main-default'

  return (
    <header className={styles.header}>
      <nav className={`content ${styles.navigation}`}>
        <ul className={styles.list}>
          <li className="mr-7">
            <HeaderLink active={true} icon={<BurgerIcon type="primary"/>} textClass={textDefault}>
              Конструктор
            </HeaderLink>
          </li>
          <li>
            <HeaderLink icon={<ListIcon type="secondary" />} textClass={textDefault}>
              Лента заказов
            </HeaderLink>
          </li>
        </ul>
        <a href="/" className={styles.logo}>
          <Logo />
        </a>
        <div className={styles.cabinet}>
          <HeaderLink icon={<ProfileIcon type="secondary"/>} textClass={textDefault}>
            Личный кабинет
          </HeaderLink>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;