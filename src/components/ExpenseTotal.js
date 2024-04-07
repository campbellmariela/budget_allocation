// Component for displaying the amount of
// the budget spent so far
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    // Gets the total of all costs
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    return (
        <div className='alert alert-primary'>
            <span>
                Spent so far: {currency}{totalExpenses}
            </span>
        </div>
    );
};

export default ExpenseTotal;
