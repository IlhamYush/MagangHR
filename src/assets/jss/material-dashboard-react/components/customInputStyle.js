import {
  primaryColor,
  dangerColor,
  successColor,
  grayColor,
  defaultFont,
} from 'assets/jss/material-dashboard-react.js';

const customInputStyle = {
  disabled: {
    '&:before': {
      backgroundColor: 'transparent !important',
    },
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: grayColor[4] + ' !important',
    },
    '&:after': {
      borderColor: primaryColor[0],
    },
  },
  notchedOutline: {
    borderRadius: '8px',
    borderWidth: '2px',
    transition: 'all 0.3s ease-in-out',
  },
  root: {
    '& .MuiInputBase-input': {
      borderRadius: '8px', // Sesuaikan radius pada input
      backgroundColor: 'rgba(255, 255, 255)', // Sesuaikan warna background
    },
  },
  underlineError: {
    '&:after': {
      borderColor: dangerColor[0],
    },
  },
  underlineSuccess: {
    '&:after': {
      borderColor: successColor[0],
    },
  },
  labelRoot: {
    ...defaultFont,
    color: grayColor[3] + ' !important',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.42857',
    letterSpacing: 'unset',
    transition: 'transform 0.3s ease-out',
    opacity: 1,
  },
  labelRootError: {
    color: dangerColor[0],
  },
  labelRootSuccess: {
    color: successColor[0],
  },
  feedback: {
    position: 'absolute',
    top: '18px',
    right: '0',
    zIndex: '2',
    display: 'block',
    width: '20px',
    height: '20px',
    textAlign: 'center',
    pointerEvents: 'none',
  },
  formControl: {
    paddingBottom: '10px',
    margin: '10px 0 0 0',
    position: 'relative',
    verticalAlign: 'unset',
  },
  labelRTL: {
    right: 0,
    transition: 'all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(0, 1.5px)',
    },
  },
};

export default customInputStyle;
