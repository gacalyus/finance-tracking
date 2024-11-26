
import homeLogo from "../../images/MenuIcon/homeLogo.svg"
import company from "../../images/MenuIcon/company.svg"
import customer from "../../images/MenuIcon/customer.svg"
import product from "../../images/MenuIcon/product.svg"
import forcasting from "../../images/MenuIcon/forcasting.svg"
import sales from "../../images/MenuIcon/sales.svg"
import role from "../../images/MenuIcon/role.svg"
import plantListBlue from "../../images/MenuIcon/plantListBlue.svg"
import Image from "next/image";
import "./AppSidebar.css";



export default function AppSidebar() {


    const menüItems = [
        { id: 1, name: "Güncel Durum", disabled: false, path: "/dashboard", svg: plantListBlue },

        { id: 2, name: "Gelirler", disabled: false, path: "/dashboard", svg: sales },

        { id: 3, name: "Giderler", disabled: false, path: "/dashboard", svg: sales },

        { id: 4, name: "Şirket", disabled: true, path: "/dashboard", svg: company },

        { id: 5, name: "Müşteri", disabled: true, path: "/dashboard", svg: customer },

        { id: 6, name: "Ürünler", disabled: true, path: "/dashboard", svg: product },

        { id: 7, name: "Tahminler", disabled: true, path: "/dashboard", svg: forcasting },

        { id: 8, name: "Profil", disabled: true, path: "/dashboard", svg: role },
    ]
    return (
        <>
            <div style={{ borderRight: "1px solid rgba(145, 158, 171, 0.16)" }} className={`sidebar open`}
            >

                <nav>
                    <div className="headerLogo" >
                        <Image
                            src={homeLogo}
                            alt="Next.js logo"
                            width={180}
                            height={38}
                            priority
                        />
                    </div>

                    <div style={{ overflow: "auto", height: "640px" }} className='menuListItemText'  >
                        <div style={{ overflow: "auto", height: "640px" }}   >
                            <ul>
                                {menüItems.map((item) => (
                                    <li style={{ listStyleType: 'none', marginBottom: '1rem' }} key={item.id} >
                                        <button
                                            disabled={item.disabled}
                                            style={{
                                                display: "flex", flexDirection: "row", alignItems: "center", justufiyContent: 'center', border: 'none', background: 'none',
                                                color: !item.disabled ? "#3B74C8" : "#91A1A9"
                                            }}
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
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>

            </div >
            <div style={{ borderRight: "1px solid rgba(145, 158, 171, 0.16)" }} className="sidebar-border" >
                <div style={{ borderBottom: "1px solid rgba(145, 158, 171, 0.16)", height: "64px" }} > </div>
            </div>
        </>
    );
};
