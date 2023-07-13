import { useState } from "react";
import "./Form.scss";

export const Form = ({ onSubmit }) => {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setValue("");
        onSubmit(value);
    };

    return (
        <form className="Form-submit" onSubmit={handleSubmit}>
            <input className="Text-input" type="text" value={value} onChange={handleChange} placeholder="your text here..." autoFocus></input>
            <input className="Form-button" type="submit" value={"Send"}></input>
        </form>
    );
};
