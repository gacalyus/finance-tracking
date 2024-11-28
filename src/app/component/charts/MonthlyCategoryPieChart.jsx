import React, { useState, useMemo, useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";
import { format, parse } from "date-fns";
import { expenses } from './expensesValue';
import { income } from './incomeValue';

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#F08080", "#8A2BE2"];


const calculateIncomeExpenseRatio = (incomeData, expenseData, selectedMonth) => {
    const [month, year] = selectedMonth.split("-");


    const filteredIncome = incomeData.filter((item) => {
        const itemDate = new Date(item.date);
        return (
            itemDate.getMonth() + 1 === parseInt(month, 10) &&
            itemDate.getFullYear() === parseInt(year, 10)
        );
    });
    const filteredExpenses = expenseData.filter((item) => {
        const itemDate = new Date(item.date);
        return (
            itemDate.getMonth() + 1 === parseInt(month, 10) &&
            itemDate.getFullYear() === parseInt(year, 10)
        );
    });


    const totalIncome = filteredIncome.reduce((sum, item) => sum + item.amount, 0);
    const totalExpenses = filteredExpenses.reduce((sum, item) => sum + item.amount, 0);

    const total = totalIncome + totalExpenses;
    return total > 0
        ? [
            { name: "Gelir", value: totalIncome },
            { name: "Gider", value: totalExpenses },
        ]
        : [];
};

const MonthlyIncomeExpenseRatioChart = () => {
    const [selectedMonth, setSelectedMonth] = useState("11-2024");

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

    const ratioData = useMemo(() => {
        return calculateIncomeExpenseRatio(incomeState, expensesState, selectedMonth);
    }, [selectedMonth]);

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h4>{selectedMonth} Gelir ve Gider Oranı</h4>
                <select
                    onChange={handleMonthChange}
                    style={{ width: "120px", height: "30px", padding: "0px" }}
                >
                    <option value="11-2024">Kasım 2024</option>
                    <option value="10-2024">Ekim 2024</option>
                    <option value="9-2024">Eylül 2024</option>
                </select>
            </div>

            <ResponsiveContainer width="100%" height={340}>
                <PieChart>
                    <Pie
                        data={ratioData}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={120}
                        fill="#8884d8"
                        label={(entry) => `${entry.name}: ${((entry.value / (ratioData[0].value + ratioData[1].value)) * 100).toFixed(1)}%`}
                    >
                        {ratioData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MonthlyIncomeExpenseRatioChart;
