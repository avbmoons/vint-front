import "./Auth.scss";
import authpoint from "../../assets/icons/enter.png";

export const Auth = () => {
    return <div className="Auth-box">
        <a className="Auth-link" href="./">
            <img src={authpoint} alt="auth"></img>
        </a>
    </div>
}