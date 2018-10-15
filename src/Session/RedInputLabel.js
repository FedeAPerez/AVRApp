import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

// We can inject some CSS into the DOM.
const styles = {
    formControl: {
      color: '#2c3e50',
      '&:focus' : {
          color: '#e74c3c'
      }
  },
};

function RedInputLabel(props) {
  const { classes, children, className, ...other } = props;

  return (
    <InputLabel classes={{
        formControl: classes.formControl
      }} {...other}
      htmlFor="filled-patient-simple"
    >
      {children || 'class names'}
    </InputLabel>
  );
}
export default withStyles(styles)(RedInputLabel);