

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { currency,dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState('');
    const handleChangeCurrency = (event) => {
        setNewCurrency(event.target.value)
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });

    }
    return (
        <div className='alert alert-secondary' style={{ backgroundColor: '#06ca8f' }}>
            <select className="custom-select" id="inputGroupSelect03" style={{ background: 'transparent' }} onChange={handleChangeCurrency}>
                <option defaultValue value="£" name="Pound">Currency ({"£" + ' ' + "Pound"})</option>
                <option defaultValue value="$" name="Dollar">Currency ({"$" + ' ' + "Dollar"})</option>
                <option defaultValue value="€" name="Euro">Currency ({"€" + ' ' + "Euro"})</option>
                <option defaultValue value="₹" name="Ruppee">Currency ({"₹" + ' ' + "Ruppee"})</option>
            </select>
        </div>
    );
};
export default CurrencyList;