import "./Chat.scss";
import { Link } from "react-router-dom";

export const Chat = ({id, chatName, chatIcon}) => {
    return <div className="Chat-box" key={id}>
        <Link className="Chat-link" to={`/chats/${id}`} >{chatName}</Link>
        <img className="Chat-icon" src={chatIcon} alt="icon"></img>
    </div>
}


