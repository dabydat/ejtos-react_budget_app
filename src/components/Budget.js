
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value < totalExpenses) {
            alert("the budget cannot be lower than the spending: " + totalExpenses + currency);
            return;
        }
        if (event.target.value > 20000) {
            alert("the upper limit value is 20,000"+currency);
            return;
        }

        setNewBudget(event.target.value);
        dispatch({ type: 'SET_BUDGET', payload: event.target.value });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;