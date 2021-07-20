
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';


function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  // * Добавление в корзину и на сервер
  const onAddToCart = (obj) => {
    axios.post('https://60f6b59b18254c00176e03ef.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  }

  // * Удаление с корзины и с сервера
  const onRemoveToCart = (id) => {
    axios.delete(`https://60f6b59b18254c00176e03ef.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    axios.get('https://60f6b59b18254c00176e03ef.mockapi.io/items').then(res => {
      setItems(res.data);
    });

    axios.get('https://60f6b59b18254c00176e03ef.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  return (
    <div className="wrapper clear">
      {
        cartOpened &&
        <Drawer
          items={cartItems}
          onCloseCart={() => setCartOpened(false)}
          onRemoveToCart={onRemoveToCart}
        />
      }
      <Header onOpenCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кросcовки'}</h1>
          <div className="search-blog d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <button className="removeBtn clear" onClick={() => setSearchValue('')}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z" />
              </svg>
            </button>}
            <input type="text" placeholder="Поиск..." onChange={onChangeSearchInput} value={searchValue} />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.name}
                price={item.price}
                image={item.image}
                addToFavorite={() => console.log('Добавили в закладки.')}
                addToCart={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
