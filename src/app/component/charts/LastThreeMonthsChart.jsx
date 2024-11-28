import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { subMonths, format, isAfter } from "date-fns";
import { expenses } from './expensesValue';
import { income } from './incomeValue';


function processLastThreeMonths(expenses, income) {
    const currentDate = new Date();
    const sixMonthsAgo = subMonths(currentDate, 6);

    const formatMonth = (date) => format(new Date(date), "yyyy-MM");

    const filteredExpenses = expenses.filter((item) =>
        isAfter(new Date(item.date), sixMonthsAgo)
    );
    const filteredIncome = income.filter((item) =>
        isAfter(new Date(item.date), sixMonthsAgo)
    );

    const groupedData = {};

    filteredExpenses.forEach((item) => {
        const month = formatMonth(item.date);
        groupedData[month] = groupedData[month] || { month, expenses: 0, income: 0 };
        groupedData[month].expenses += item.amount;
    });

    filteredIncome.forEach((item) => {
        const month = formatMonth(item.date);
        groupedData[month] = groupedData[month] || { month, expenses: 0, income: 0 };
        groupedData[month].income += item.amount;
    });

    return Object.values(groupedData).sort((a, b) => new Date(a.month) - new Date(b.month));
}


const LastThreeMonthsChart = () => {

    const [expensesState, setExpensesState] = useState(expenses);
    const [incomeState, setIncomeState] = useState(income);

    useEffect(() => {
        if (localStorage.getItem('incomeAmount')) {
            setIncomeState([...JSON.parse(localStorage.getItem('incomeAmount')), ...income])
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('expensesAmount')) {
            setExpensesState([...JSON.parse(localStorage.getItem('expensesAmount')), ...expenses])
        }
    }, []);



    const data = processLastThreeMonths(expensesState, incomeState);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#82ca9d" name="Gelir" />
                <Bar dataKey="expenses" fill="#8884d8" name="Gider" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default LastThreeMonthsChart;
