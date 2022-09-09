import React from "react";
import { Button } from '@material-ui/core';
import "../styles/userDetails.css";
const Success = ()=>{
    return(
         <div className="container">
            <h1>Congratulations, Eren! </h1>
            <h5 className="textHeading2">You have completed onboarding, you can start using the eden!</h5>
            <Button id ="btn">Launch Eden</Button>
         </div>
    )
}
export default Success;