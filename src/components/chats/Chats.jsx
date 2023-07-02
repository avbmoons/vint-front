import { useEffect, useState } from "react";
import "./Chats.scss";
//import { Message } from "../message";
import { MessageList } from "../messageList/MessageList";

import {INIT_MESSAGE} from "../../utils/constants";
import { BOT_MESSAGE } from "../../utils/constants";
import { FormSubmit } from "../formSubmit";
import { AUTHORS } from "../../utils/constants";

//const text = "some text here...";

export const Chats = () => {
    const[messageList, setMessageList]=useState(INIT_MESSAGE);

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
        <div className="Chats-groups"></div>
        <div className="Chats-messages">
            {/* <Message text={text} /> */}
            <MessageList messageList={messageList} setMessageList={setMessageList} />
            <FormSubmit messageList={messageList} setMessageList={setMessageList} />
        </div>
    </div>
}