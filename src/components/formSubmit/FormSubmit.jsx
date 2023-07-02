import "./FormSubmit.scss";
import { AUTHORS } from "../../utils/constants";
import { useState } from "react";

export const FormSubmit = ({messageList, setMessageList}) => {
    const [messageAuthor, setMessageAuthor]=useState('');
    const [messageText, setMessageText]=useState('');
    ////
    const [value, setValue] = useState("");
    ////

    const showAuthor=()=>setMessageAuthor(AUTHORS.authorName);

    const handleTextChange=(e)=>setMessageText(e.target.value);

    const handleAddText=(e)=>{
        const newMessage={
            id:'',
            author: AUTHORS.authorName='HUMAN',
            text: messageText,
            isOut: "true",
        };
        setMessageAuthor('');
        setMessageText('');
        return setMessageList([...messageList, newMessage]);
    }
    ////
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue("");
        handleAddText({ author: AUTHORS.authorName='HUMAN', text: value, isOut: 'true'});
        //onSubmit(value);
    };
    ////

    return <form className="Form-submit" onSubmit={handleSubmit}>
        <span className="Text-author" value={messageAuthor} onChange={showAuthor}></span>
        <input className="Text-input" value={messageText} onChange={handleTextChange} placeholder="your text here..."></input>
        <button className="Form-button" type="submit">Send&nbsp;&#9658;</button>
    </form>
    // return <div className="Form-submit">
    //     <span className="Text-author" value={messageAuthor} onChange={showAuthor}></span>
    //     <input className="Text-input" value={messageText} onChange={handleTextChange} placeholder="your text here..."></input>
    //     <button className="Form-button" type="submit" onClick={handleAddText}>Send&nbsp;&#9658;</button>
    // </div>
};
