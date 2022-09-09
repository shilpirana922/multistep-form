import React from 'react';
import { Button } from '@material-ui/core';
import "../styles/userChoice.css";
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';

const WorkspaceDetails = () => {
    return (
        <form className="ChoiceContainer">
            <h2>How are yoy planning to use Eden ?</h2>
            <h5 className='textHeading2'>We will streamline your experience accordingly</h5>
            <div className='choiceSelect'>
                <div className="choice">
                    <PersonIcon className='icons'/>
                    <h4 className="profile">For myself</h4>
                    <p>Write better. Think more clearly. Stay organized</p>
                </div>
                <div className="choice">
                    <GroupIcon className='icons'/>
                    <h4 className='profile'>Wit my team</h4>
                    <p>Wikis, docs, tasks and projects ,all in one place.</p>
                </div>
               
            </div>
            <Button id ="btn">Create Workspace</Button>
        </form>
    )
}
export default WorkspaceDetails;