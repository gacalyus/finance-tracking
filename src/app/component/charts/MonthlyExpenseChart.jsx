import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const expenses = [
    {
        "description": "tel",
        "type": "5",
        "amount": 450,
        "date": "2024-11-08"
    },
    {
        "description": "e",
        "type": "5",
        "amount": 250,
        "date": "2024-11-10"
    },
    {
        "description": "e",
        "type": "2",
        "amount": 650,
        "date": "2024-10-31"
    },
    {
        "description": "ew",
        "type": "4",
        "amount": 550,
        "date": "2024-10-11"
    },
    {
        "description": "ew",
        "type": "6",
        "amount": 450,
        "date": "2024-09-07"
    },
    {
        "description": "iş",
        "type": "4",
        "amount": 560,
        "date": "2024-08-09"
    },
    {
        "description": "09.08.2024",
        "type": "6",
        "amount": 597,
        "date": "2024-08-17"
    },
    {
        "description": "sda",
        "type": "3",
        "amount": 250,
        "date": "2024-07-13"
    },
    {
        "description": "as",
        "type": "2",
        "amount": 280,
        "date": "2024-06-14"
    },
    {
        "description": "450",
        "type": "4",
        "amount": 200,
        "date": "2023-06-28"
    },
    {
        "description": "şi",
        "type": "5",
        "amount": 350,
        "date": "2023-12-28"
    }
]

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

    return Object.entries(grouped).map(([monthYear, totalAmount]) => ({
        name: monthYear,
        totalAmount
    }));
};

const MonthlyExpenseChart = () => {
    const monthlyData = groupByMonth(expenses);

    return (
        <ResponsiveContainer width="100%" height={340}>
            <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalAmount" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MonthlyExpenseChart;
