import React from 'react';
import { TextField,  Button, Typography } from '@material-ui/core';
import "../styles/userDetails.css";


const UserChoice = () => {
    return (

        <form className="container">
            <h2>Welcome! First thing first...</h2>
            <h5 className='textHeading2'>You can always change them later</h5>
            <div className='textField-text'>
                <Typography className="labelText">Fullname</Typography>
                <TextField
                   className='text'
                    label=""
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                />
                
                <Typography className="labelText">Display name</Typography>
                <TextField
                className='text'
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                />
                <Button id ="btn">Create Workspace</Button>
            </div>
            
        </form>
    )
}
export default UserChoice;