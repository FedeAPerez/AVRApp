import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    margin: '2rem auto',
    display: 'flex',
    minWidth: '200px',
    width: '80%'
  },
};

function MiddleFormControl(props) {
  const { classes, children, className, ...other } = props;

  return (
    <FormControl classes={{
        root: classes.root
      }} {...other}>
      {children || 'class names'}
    </FormControl>
  );
}
export default withStyles(styles)(MiddleFormControl);