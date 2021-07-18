import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

const cardItem = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    image: '/img/sneakers/sneakers-1.jpg'
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    image: '/img/sneakers/sneakers-2.jpg'
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    image: '/img/sneakers/sneakers-3.jpg'
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    image: '/img/sneakers/sneakers-4.jpg'
  },
  {
    name: 'Мужские Кроссовки Under Armour Curry 8',
    price: 15199,
    image: '/img/sneakers/sneakers-5.jpg'
  },
  {
    name: 'Мужские Кроссовки Nike Kyrie 7',
    price: 11299,
    image: '/img/sneakers/sneakers-6.jpg'
  },
  {
    name: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 10799,
    image: '/img/sneakers/sneakers-7.jpg'
  },
  {
    name: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 16499,
    image: '/img/sneakers/sneakers-8.jpg'
  },
  {
    name: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 13999,
    image: '/img/sneakers/sneakers-9.jpg'
  },
  {
    name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: 11299,
    image: '/img/sneakers/sneakers-10.jpg'
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-blog d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {cardItem.map((obj) => (
            <Card title={obj.name} price={obj.price} image={obj.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
