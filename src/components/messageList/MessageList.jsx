import { Message } from "../message/Message";
import "./MessageList.scss";

export function MessageList ({messages}) {
    return <div className="Message-list-box">
        {messages.map(({id, author, text, isOut,})=>(
            <Message key={id} author={author} text={text} isOut={isOut} />
        ))}
    </div>
};
