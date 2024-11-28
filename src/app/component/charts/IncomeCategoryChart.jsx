import React, { useEffect, useState } from 'react';
import "../expensesAdd/expensesAdd.css";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { incomeArray } from '../income/incomeType';
import { income } from './incomeValue';



const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c', '#d0ed57', '#C0C0C0', '#000000'];

const IncomeCategoryChart = () => {
    const [incomeState, setIncomeState] = useState(income);
    const [categoriesState, setCategoriesState] = useState(incomeArray);
    const [selectedMonth, setSelectedMonth] = useState({ month: 11, year: 2024 });



    const groupByCategoryForMonth = (income, selectedMonth) => {
        const categoryTotals = categoriesState.map(category => ({ name: category.name, totalAmount: 0 }));

        income.forEach(income => {
            const incomeDate = new Date(income.date);
            const incomeMonth = incomeDate.getMonth() + 1;
            const incomeYear = incomeDate.getFullYear();


            if (incomeMonth === selectedMonth.month && incomeYear === selectedMonth.year) {
                const category = categoryTotals.find(cat => cat?.name === categoriesState.find(c => c.type === income.type)?.name);
                if (category) {
                    category.totalAmount += income.amount;
                }
            }
        });

        return categoryTotals.filter(category => category.totalAmount > 0);
    };

    const categoryData = groupByCategoryForMonth(incomeState, selectedMonth);

    useEffect(() => {
        if (localStorage.getItem('incomeAmount')) {
            setIncomeState([...JSON.parse(localStorage.getItem('incomeAmount')), ...income])
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('incomeLocalArray')) {
            setCategoriesState([...JSON.parse(localStorage.getItem('incomeLocalArray')), ...income])
        }
    }, []);

    const handleMonthChange = (event) => {
        const [month, year] = event.target.value.split('-');
        setSelectedMonth({ month: parseInt(month), year: parseInt(year) });
    };

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4>{selectedMonth.month}-{selectedMonth.year} Kategorilere Göre Aylık Gelir</h4>

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

export default IncomeCategoryChart;