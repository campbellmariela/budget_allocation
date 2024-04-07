// Component to dispatch a delete, increase 
// and decrease actions
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    // Delete all allocation from a department 
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    // Increase allocation by 10
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    // Decrease allocation by 10
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <FaPlusCircle size="2.2em" color="green" onClick={event=>increaseAllocation(props.name)}></FaPlusCircle>
            </td>
            <td>
                <FaMinusCircle size="2.2em" color="red" onClick={event=>decreaseAllocation(props.name)}></FaMinusCircle>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
