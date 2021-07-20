import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
import { useEffect, useState } from 'react';


function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  useEffect(() => {
    fetch('https://60f6b59b18254c00176e03ef.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      })
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} />}
      <Header onOpenCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-blog d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
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
