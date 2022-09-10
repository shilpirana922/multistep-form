import React from "react";
import edne from "../assests/eden.png"
import "../styles/logo.css"
const Logo =()=>{
    return(
        <div className="logoContainer">
            <img 
            className="edenLogo"
            src={edne} alt ="eden logo"/>
            <span className="edenText">Eden</span>
        </div>
    )
}
export default Logo;