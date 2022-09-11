import React,{useState} from 'react';
import {Box,Stepper,Step,StepLabel, StepConnector, withStyles} from '@material-ui/core';
import Userdetails from './UserDetails'
import WorkspaceDetails from './WorkspaceDetails'
import UserChoice from './UserChoice'
import Success from './Success';
import "../styles/stepper.css"

const steps = [
  '',
  '',
  '',
  ''
];

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
    '& $line': {
      borderColor: '#784af4',
      
    }
  },
  active: {
    '& $line': {
      borderColor: '#784af4',

    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const handleSteps = (step, handleActiveStep) => {
   switch(step){

    case 0: return <Userdetails handleActiveStep={handleActiveStep}/>
    case 1: return <WorkspaceDetails handleActiveStep={handleActiveStep}/>
    case 2: return <UserChoice handleActiveStep={handleActiveStep}/>
    case 3: return <Success />
    default:
      throw new Error('Unknown steps');
   }
}

const StepperHorizontal =()=> {

  const [activeStep, setActiveStep] = useState(0);
 
  const handleActiveStep = (e) => {
    e.preventDefault()
    setActiveStep((currStep) => (currStep+1));
  }

  const prevActiveStep = (index) =>{
   setActiveStep(index);
  }

  return (
    <Box className='stepperContainer' >
      <Stepper activeStep={activeStep} alternativeLabel className='stepper'  connector={<QontoConnector />}>
        {steps.map(( label,index) => (
          <Step key={index}>
            <StepLabel onClick={()=>prevActiveStep(index)} style={{color:"#664DE5"}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {handleSteps(activeStep, handleActiveStep)}
      
    </Box>
  );
}
export default StepperHorizontal;
