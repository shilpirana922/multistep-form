import React from 'react';
import { TextField, Box, Button, Typography } from '@material-ui/core';
import "../styles/userDetails.css";

const WorkspaceDetails = ()=>{
     return(
        <form className="container">
            <h2>Let's set up a home for your all work</h2>
            <h5 className='textHeading2'>You can always another workspace later</h5>
            <div className='textField-text'>
                <Typography className="labelText">Workspace name</Typography>
                <TextField
                   className='text'
                    variant="outlined"
                    size="small"
                    placeholder='eden'
                    fullWidth={true}
                />

                <Typography className="labelText">Workspace URL (optional)</Typography>
                <TextField
                className='text'
                    variant="outlined"
                    size="small"
                    placeholder='www.eden.com/|example'
                    fullWidth={true}
                />
                <Button id ="btn">Create Workspace</Button>
            </div>
            
        </form>
     )
}
export default WorkspaceDetails;