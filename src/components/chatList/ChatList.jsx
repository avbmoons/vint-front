import {v4 as uuidv4} from "uuid";
import { Chat } from "../chat/Chat";
import "./ChatList.scss";
import { Outlet } from "react-router-dom";
import { Form } from "../form/Form";

export const ChatList = ({chats, onAddChat}) => {

    const handleSubmitChat = (chatName, chatIcon) => {
        const newChat={id:uuidv4(), chatName, chatIcon,};
        onAddChat(newChat);
    }
    return <>
    <div className="Chats-list-box">    
        <div className="Chats-list-groups">
            <div className="Chats-list-block">  
                {chats.map(chat =>(
                    <Chat key={chat.id} id={chat.id} chatName={chat.chatName} chatIcon={chat.chatIcon} /> 
                ))}
            </div>
            <div className="Chats-list-form">
                <Form onSubmit={handleSubmitChat}/>
            </div>            
        </div>
        <div className="Chats-list-messages">
          <Outlet />  
        </div>    
    </div>
    </>
}

