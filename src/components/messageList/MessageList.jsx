import {v4 as uuidv4} from "uuid";
import { Message } from "../message/Message";
import "./MessageList.scss";

export function MessageList ({messageList}) {
    return <div className="Message-list-box">
        {messageList.map(({id, author, text, isOut})=>(
            <Message key={id=uuidv4()} author={author} text={text} isOut={isOut} />
        ))}
    </div>
}
