import { useEffect, useState } from "react";
import "./Chats.scss";
import {v4 as uuidv4} from "uuid";
//import { Message } from "../message";
import { MessageList } from "../messageList/MessageList";
import { ChatList } from "../chatList/ChatList";

import {AUTHORS, INIT_CHAT, INIT_MESSAGE} from "../../utils/constants";
import { BOT_MESSAGE } from "../../utils/constants";
//import { FormSubmit } from "../formSubmit";
import { Form } from "../form/Form";

//import "../../assets/icons/icon-user.svg";

//const text = "some text here...";

export const Chats = () => {
    const[messageList, setMessageList]=useState(INIT_MESSAGE);
    const[chatList, setChatList]=useState(INIT_CHAT);

    function handleAddMessage(text) {
        const newMessage={
            id:uuidv4(),
            author:AUTHORS.authorName="HUMAN",
            text:text,
            isOut:"true",
        };
        setMessageList((prevMessageList)=>[...prevMessageList, newMessage]);
    };

    useEffect(()=>{
        let timer;
        if (messageList[messageList.length-1].author!=="BOT") {
            timer=setTimeout(()=>{
                setMessageList([...messageList, BOT_MESSAGE]);
            }, 1500);
        }
        return ()=>{
            clearTimeout(timer);
            console.log('timer fresh');
        }
    },[messageList]);
    return <div className="Chats-box">
        <div className="Chats-groups">
            <ChatList chatList={chatList} setChatList={setChatList} />
        </div>
        <div className="Chats-messages">
            {/* <Message text={text} /> */}
            <MessageList messageList={messageList} setMessageList={setMessageList} />
            {/* <FormSubmit messageList={messageList} setMessageList={setMessageList} /> */}
            <Form onSubmit={handleAddMessage} />
        </div>
    </div>
}