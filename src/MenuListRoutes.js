import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Icon import (sesuaikan dengan kebutuhanmu)
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';

// Definisikan styles
const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  menuItem: {
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#f0f4ff',
    },
  },
  menuItemSelected: {
    backgroundColor: '#e0ecff',
    borderLeft: '4px solid #2979ff',
  },
  iconStyle: {
    minWidth: '40px',
    color: '#000',
  },
  textStyle: {
    fontWeight: 500,
    color: '#000',
  },
}));

const routes = [
  {
    path: '/basicinfo',
    name: 'Basic Information',
    icon: ImportContactsRoundedIcon,
    layout: '/admin/user',
  },
  {
    path: '/personalinfo',
    name: 'Personal Information',
    icon: PersonRoundedIcon,
    layout: '/admin/user',
  },
  {
    path: '/profilePicture',
    name: 'Profile Picture',
    icon: CameraAltRoundedIcon,
    layout: '/admin/user',
  },
  {
    path: '/password',
    name: 'Change Password',
    icon: LockOpenRoundedIcon,
    layout: '/admin/user',
  },
];

export default function MenuListRoutes() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation(); // Mengambil URL saat ini
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Fungsi untuk menentukan indeks yang sesuai berdasarkan path URL
  useEffect(() => {
    const currentPath = location.pathname;
    const currentIndex = routes.findIndex((route) =>
      currentPath.includes(route.path),
    );
    if (currentIndex !== -1) {
      setSelectedIndex(currentIndex);
    }
  }, [location]);

  const handleListItemClick = (index, path) => {
    setSelectedIndex(index);
    history.push(path);
  };

  return (
    <List component="nav" className={classes.root}>
      {routes.map((route, index) => (
        <ListItem
          button
          key={index}
          className={`${classes.menuItem} ${selectedIndex === index && classes.menuItemSelected}`}
          onClick={() => handleListItemClick(index, route.layout + route.path)}
        >
          <ListItemIcon className={classes.iconStyle}>
            <route.icon />
          </ListItemIcon>
          <ListItemText primary={route.name} className={classes.textStyle} />
        </ListItem>
      ))}
    </List>
  );
}
