"use client"

import React from "react"
import "./generalMonitoring.css"
import LastThreeMonthsChart from "../charts/LastThreeMonthsChart"
import MonthlyCategoryPieChart from "../charts/MonthlyCategoryPieChart"


const GeneralMonitoring = () => {
    return (
        <div className="container">
            <div className="itemcomponent" style={{ height: "370px" }}>
                <LastThreeMonthsChart />
            </div>
            <div className="itemcomponent" style={{ height: "370px" }}>
                <MonthlyCategoryPieChart />
            </div>
        </div>
    )
}

export default GeneralMonitoring;