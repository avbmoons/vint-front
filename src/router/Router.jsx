import React from "react";
import { BrowserRouter, Link, Routes, Route, NavLink } from 'react-router-dom';
import "./Router.scss";
import App from "../App";
//import Profile from "../components/profile/Profile";
import Profile from "../screens/Profile/Profile";
import Home from "../screens/Home/Home";
import Chats from "../screens/Chats/Chats";
import News from "../screens/News/News";
import NotFound from "../screens/NotFound/NotFound";
//import NoChats from "../screens/NoChats/NoChats";
import { ROUTES } from "../utils/constants";

export const Router = () => {
    return <BrowserRouter>
    <div className="Router-box">
        <div className="Router-nav">            
        <NavLink className="Router-item" style={(isActive) => ({ color: isActive ? 'orange' : 'red' })} to={ROUTES.HOME}>Home</NavLink>
        <NavLink className="Router-item" to={ROUTES.CHATS}>Chats</NavLink>
        <NavLink className="Router-item" to={ROUTES.NEWS}>News</NavLink>
        <NavLink className="Router-item" to={ROUTES.PROFILE}>Profile</NavLink>
        {/* <NavLink className="Menu-item" style={(isActive) => ({ color: isActive ? 'orange' : 'red' })} to={ROUTES.PROFILE}>Profile</NavLink> */}
        </div>
    </div>    

        <Routes>
            <Route path={ROUTES.HOME} element={<Home />}></Route>
            <Route path={ROUTES.CHATS} element={<Chats />}></Route>
            <Route path={ROUTES.NEWS} element={<News />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path="*" element={<NotFound />}></Route>
            
        </Routes>
    </BrowserRouter>
}