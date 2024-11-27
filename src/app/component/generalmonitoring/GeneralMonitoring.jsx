"use client"

import React, { useEffect, useState } from "react"
import "./generalMonitoring.css"
import ColumnChart from "../charts/ColumnChart"


const GeneralMonitoring = () => {
    const [er, set] = useState(false)

    useEffect(() => {
        console.log("dsa")
    }, [])

    return (
        <div className="container">
            <div className="itemcomponent" style={{ height: "370px" }}>
                <ColumnChart />
            </div>
            <div className="itemcomponent" style={{ height: "370px" }}>
                <ColumnChart />
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

export default GeneralMonitoring;