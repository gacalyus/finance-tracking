"use client"

import React, { useEffect, useState } from "react"
import "../generalmonitoring/generalMonitoring.css"
import Image from "next/image";
import expensesIconSmall from "../../../images/expensesIconSmall.svg"
import "./expensesAdd.css";
import { expensesArray } from "../expenses/expensesType";

const ExpensesAdd = () => {

    const [expensesTypeArray, setExpensesTypeArray] = useState(expensesArray);

    const [newExpense, setNewExpense] = useState({
        name: '',
        type: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let newArr = expensesTypeArray
        newArr = [...newArr, { name: newExpense.name, type: expensesTypeArray[expensesTypeArray.length - 1].type + 1 }]
        setExpensesTypeArray(newArr);
        localStorage.setItem('expensesLocalArray', JSON.stringify(newArr))
        setNewExpense({ name: '', type: '' });
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
        if (localStorage.getItem('expensesLocalArray')) {
            setExpensesTypeArray(JSON.parse(localStorage.getItem('expensesLocalArray')))
        }
    }, [])

    return (
        <div className="container">
            <div className="itemcomponent">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Gider Adı</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newExpense.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {/* <div>
                        <label htmlFor="type">Gider Türü</label>
                        <select
                            id="type"
                            name="type"
                            value={newExpense.type}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Bir tür seçin</option>
                            <option value="1">Yiyecek & İçecek</option>
                            <option value="2">Alışveriş</option>
                            <option value="3">Ulaşım</option>
                            <option value="4">Hayat & Eğlence</option>
                            <option value="5">İletişim & Teknoloji</option>
                            <option value="6">Finansal Giderler</option>
                        </select>
                    </div> */}
                    <button type="submit">Ekle</button>
                </form>
            </div>
            <div className="itemcomponent" style={{ height: "340px" }}>
                <div className="cart"   >
                    <div className="cartHeader"  >
                        Gider Kategorileri
                    </div>
                    <div className="cartContent"   >
                        {expensesTypeArray && expensesTypeArray.map((item) => (
                            <div key={item.type} className="expensesCartContent" style={{ display: 'flex', alignItems: 'center', flexBasis: '45%', flexGrow: '1' }} >
                                <Image
                                    src={expensesIconSmall}
                                    alt="Next.js logo"
                                    width={32}
                                    height={32}
                                    priority
                                />
                                < p style={{ marginLeft: '8px', fontSize: '14px' }} > {item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ExpensesAdd;