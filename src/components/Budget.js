// Component for handling the budget amount entered
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    
    const changeBudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(val > 20000){
            // Alert if the upper limit value is exceeded
            alert('The budget value cannot exceed 20000')
        } else if (val < totalExpenses) {
            // Alert if budget is lower than the spending
            alert('You cannot reduce the budget value lower than the spending')
        } else {
            dispatch({
                // Updates the change of the budget
                type: 'SET_BUDGET',
                payload: val,
            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
            </span>
            {/* Budget editable with option to increase 
            and decrease its value by 10, and max value */}
            <input
                type="number" 
                step="10"
                max="20000" 
                value={budget} 
                onChange={(event)=>changeBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;
