import React, { useState, useEffect } from 'react';
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
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [labelVisible, setLabelVisible] = useState(true);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => setValue(e.target.value);

  const feedbackIcon = error ? (
    <Clear className={classes.feedback + ' ' + classes.labelRootError} />
  ) : success ? (
    <Check className={classes.feedback + ' ' + classes.labelRootSuccess} />
  ) : null;

  useEffect(() => {
    if (isFocused || value) {
      setLabelVisible(false); // Hide label saat fokus atau ada nilai
    } else {
      setLabelVisible(true); // Show label saat blur dan kosong
    }
  }, [isFocused, value]);

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
          },
        }}
        // InputLabelProps={{
        //   classes: {
        //     root: labelVisible ? classes.labelRoot : classes.labelHidden, // Mengontrol class label agar dapat berubah
        //   },
        //   shrink: false, // Tidak mengapungkan label secara otomatis
        // }}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        fullWidth={formControlProps ? formControlProps.fullWidth : false}
        className={rtlActive ? classes.labelRTL : ''}
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
