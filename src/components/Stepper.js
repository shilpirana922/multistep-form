import * as React from 'react';
import {Box,Stepper,Step,StepLabel} from '@material-ui/core';

const steps = [
  '',
  '',
  '',
  ''
];

const StepperHorizontal =()=> {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
export default StepperHorizontal;
