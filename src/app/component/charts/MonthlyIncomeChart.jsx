import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { income } from './incomeValue';


const groupByMonth = (income) => {
    const grouped = {};

    income.forEach(expense => {
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

const MonthlyIncomeChart = () => {
    const [incomeState, setIncomeState] = useState(income);
    const monthlyData = groupByMonth(incomeState);

    useEffect(() => {
        if (localStorage.getItem('incomeAmount')) {
            setIncomeState([...JSON.parse(localStorage.getItem('incomeAmount')), ...income])
        }
    }, []);

    return (

        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4> Aylık Gelir Miktarı</h4>
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

export default MonthlyIncomeChart;
