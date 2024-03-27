// Component for getting the remaining value 
// of the budget minus all costs
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    // Gets a total of all the costs
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>
                Remaining: £{budget - totalExpenses}
            </span>
        </div>
    );
};

export default Remaining;
