"use client"

import React from "react"
import "../generalmonitoring/generalMonitoring.css"
import "../expensesAdd/expensesAdd.css";

const CategoryAdd = ({ value, onChange, onSubmit, name }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name"> {name} Kategorileri Adı</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={value}
                    onChange={onChange}
                    required
                />
            </div>
            <button type="submit"> {name} Kategorisi Ekle</button>
        </form>
    )
}

export default CategoryAdd;