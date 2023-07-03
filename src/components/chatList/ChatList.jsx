import {v4 as uuidv4} from "uuid";
import { Chat } from "../chat/Chat";
import "./ChatList.scss";

export const ChatList = ({chatList}) => {
    return <div className="Chat-list-box">
        {chatList.map(({id, chatName, chatIcon})=>(
            <Chat key={uuidv4()} chatName={chatName} chatIcon={chatIcon} />
        ))}
    </div>

}
