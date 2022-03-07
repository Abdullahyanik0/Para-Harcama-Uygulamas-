import React from 'react';

const Product = ({ product, total, money, basket, setBasket }) => {

    const basketItem = basket.find(item => item.id === product.id)

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)

        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }
        else {
            setBasket([...basket, {
                id: product.id,
                amount: 1,

            }])
        }
    }

    return <div className='product'>
        <div className='products'>
            <img className='images' src={product.image} alt={product.image} />
            <h6>{product.title}</h6>
            <div className='price'>$ {product.price}</div>
            <div className='action'>
                <button className='buy' disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
                <span className='amount'>{basketItem && basketItem.amount || 0}</span>
                <button className='sell' disabled={!basketItem} onClick={removeBasket}>Sat</button>
            </div>

        </div>

    </div>;
};

export default Product;
