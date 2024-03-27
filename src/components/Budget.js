// Component for handling the budget amount entered
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    // State variable, initialized with the current 
    // value of the budget
    const [newBudget, setNewBudget] = useState(budget);
    // Updates the value of newBudget when the 
    // user changes the value of the input field
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: £
            </span>
            <input
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}>
            </input>
        </div>
    );
};

export default Budget;
