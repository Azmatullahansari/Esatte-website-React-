import React, { useState } from "react";
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandle from "react-outside-click-handler"

const Header = () => {
    const [menuOpened, setmenuOpened] = useState(false);

    const getMenuStyle = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }
    return (
        <section className="h-wrapper">
            <div className=" flexCenter paddings innerWidth h-container">

                <img src="./logo.png" alt="photo" width={100} />
                <OutsideClickHandle 
                onOutsideClick={()=> setmenuOpened(false)}>
                    <div className="flexCenter  h-menu"
                        style={getMenuStyle(menuOpened)}
                    >
                        <a href="">Resedencies</a>
                        <a href="">our value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className="btn">
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandle>
                <div 
                className="menu-icon" onClick={() => setmenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    )
}
export default Header 


