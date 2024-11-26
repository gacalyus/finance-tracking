import "./Header.css";
import profil from "../../images/profilee.svg"
import Image from "next/image";




export default function Header() {
    return (
        <div className="header">

            <div className="header-component"  >
                <div>
                    Sayfa Başlık
                </div>
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
    );
}
