import { ROUTES } from "../../utils/constants";
import "./Menu.scss";

export const Menu = () => {
    return <div className="Menu-box">
        <div className="Menu">
            <a className="Menu-item" href={ROUTES.HOME}>Home</a>
            <a className="Menu-item" href={ROUTES.CHATS}>Chats</a>
            <a className="Menu-item" href={ROUTES.NEWS}>News</a>
            <a className="Menu-item" href={ROUTES.PROFILE}>Profile</a>
        </div>
    </div>
}