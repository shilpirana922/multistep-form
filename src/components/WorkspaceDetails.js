import React ,{useState} from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import "../styles/workspaceDetails.css";

const styleInputFields = {
    fontSize:12,
}

const WorkspaceDetails = ({handleActiveStep})=>{
    const [workspaceName ,setWorkspaceName] = useState("");
    const [workspaceUrl , setWorkspaceUrl] = useState("");
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
                    onChange={e => setWorkspaceName(e.target.value)}
                    value={workspaceName}
                    InputProps={{style:styleInputFields}}
                />

                <Typography className="labelText" style={{marginTop:'12px'}}>Workspace URL <span className="optional">(optional)</span></Typography>
                <TextField
                className='text'
                    variant="outlined"
                    size="small"
                    placeholder='www.eden.com/   Example'
                    fullWidth={true}
                    onChange={e => setWorkspaceUrl(e.target.value)}
                    value={workspaceUrl}
                    InputProps={{style:styleInputFields}}
                />
                <Button id ="btn" onClick={handleActiveStep}>Create Workspace</Button>
            </div>
            
        </form>
     )
}
export default WorkspaceDetails;