import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const expenses = [
    { description: "tel", type: 5, amount: 450, date: "2024-11-08" },
    { description: "e", type: 5, amount: 250, date: "2024-11-10" },
    { description: "e", type: 2, amount: 650, date: "2024-10-31" },
    { description: "ew", type: 4, amount: 550, date: "2024-10-11" },
    { description: "ew", type: 6, amount: 450, date: "2024-09-07" },
    { description: "sda", type: 3, amount: 250, date: "2024-07 - 13" },
    { description: "as", type: 2, amount: 280, date: "2024-06 - 14" },
    { description: "450", type: 4, amount: 200, date: "2023-06 - 28" },
    { description: "şi", type: 5, amount: 350, date: "2023 - 12 - 28" }
];


const categories = [
    { name: "Yiyecek & İçecek", type: 1 },
    { name: "Alışveriş", type: 2 },
    { name: "Ulaşım", type: 3 },
    { name: "Hayat & Eğlence", type: 4 },
    { name: "İletişim & Teknoloji", type: 5 },
    { name: "Finansal Giderler", type: 6 },
];


const groupByCategoryForMonth = (expenses, selectedMonth) => {
    const categoryTotals = categories.map(category => ({ name: category.name, totalAmount: 0 }));

    expenses.forEach(expense => {
        const expenseDate = new Date(expense.date);
        const expenseMonth = expenseDate.getMonth() + 1;
        const expenseYear = expenseDate.getFullYear();


        if (expenseMonth === selectedMonth.month && expenseYear === selectedMonth.year) {
            const category = categoryTotals.find(cat => cat.name === categories.find(c => c.type === expense.type).name);
            if (category) {
                category.totalAmount += expense.amount;
            }
        }
    });

    return categoryTotals.filter(category => category.totalAmount > 0);
};


const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c', '#d0ed57'];

const ExpenseCategoryChart = () => {
    const [selectedMonth, setSelectedMonth] = useState({ month: 11, year: 2024 });

    const categoryData = groupByCategoryForMonth(expenses, selectedMonth);



    const handleMonthChange = (event) => {
        const [month, year] = event.target.value.split('-');
        setSelectedMonth({ month: parseInt(month), year: parseInt(year) });
    };

    return (
        <div>
            <h1>{selectedMonth.month}-{selectedMonth.year} Kategorilere Göre Harcama</h1>



            <select onChange={handleMonthChange}>
                <option value="11-2024">Kasım 2024</option>
                <option value="10-2024">Ekim 2024</option>
                <option value="9-2024">Eylül 2024</option>
            </select>

            <ResponsiveContainer width="100%" height={340}>
                <PieChart>
                    <Pie
                        data={categoryData}
                        dataKey="totalAmount"
                        nameKey="name"
                        outerRadius={120}
                        fill="#8884d8"
                        label
                    >
                        {categoryData.map((entry, index) => (
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

export default ExpenseCategoryChart;