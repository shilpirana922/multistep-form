import React ,{useState} from 'react';
import { TextField,  Button, Typography } from '@material-ui/core';
import "../styles/userDetails.css";

const styleInputFields = {
    fontSize:12,
}

const UserChoice = ({handleActiveStep}) => {
    const [fullName ,setFullName] = useState("");
    const [displayName , setDisplayName] = useState("");
    const [isNameError, setIsNameError] = useState(false);
    const [isDisplayNameError, setIsDisplayNameError] = useState(false);


    const validateFields = (e) => {
        if(fullName && displayName){
            handleActiveStep(e);
        }

        if(!fullName){
            setIsNameError(true)
        }

        if(!displayName){
            setIsDisplayNameError(true)
        }

    }

    return (

        <form className="container">
            <h2>Welcome! First thing first...</h2>
            <h5 className='textHeading2'>You can always change them later</h5>
            <div >
                <Typography className="labelText" >Full name</Typography>
                <TextField
                   className='text'
                    label=""
                    variant="outlined"
                    size="small"
                    placeholder='Steve Jobs'
                    fullWidth={true}
                    onChange={e => setFullName(e.target.value)}
                    value={fullName}
                    InputProps={{style:styleInputFields}}
                    error={isNameError}
                    id={isNameError?"standard-error":""}
                />
                <Typography className="labelText" style={{marginTop:'12px'}}>Display name</Typography>
                <TextField
                className='text'
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    placeholder='Steve'
                    onChange={e => setDisplayName(e.target.value)}
                    value={displayName}
                    InputProps={{style:styleInputFields}} 
                    error={isDisplayNameError}
                    id={isDisplayNameError?"standard-error":""}
                />
                <Button id ="btn" onClick={validateFields}>Create Workspace</Button>
            </div>
            
        </form>
    )
}
export default UserChoice;