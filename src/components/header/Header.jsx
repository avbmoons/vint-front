import "./Header.scss";
import logo from "../../assets/images/init.png";
import { Menu } from "../menu/Menu";
import { Auth } from "../auth/Auth";
import { useState } from "react";
import { RouterList } from "../routerList";

export const Header = () => {
    return <div className="Header-box">
        <div className="Header-box-left">
            <div className="Logo-box">
                <a className="Logo-link" href="./">
                    <img src={logo} alt="logo"></img>
                </a>
            </div>
        </div>
        <div className="Header-box-right">
            <div className="Header-utils-box">
            {/* <Menu /> */}
            <Auth />        
            </div>
        </div>
    </div>
}