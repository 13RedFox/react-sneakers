import React from 'react';
// import styles from './Header.module.scss';

function Header({ onOpenCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="Logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">магазин лучших кросовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onOpenCart}>
          <img width={20} height={20} src="/img/cart.svg" alt="Cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
