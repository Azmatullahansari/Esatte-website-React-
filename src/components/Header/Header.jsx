import React, { useState } from "react";
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyle = () => {
        return document.documentElement.clientWidth <= 800
            ? { right: menuOpened ? "0" : "-100%" }
            : {};
    };

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className="flexCenter h-menu" style={getMenuStyle()}>
                        <a href="#Residencies">Residencies</a>
                        <a href="#value">Our Value</a>
                        <a href="#contact-us">Contact Us</a>
                        <a href="#get-started">Get Started</a>
                        <button className="btn">
                            <a href="#contact-us">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={() => setMenuOpened(prev => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    );
};

export default Header;
