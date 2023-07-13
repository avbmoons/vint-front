import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./Router.scss";
import Profile from "../screens/Profile/Profile";
import Home from "../screens/Home/Home";
import Chats from "../screens/Chats/Chats";
import News from "../screens/News/News";
import NotFound from "../screens/NotFound/NotFound";
import { ROUTES, initialChats } from "../utils/constants";
import { ChatList } from "../components/chatList/ChatList";
import { RouterList } from "../components/routerList";

const initialMessages = initialChats.reduce((acc, chat)=>{
    acc[chat.id]=[];
    return acc;
}, {});

export const Router = () => {

    const [chats, setChats] = useState(initialChats);
    const [messages, setMessages] = useState(initialMessages);

    function handleAddMessage(newMessage, chatId) {
        setMessages((prevMessages)=>({
            ...prevMessages, 
            [chatId]: [...prevMessages[chatId], 
            newMessage],
        }));
    };

    function handleAddChat(newChat, chatId) {
        setChats((prevChats)=>([...prevChats, newChat]));
    };

    return <BrowserRouter>
    <RouterList />

        <Routes>
            <Route path={ROUTES.HOME} element={<Home />}></Route>
            <Route path={ROUTES.CHATS} element={<ChatList chats={chats} onAddChat={handleAddChat} />}>
                <Route path={ROUTES.CHAT} element={<Chats messages={messages} onAddMessage={handleAddMessage} />}></Route>
            </Route>
            <Route path={ROUTES.NEWS} element={<News />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path="*" element={<NotFound />}></Route>
            
        </Routes>
    </BrowserRouter>
}