import "./Footer.scss";
import { Menu } from "../menu/Menu";

export const Footer = () => {
    return <div className="Footer-box">
        <div className="Footer-box-left">
            <div className="Rights-box">
                <p className="Rights-text">
                    &#169; ### AllRights Reserved
                </p>
            </div>
        </div>
        <div className="Footer-box-right">
            <div className="Footer-utils-box">
            <Menu />
            <div className="Empty-box"></div>     
            </div>
        </div>
    </div>
}