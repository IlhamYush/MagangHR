import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-dashboard-react/components/customInputStyle.js';

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const {
    labelText,
    id,
    inputProps,
    error,
    success,
    formControlProps,
    rtlActive,
  } = props;

  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  const feedbackIcon = error ? (
    <Clear className={classes.feedback + ' ' + classes.labelRootError} />
  ) : success ? (
    <Check className={classes.feedback + ' ' + classes.labelRootSuccess} />
  ) : null;

  return (
    <div className={classes.formControl}>
      <TextField
        id={id}
        label={labelText}
        variant="outlined"
        error={error}
        value={value}
        onChange={handleChange}
        helperText={error ? 'Error occurred' : success ? 'Success!' : ''}
        InputProps={{
          ...inputProps,
          endAdornment: feedbackIcon,
          classes: {
            notchedOutline: classes.notchedOutline,
            input: classes.inputBase,
          },
        }}
        fullWidth={formControlProps ? formControlProps.fullWidth : false}
        className={`${classes.root} ${rtlActive ? classes.labelRTL : ''}`}
      />
    </div>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  rtlActive: PropTypes.bool,
};
