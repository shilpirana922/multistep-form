import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import "../styles/userChoice.css";
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';

const UserChoice = ({ handleActiveStep }) => {

    //handling click event 
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
    }

    return (
        <form className="ChoiceContainer">
            <h2>How are yoy planning to use Eden ?</h2>
            <h5 className='textHeading2'>We will streamline your experience accordingly</h5>
            <div className='choiceSelect'>
                <div className="choice" onClick={handleClick} style={{
                    borderColor: !isActive ? '#664DE5' : 'black',
                }}>
                    <PersonIcon className='icons' style={{
                    color: !isActive ? '#664DE5' : 'black',
                }} /><br/>
                    <span className="profile">For myself</span>
                    <p className='peraText'>Write better. Think more clearly. Stay organized</p>
                </div>
                <div className="choice" onClick={handleClick} style={{
                    borderColor: isActive ? '#664DE5' : 'black',
                }}>
                    <GroupIcon className='icons' style={{
                    color: isActive ? '#664DE5' : 'black',
                }}/><br/>
                    <span className='profile'>With my team</span>
                    <p className='peraText'>Wikis, docs, tasks and projects ,all in one place.</p>
                </div>

            </div>
            <Button id="btn" onClick={handleActiveStep}>Create Workspace</Button>
        </form>
    )
}
export default UserChoice;