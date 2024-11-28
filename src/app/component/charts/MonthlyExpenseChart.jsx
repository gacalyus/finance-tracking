import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { expenses } from './expensesValue';


const groupByMonth = (expenses) => {
    const grouped = {};

    expenses.forEach(expense => {
        const date = new Date(expense.date);
        const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;

        if (!grouped[monthYear]) {
            grouped[monthYear] = 0;
        }
        grouped[monthYear] += expense.amount;
    });
    const data = Object.entries(grouped).map(([monthYear, ToplamMitar]) => ({
        name: monthYear,
        ToplamMitar
    }));
    const sortedData = data.sort((a, b) => {
        const dateA = new Date(a.name.split('-')[1], a.name.split('-')[0] - 1);
        const dateB = new Date(b.name.split('-')[1], b.name.split('-')[0] - 1);


        return dateB - dateA;
    });

    return sortedData;
};

const MonthlyExpenseChart = () => {
    const [expensesState, setExpensesState] = useState(expenses);
    const monthlyData = groupByMonth(expensesState);

    useEffect(() => {
        if (localStorage.getItem('expensesAmount')) {
            setExpensesState([...JSON.parse(localStorage.getItem('expensesAmount')), ...expenses])
        }
    }, []);

    return (

        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4> Aylık Gider Miktarı</h4>
            </div>
            <ResponsiveContainer width="100%" height={340}>
                <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ToplamMitar" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MonthlyExpenseChart;
