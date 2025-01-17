import {
  drawerWidth,
  transition,
  boxShadow,
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
  blackColor,
  hexToRgb,
} from 'assets/jss/material-dashboard-react.js';

const sidebarStyle = (theme) => ({
  // Edit Sidebar
  drawerPaper: {
    backgroundColor: whiteColor,
    border: 'none',
    position: 'fixed',
    top: '20px',
    bottom: '0',
    left: '15px',
    zIndex: '1',
    ...boxShadow,
    width: drawerWidth,
    borderRadius: '15px',
    // Edit Sidebar untuk versi Dekstop
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'fixed',
      height: '96%',
      borderRadius: '15px',
    },
    // Edit Sidebar untuk versi Mobile
    [theme.breakpoints.down('sm')]: {
      width: drawerWidth,
      ...boxShadow,
      position: 'fixed',
      display: 'block',
      top: '20px',
      height: '96vh',
      right: '15px',
      left: 'auto',
      zIndex: '1032',
      visibility: 'visible',
      overflowY: 'visible',
      borderTop: 'none',
      textAlign: 'left',
      paddingRight: '0px',
      paddingLeft: '0',
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      ...transition,
      borderRadius: '15px',
    },
  },
  drawerPaperRTL: {
    [theme.breakpoints.up('md')]: {
      left: 'auto !important',
      right: '0 !important',
    },
    [theme.breakpoints.down('sm')]: {
      left: '0  !important',
      right: 'auto !important',
    },
  },
  logo: {
    position: 'relative',
    display: 'flex', // Menggunakan flexbox
    justifyContent: 'center', // Memusatkan secara horizontal
    alignItems: 'center', // Memusatkan secara vertikal
    padding: '15px 15px',
    zIndex: '4',
    textAlign: 'center',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      height: '1px',
      right: '15px',
      width: 'calc(100% - 30px)',
      backgroundColor: 'rgba(' + hexToRgb(grayColor[6]) + ', 0.3)',
    },
  },
  // Edit Logo
  logoLink: {
    ...defaultFont,
    textTransform: 'uppercase',
    padding: '15px 0',
    display: 'flex',
    fontSize: '22px',
    fontWeight: '400',
    lineHeight: '30px',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    '&,&:hover': {
      color: '#6B7280',
    },
  },
  logoLinkRTL: {
    textAlign: 'right',
  },
  logoImage: {
    display: 'flex',
    justifyContent: 'center', // Memastikan logo berada di tengah
    alignItems: 'center',
    width: 'auto',
    maxHeight: '100px', // Sesuaikan tinggi maksimal jika diperlukan
    height: 'auto',
    margin: '0 auto', // Untuk memastikan tidak ada margin aneh
  },
  img: {
    width: '80%', // Ukuran logo lebih besar
    height: 'auto',
    position: 'relative', // Tidak absolute, agar mengikuti alur flexbox
    verticalAlign: 'middle',
    border: '0',
  },
  background: {
    backgroundColor: whiteColor,
    position: 'absolute',
    zIndex: '1',
    height: '100%',
    width: '100%',
    display: 'block',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '15px',
    '&:after': {
      position: 'absolute',
      zIndex: '3',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      background: blackColor,
      opacity: '.8',
      borderRadius: '15px',
    },
  },
  list: {
    marginTop: '20px',
    paddingLeft: '0',
    paddingTop: '0',
    paddingBottom: '0',
    marginBottom: '0',
    listStyle: 'none',
    position: 'unset',
  },
  item: {
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    '&:hover,&:focus,&:visited,&': {
      color: whiteColor,
    },
  },
  itemLink: {
    width: 'auto',
    transition: 'all 300ms linear',
    margin: '10px 15px 0',
    borderRadius: '3px',
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    backgroundColor: 'transparent',
    ...defaultFont,
    '&:hover': {
      backgroundColor: '#F3F4F6',
    },
  },
  itemIcon: {
    width: '28px',
    height: '30px',
    fontSize: '28px',
    lineHeight: '30px',
    float: 'left',
    marginRight: '15px',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#6B7280',
  },
  itemIconRTL: {
    marginRight: '3px',
    marginLeft: '15px',
    float: 'right',
  },
  itemText: {
    ...defaultFont,
    margin: '0',
    lineHeight: '30px',
    fontSize: '16px', // Ukuran teks sesuai desain
    color: '#6B7280', // Warna teks abu-abu
    // color: whiteColor,
  },
  itemTextRTL: {
    textAlign: 'right',
  },
  whiteFont: {
    color: whiteColor,
  },
  purple: {
    backgroundColor: primaryColor[0],
    ...primaryBoxShadow,
    '&:hover,&:focus': {
      backgroundColor: primaryColor[0],
      ...primaryBoxShadow,
    },
  },
  blue: {
    backgroundColor: infoColor[0],
    boxShadow:
      '0 12px 20px -10px rgba(' +
      hexToRgb(infoColor[0]) +
      ',.28), 0 4px 20px 0 rgba(' +
      hexToRgb(blackColor) +
      ',.12), 0 7px 8px -5px rgba(' +
      hexToRgb(infoColor[0]) +
      ',.2)',
    '&:hover,&:focus': {
      backgroundColor: infoColor[0],
      boxShadow:
        '0 12px 20px -10px rgba(' +
        hexToRgb(infoColor[0]) +
        ',.28), 0 4px 20px 0 rgba(' +
        hexToRgb(blackColor) +
        ',.12), 0 7px 8px -5px rgba(' +
        hexToRgb(infoColor[0]) +
        ',.2)',
    },
  },
  green: {
    backgroundColor: successColor[0],
    boxShadow:
      '0 12px 20px -10px rgba(' +
      hexToRgb(successColor[0]) +
      ',.28), 0 4px 20px 0 rgba(' +
      hexToRgb(blackColor) +
      ',.12), 0 7px 8px -5px rgba(' +
      hexToRgb(successColor[0]) +
      ',.2)',
    '&:hover,&:focus': {
      backgroundColor: successColor[0],
      boxShadow:
        '0 12px 20px -10px rgba(' +
        hexToRgb(successColor[0]) +
        ',.28), 0 4px 20px 0 rgba(' +
        hexToRgb(blackColor) +
        ',.12), 0 7px 8px -5px rgba(' +
        hexToRgb(successColor[0]) +
        ',.2)',
    },
  },
  orange: {
    backgroundColor: warningColor[0],
    boxShadow:
      '0 12px 20px -10px rgba(' +
      hexToRgb(warningColor[0]) +
      ',.28), 0 4px 20px 0 rgba(' +
      hexToRgb(blackColor) +
      ',.12), 0 7px 8px -5px rgba(' +
      hexToRgb(warningColor[0]) +
      ',.2)',
    '&:hover,&:focus': {
      backgroundColor: warningColor[0],
      boxShadow:
        '0 12px 20px -10px rgba(' +
        hexToRgb(warningColor[0]) +
        ',.28), 0 4px 20px 0 rgba(' +
        hexToRgb(blackColor) +
        ',.12), 0 7px 8px -5px rgba(' +
        hexToRgb(warningColor[0]) +
        ',.2)',
    },
  },
  red: {
    backgroundColor: dangerColor[0],
    boxShadow:
      '0 12px 20px -10px rgba(' +
      hexToRgb(dangerColor[0]) +
      ',.28), 0 4px 20px 0 rgba(' +
      hexToRgb(blackColor) +
      ',.12), 0 7px 8px -5px rgba(' +
      hexToRgb(dangerColor[0]) +
      ',.2)',
    '&:hover,&:focus': {
      backgroundColor: dangerColor[0],
      boxShadow:
        '0 12px 20px -10px rgba(' +
        hexToRgb(dangerColor[0]) +
        ',.28), 0 4px 20px 0 rgba(' +
        hexToRgb(blackColor) +
        ',.12), 0 7px 8px -5px rgba(' +
        hexToRgb(dangerColor[0]) +
        ',.2)',
    },
  },
  sidebarWrapper: {
    // drawerPaper: {
    //   backgroundColor: "#FFFFFF",
    // },
    position: 'relative',
    height: 'calc(100vh - 75px)',
    overflow: 'auto',
    width: '260px',
    zIndex: '4',
    overflowScrolling: 'touch',
  },
  activePro: {
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      width: '100%',
      bottom: '13px',
    },
  },
});

export default sidebarStyle;
