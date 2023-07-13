import { useEffect } from "react";
import "./Chats.scss";
import {v4 as uuidv4} from "uuid";
import { MessageList } from "../../components/messageList/MessageList";
import { AUTHORS } from "../../utils/constants";
import { Form } from "../../components/form/Form";
import { useParams } from "react-router-dom";

export const Chats = ({messages, onAddMessage}) => {
    const { chatId } = useParams();
    console.log({chatId});
    
    const handleSubmitMessage=(text)=>{
        const newMessage={id:uuidv4(), author:AUTHORS.authorName='HUMAN', text, isOut:"true",};
        onAddMessage(newMessage, chatId);
    }

    useEffect(()=>{
        let timer;
        if (messages[chatId]?.[messages[chatId].length-1]?.author!=='BOT') {
            timer=setTimeout(()=>{
                onAddMessage({
                    id:uuidv4(),
                    author:'BOT',
                    text:"Thanks! So, lets keep...",
                    isOut:"false",
                }, chatId);
            }, 1500);
        }
        return ()=>{
            clearTimeout(timer);
            console.log('timer fresh');
        }
    },[messages]);

    return <main>
    <div className="Chats-box">
        <div className="Chats-messages">
            <div className="Chats-message-list">
               <MessageList messages={messages[chatId]} /> 
            </div>
            <div className="Chats-message-form">
               <Form onSubmit={handleSubmitMessage} /> 
            </div>            
        </div>
    </div>
    </main>
};

export default Chats;
