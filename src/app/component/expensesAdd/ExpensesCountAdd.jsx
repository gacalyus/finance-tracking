"use client"
import React, { useEffect, useState } from "react"
import "../generalmonitoring/generalMonitoring.css"
import "./expensesAdd.css";
import { expensesArray } from "../expenses/expensesType";
import { format } from 'date-fns';


const ExpensesCountAdd = ({ render }) => {
    const [expensesTypeArray, setExpensesTypeArray] = useState(expensesArray);
    const [expensesAmountArray, setExpensesAmountArray] = useState([]);
    const [newExpense, setNewExpense] = useState({
        amount: 0,
        description: '',
        type: '',
        date: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedDate = newExpense.date
            ? format(new Date(newExpense.date), 'yyyy-MM-dd')
            : format(new Date(), 'yyyy-MM-dd');

        let newArr = [...expensesAmountArray];
        newArr = [...newArr, {
            description: newExpense.description,
            type: newExpense.type,
            amount: Number(newExpense.amount),
            date: formattedDate,
        }];

        setExpensesAmountArray(newArr);
        localStorage.setItem('expensesAmount', JSON.stringify(newArr));
        setNewExpense({ amount: 0, description: '', type: '', date: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (value.length > 72) return;
        setNewExpense((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (localStorage.getItem('expensesAmount')) {
            setExpensesAmountArray(JSON.parse(localStorage.getItem('expensesAmount')))
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('expensesLocalArray')) {
            setExpensesTypeArray(JSON.parse(localStorage.getItem('expensesLocalArray')))
        }
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">Gider Miktarı</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={newExpense.amount}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="name">Açıklama</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={newExpense.description}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="type">Gider Türü</label>
                <select
                    id="type"
                    name="type"
                    value={newExpense.type}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Bir tür seçin</option>
                    {expensesTypeArray && expensesTypeArray.map((item) => (
                        <option key={item.type} value={item.type}> {item.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="date">Tarih</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={newExpense.date}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit">Gider Ekle</button>
        </form>
    );
}

export default ExpensesCountAdd;