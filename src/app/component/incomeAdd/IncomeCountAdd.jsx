

"use client"
import React, { useEffect, useState } from "react"
import "../generalmonitoring/generalMonitoring.css"
import "../expensesAdd/expensesAdd.css";
import { format } from 'date-fns';
import { incomeArray } from "../income/incomeType";


const IncomeCountAdd = () => {
    const [incomeTypeArray, setIncomeTypeArray] = useState(incomeArray);
    const [incomeAmountArray, setIncomeAmountArray] = useState([]);
    const [newIncome, setNewIncome] = useState({
        amount: 0,
        description: '',
        type: '',
        date: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedDate = newIncome.date
            ? format(new Date(newIncome.date), 'yyyy-MM-dd')
            : format(new Date(), 'yyyy-MM-dd');

        let newArr = [...incomeAmountArray];
        newArr = [...newArr, {
            description: newIncome.description,
            type: Number(newIncome.type),
            amount: Number(newIncome.amount),
            date: formattedDate,
        }];

        setIncomeAmountArray(newArr);
        localStorage.setItem('incomeAmount', JSON.stringify(newArr));
        setNewIncome({ amount: 0, description: '', type: '', date: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (value.length > 72) return;
        setNewIncome((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (localStorage.getItem('incomeAmount')) {
            setIncomeAmountArray(JSON.parse(localStorage.getItem('incomeAmount')))
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('incomeLocalArray')) {
            setIncomeTypeArray(JSON.parse(localStorage.getItem('incomeLocalArray')))
        }
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">Gelir Miktarı</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={newIncome.amount}
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
                    value={newIncome.description}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="type">Gelir Türü</label>
                <select
                    id="type"
                    name="type"
                    value={newIncome.type}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Bir tür seçin</option>
                    {incomeTypeArray && incomeTypeArray.map((item) => (
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
                    value={newIncome.date}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit">Gelir Ekle</button>
        </form>
    );
}

export default IncomeCountAdd;