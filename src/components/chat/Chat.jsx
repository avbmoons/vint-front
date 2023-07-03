import {v4 as uuidv4} from "uuid";
import "./Chat.scss";
//import chatIcon from "../../assets/icons/chatIcon.png";

export const Chat = ({id, chatName, chatIcon}) => {
    return <div className="Chat-box" key={id=uuidv4()} >
        <a className="Chat-link" href="./#" >{chatName}</a>
        <img className="Chat-icon" src={chatIcon} alt="icon"></img>
    </div>
}