import React from 'react';
import styles from './Drawer.module.scss';

function Drawer({ onCloseCart, onRemoveToCart, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <button className={styles.removeBtn} onClick={onCloseCart}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z" />
            </svg>
          </button>
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items flex">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20" key={obj.id}>
                  <div style={{ backgroundImage: `url(${obj.image})` }} className="cartItemImg" />
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <button className={styles.removeBtn} onClick={() => onRemoveToCart(obj.id)}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className={styles.greenButton}>
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтоб сделать заказ.</p>
            <button className={styles.greenButton} onClick={onCloseCart}>
              <img src="/img/arrow.svg" alt="Arrow" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
