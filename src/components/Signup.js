import React from 'react'
import Userdetails from './UserDetails'
import WorkspaceDetails from './WorkspaceDetails'
import UserChoice from './UserChoice'
import Success from './Success';
import StepperHorizontal from './Stepper';
// import Logo from './Logo';
const Signup =()=>{
    return (
      <div>
        <StepperHorizontal/>
        {/* <Logo/> */}
        <Userdetails/>
        <WorkspaceDetails/>
         <UserChoice/>
        <Success/> 
      </div>
    )
}
export default Signup;
