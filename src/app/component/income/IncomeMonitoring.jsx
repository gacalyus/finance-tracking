"use client"

import React, { useEffect, useState } from "react"
import "../generalmonitoring/generalMonitoring.css"
import Image from "next/image";
import incomesmall from "../../../images/incomesmall.svg"
import incomedescript from "../../../images/incomedescript.svg"
import styles from "../expenses/expensesMonitoring.module.css";
import { incomeArray } from "./incomeType";
import { income } from "../charts/incomeValue";
import IncomeCategoryChart from "../charts/IncomeCategoryChart";
import MonthlyIncomeChart from "../charts/MonthlyIncomeChart";

const IncomeMonitoring = () => {
    const [incomeTypeArray, setIncomeTypeArray] = useState(incomeArray);
    const [addedIncomeState, setAddedIncomeState] = useState(income);
    useEffect(() => {
        if (localStorage.getItem('incomeLocalArray')) {
            setIncomeTypeArray(JSON.parse(localStorage.getItem('incomeLocalArray')))
        }
    }, [])
    useEffect(() => {
        if (localStorage.getItem('incomeAmount')) {
            setAddedIncomeState([...JSON.parse(localStorage.getItem('incomeAmount')), ...income])
        }
    }, [])
    return (
        <div className="container">
            <div className="itemcomponent">
                < MonthlyIncomeChart />
            </div>
            <div className="itemcomponent">
                <IncomeCategoryChart />
            </div>
            <div className="itemcomponent" style={{ height: "340px" }}>
                <div className={styles.cartexpenses}  >
                    <div className={styles.cartHeaderExpenses}  >
                        Eklenen Gelirler
                    </div>
                    <div className={styles.cartContentExpenses}  >
                        {addedIncomeState.map((item) => (
                            <div key={item.date + item.amount} style={{ display: 'flex', alignItems: 'center', flexBasis: '95%', flexGrow: '1', justifyContent: 'space-between' }} >
                                <div style={{ display: 'flex', alignItems: 'center', width: '70%' }} >
                                    <Image
                                        src={incomedescript}
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
                        Gelir  Kategorileri
                    </div>
                    <div className={styles.cartContentExpenses}  >
                        {incomeTypeArray.map((item) => (
                            <div key={item.type} style={{ display: 'flex', alignItems: 'center', flexBasis: '35%', flexGrow: '1' }} >
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


        </div>
    )
}

export default IncomeMonitoring;