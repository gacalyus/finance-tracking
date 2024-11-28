
"use client"


import homeLogo from "../../images/MenuIcon/sond.png"
import company from "../../images/MenuIcon/company.svg"
import customer from "../../images/MenuIcon/customer.svg"
import product from "../../images/MenuIcon/product.svg"
import forcasting from "../../images/MenuIcon/forcasting.svg"
import sales from "../../images/MenuIcon/sales.svg"
import role from "../../images/MenuIcon/role.svg"
import plantList from "../../images/MenuIcon/plantList.svg"
import Image from "next/image";
import "./AppSidebar.css";
import Link from "next/link"
import { useDispatch } from "react-redux"
import { changeTitle } from "@/features/general/generalSlice"



export default function AppSidebar() {
    const dispatch = useDispatch()


    const menüItems = [
        { id: 1, name: "Güncel Durum", disabled: false, path: "/dashboard", svg: plantList },

        { id: 2, name: "Gelirler", disabled: false, path: "/income", svg: sales },

        { id: 10, name: "Gelir Ekle ", disabled: false, path: "/incomeAdd", svg: forcasting },

        { id: 3, name: "Giderler", disabled: false, path: "/expenses", svg: sales },

        { id: 9, name: "Gider Ekle ", disabled: false, path: "/expensesAdd", svg: forcasting },

        { id: 4, name: "Şirket", disabled: true, path: "/dashboard", svg: company },

        { id: 5, name: "Müşteri", disabled: true, path: "/dashboard", svg: customer },

        { id: 6, name: "Ürünler", disabled: true, path: "/dashboard", svg: product },

        { id: 7, name: "Tahminler", disabled: true, path: "/dashboard", svg: forcasting },

        { id: 8, name: "Profil", disabled: true, path: "/dashboard", svg: role },
    ]
    // #ff5757
    // #2a1a42
    return (

        <div style={{ borderRight: "1px solid rgba(145, 158, 171, 0.16)", background: '#2a1a42' }} className={`sidebar open`}
        >

            <nav>
                <div className="headerLogo" >
                    <Image
                        src={homeLogo}
                        alt="Next.js logo"
                        width={180}
                        height={78}
                        priority
                    />
                </div>

                <div style={{ overflow: "auto", height: "640px" }} className='menuListItemText'  >
                    <div style={{ overflow: "auto", height: "640px" }}   >
                        <ul>
                            {menüItems.map((item) => (
                                <li style={{ listStyleType: 'none', marginBottom: '1rem' }} key={item.id} >
                                    <Link href={item.path} style={{ textDecoration: 'none' }} >
                                        <button
                                            disabled={item.disabled}
                                            style={{
                                                display: "flex", flexDirection: "row", alignItems: "center", justufiyContent: 'center', border: 'none', background: 'none',
                                                color: !item.disabled ? "#ff5757" : "#91A1A9"
                                            }}
                                            onClick={() => dispatch(changeTitle(item.name))}
                                        >
                                            <Image
                                                src={item.svg}
                                                alt="Next.js logo"
                                                width={35}
                                                height={35}
                                                priority
                                            />
                                            <span className='menuListItemText'>{item.name}  </span>
                                        </button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

        </div >

    );
};
