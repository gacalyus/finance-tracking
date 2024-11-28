"use client"

import React, { useEffect, useState } from "react"
import "../generalmonitoring/generalMonitoring.css"
import Image from "next/image";
import expensesIconSmall from "../../../images/expensesIconSmall.svg"
import addexpenses from "../../../images/addexpenses34.svg"
import styles from "./expensesMonitoring.module.css";
import { expensesArray } from "./expensesType";
import MonthlyExpenseChart from "../charts/MonthlyExpenseChart";
import ExpenseCategoryChart from "../charts/ExpenseCategoryChart";
import { expenses } from "../charts/expensesValue";

const ExpensesMonitoring = () => {
    const [expensesTypeArray, setExpensesTypeArray] = useState(expensesArray);
    const [addedExpensesState, setAddedExpensesState] = useState(expenses);
    useEffect(() => {
        if (localStorage.getItem('expensesLocalArray')) {
            setExpensesTypeArray(JSON.parse(localStorage.getItem('expensesLocalArray')))
        }
    }, [])
    useEffect(() => {
        if (localStorage.getItem('expensesAmount')) {
            setAddedExpensesState([...JSON.parse(localStorage.getItem('expensesAmount')), ...expenses])
        }
    }, [])
    return (
        <div className="container">
            <div className="itemcomponent">
                < MonthlyExpenseChart />
            </div>
            <div className="itemcomponent">
                <ExpenseCategoryChart />
            </div>
            <div className="itemcomponent" style={{ height: "340px" }}>
                <div className={styles.cartexpenses}  >
                    <div className={styles.cartHeaderExpenses}  >
                        Eklenen Giderler
                    </div>
                    <div className={styles.cartContentExpenses}  >
                        {addedExpensesState.map((item) => (
                            <div key={item.date + item.amount} style={{ display: 'flex', alignItems: 'center', flexBasis: '95%', flexGrow: '1', justifyContent: 'space-between' }} >
                                <div style={{ display: 'flex', alignItems: 'center', width: '70%' }} >
                                    <Image
                                        src={addexpenses}
                                        alt="Next.js logo"
                                        width={32}
                                        height={32}
                                        priority
                                    />
                                    < p style={{ marginLeft: '8px', fontSize: '14px' }} >{item.description}</p>
                                </div>
                                < p > {item.date}</p>
                                < p > {item.amount} ₺</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="itemcomponent" style={{ height: "340px" }}>
                <div className={styles.cartexpenses}  >
                    <div className={styles.cartHeaderExpenses}  >
                        Gider Kategorileri
                    </div>
                    <div className={styles.cartContentExpenses}  >
                        {expensesTypeArray.map((item) => (
                            <div key={item.type} style={{ display: 'flex', alignItems: 'center', flexBasis: '35%', flexGrow: '1' }} >
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

export default ExpensesMonitoring;