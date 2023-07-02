import "./Message.scss";
import $colorMessageIn from "../../styles/vars.scss";
//import $colorMessageOut from "../../styles/vars.scss";

export const Message = ({id, author, text, isOut}) => {
    const styleOut = {
        backgroundColor: "yellowgreen",
        marginLeft: 280
    }
    const styleIn = {
        backgroundColor: $colorMessageIn
    }
    return <div className="Message-box" key={id} style={isOut==="true"?styleOut:styleIn}>  
            <span className="Message-author">{author}</span>
            <p className="Message-text">{text}</p>
            <span className="Message-is-out">{isOut}</span>  
    </div>
}