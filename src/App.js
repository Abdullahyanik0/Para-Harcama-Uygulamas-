import './App.scss';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import products from './products.json'
import Product from './components/Product';
import Basket from './components/Basket';
function App() {

  const [money, setMoney] = useState(128000000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const resetBasket = () => {
    setBasket([])
  }



  console.log(basket);
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0),
    )
  }, [basket])

  return (
    <>
      <Header total={total} money={money} />
        <div className='container'>
          {products.map(product => (
            <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
          ))}
        </div>
      <Basket product={products} basket={basket} total={total} />
      <button className='reset' onClick={resetBasket}>Sepeti Sıfırla</button>
    </>
  );
}

export default App;
