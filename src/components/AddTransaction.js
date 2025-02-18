import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction}=useContext(GlobalContext);
    
    const onSubmit=e=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

            addTransaction(newTransaction);
    }

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        id="text"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="Enter amount..."
                    />
                </div>
                <button type="submit" className="btn">Add transaction</button>
            </form>
        </div>
    );
}
