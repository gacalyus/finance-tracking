"use client"

import React, { useEffect, useState } from "react"
import "../generalmonitoring/generalMonitoring.css"
import "../expensesAdd/expensesAdd.css";
import incomesmall from "../../../images/incomesmall.svg"
import Image from "next/image";
import { incomeArray } from "../income/incomeType";
import CategoryAdd from "../categoryAdd/CategoryAdd";
import IncomeCountAdd from "./IncomeCountAdd";

const IncomeAdd = () => {

    const [incomeTypeArray, setIncomeTypeArray] = useState(incomeArray);

    const [newIncome, setNewIncome] = useState({
        name: '',
        type: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let newArr = incomeTypeArray
        newArr = [...newArr, { name: newIncome.name, type: incomeTypeArray[incomeTypeArray.length - 1].type + 1 }]
        setIncomeTypeArray(newArr);
        localStorage.setItem('incomeLocalArray', JSON.stringify(newArr))
        setNewIncome({ name: '', type: '' });
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
        if (localStorage.getItem('incomeLocalArray')) {
            setIncomeTypeArray(JSON.parse(localStorage.getItem('incomeLocalArray')))
        }
    }, [])

    return (
        <div className="container">
            <div className="itemcomponent">
                <IncomeCountAdd />
                < CategoryAdd
                    name="Gelir"
                    value={newIncome.name}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit} />
            </div>

            <div className="itemcomponent" style={{ height: "340px" }}>
                <div className="cart"   >
                    <div className="cartHeader"  >
                        Gelir Kategorileri
                    </div>
                    <div className="cartContent"   >
                        {incomeTypeArray && incomeTypeArray.map((item) => (
                            <div key={item.type} className="expensesCartContent"
                                style={{ display: 'flex', alignItems: 'center', flexBasis: '45%', flexGrow: '1' }}
                            >
                                <Image
                                    src={incomesmall}
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

            <div className="itemcomponent">

            </div>
        </div>
    )
}


export default IncomeAdd;