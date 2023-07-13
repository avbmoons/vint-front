import { NavLink } from "react-router-dom";
import "./RouterList.scss";
import { ROUTES } from "../../utils/constants";

export const RouterList = () => {
    return <div className="Router-box">
    <div className="Router-nav">            
    <NavLink className={(navData) => navData.isActive ? "Router-item-active" : "Router-item"} to={ROUTES.HOME}>Home</NavLink>
    <NavLink className={(navData) => navData.isActive ? "Router-item-active" : "Router-item"} to={ROUTES.CHATS}>Chats</NavLink>
    <NavLink className={(navData) => navData.isActive ? "Router-item-active" : "Router-item"} to={ROUTES.NEWS}>News</NavLink>
    <NavLink className={(navData) => navData.isActive ? "Router-item-active" : "Router-item"} to={ROUTES.PROFILE}>Profile</NavLink>
    </div>
</div>
}