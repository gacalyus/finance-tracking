"use client"

import React from "react"
import "./Header.css";
import profil from "../../../images/profilee.svg"
import Image from "next/image";
import { useSelector } from 'react-redux'



const Header = () => {
    const pageTitle = useSelector((state) => state.general.title)


    return (
        <div className="header">

            <div className="header-component"  >

                <h3 className="app-title" >
                    {pageTitle}
                </h3>
                <div  >
                    <Image
                        color="blue"
                        src={profil}
                        alt="profile logo"
                        width={35}
                        height={35}
                        priority
                    />
                </div>


            </div>
        </div>
    )
}

export default Header;