"use client"

import React, { useEffect, useState } from "react"
import "../generalmonitoring/generalMonitoring.css"
import Image from "next/image";
import expensesIconSmall from "../../../images/expensesIconSmall.svg"
import styles from "./expensesMonitoring.module.css";
import { expensesArray } from "./expensesType";

const ExpensesMonitoring = () => {
    const [expensesTypeArray, setExpensesTypeArray] = useState(expensesArray);

    useEffect(() => {
        if (localStorage.getItem('expensesLocalArray')) {
            setExpensesTypeArray(JSON.parse(localStorage.getItem('expensesLocalArray')))
        }
    }, [])

    return (
        <div className="container">
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
            <div className="itemcomponent" style={{ height: "340px" }}>
                <div className={styles.cartexpenses}  >
                    <div className={styles.cartHeaderExpenses}  >
                        Gider Kategorileri
                    </div>
                    <div className={styles.cartContentExpenses}  >
                        {expensesArray.map((item) => (
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
            <div className="itemcomponent">
                3
            </div>
            <div className="itemcomponent">
                4
            </div>
        </div>
    )
}

export default ExpensesMonitoring;