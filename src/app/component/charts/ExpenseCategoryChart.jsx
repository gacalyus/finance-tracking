import React, { useEffect, useState } from 'react';
import "../expensesAdd/expensesAdd.css";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { expenses } from './expensesValue';

const categories = [
    { name: "Yiyecek & İçecek", type: 1 },
    { name: "Alışveriş", type: 2 },
    { name: "Ulaşım", type: 3 },
    { name: "Hayat & Eğlence", type: 4 },
    { name: "İletişim & Teknoloji", type: 5 },
    { name: "Finansal Giderler", type: 6 },
];





const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c', '#d0ed57', '#C0C0C0', '#000000'];

const ExpenseCategoryChart = () => {
    const [expensesState, setExpensesState] = useState(expenses);
    const [categoriesState, setCategoriesState] = useState(categories);
    const [selectedMonth, setSelectedMonth] = useState({ month: 11, year: 2024 });



    const groupByCategoryForMonth = (expenses, selectedMonth) => {
        const categoryTotals = categoriesState.map(category => ({ name: category.name, totalAmount: 0 }));

        expenses.forEach(expense => {
            const expenseDate = new Date(expense.date);
            const expenseMonth = expenseDate.getMonth() + 1;
            const expenseYear = expenseDate.getFullYear();


            if (expenseMonth === selectedMonth.month && expenseYear === selectedMonth.year) {
                const category = categoryTotals.find(cat => cat?.name === categoriesState.find(c => c.type === expense.type)?.name);
                if (category) {
                    category.totalAmount += expense.amount;
                }
            }
        });

        return categoryTotals.filter(category => category.totalAmount > 0);
    };

    const categoryData = groupByCategoryForMonth(expensesState, selectedMonth);

    useEffect(() => {
        if (localStorage.getItem('expensesAmount')) {
            setExpensesState([...JSON.parse(localStorage.getItem('expensesAmount')), ...expenses])
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('expensesLocalArray')) {
            setCategoriesState([...JSON.parse(localStorage.getItem('expensesLocalArray')), ...expenses])
        }
    }, []);

    const handleMonthChange = (event) => {
        const [month, year] = event.target.value.split('-');
        setSelectedMonth({ month: parseInt(month), year: parseInt(year) });
    };

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4>{selectedMonth.month}-{selectedMonth.year} Kategorilere Göre Aylık Harcama</h4>

                <select onChange={handleMonthChange} style={{ width: "120px", height: "30px", padding: '0px' }} >
                    <option value="11-2024">Kasım 2024</option>
                    <option value="10-2024">Ekim 2024</option>
                    <option value="9-2024">Eylül 2024</option>
                </select>
            </div>


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