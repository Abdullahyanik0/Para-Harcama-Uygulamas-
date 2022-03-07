import React from 'react';
import { moneyFormat } from '../Helpers';

const Header = ({ total, money }) => {

    return (
        <>
            {total === 0 && (
                <div className='header'>Harcamak için $ {moneyFormat(money - total)}  paranız var !</div>
            )}
            {total > 0 && money- total !== 0 && (
                <div className='header'>Harcamak için $ {moneyFormat(money - total)}  paranız kaldı !</div>
            )}
            
            {money - total === 0 && (
                <div className='header'>Paran bitti, Parasız insan boş insandır.</div>
       
            )}
            

        </>
    )
};

export default Header;
