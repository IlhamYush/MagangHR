import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AddRoless from './AddRoless';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'left',
  },
  tabRoot: {
    minHeight: '70px',
    borderTopLeftRadius: '25px', // Sesuaikan border radius di sini
    padding: '12px 16px',
    '&.Mui-selected': {
      borderTopLeftRadius: '25px', // Radius untuk tab yang aktif
    },
  },
  selectedTab: {
    borderTopLeftRadius: '25px',
  },
  tabRootRight: {
    minHeight: '70px',
    borderTopRightRadius: '25px', // Sesuaikan border radius di sini
    padding: '12px 16px',
    '&.Mui-selected': {
      borderTopRightRadius: '25px', // Radius untuk tab yang aktif
    },
  },
  selectedTabRight: {
    borderTopRightRadius: '25px',
  },
};

const useStyles = makeStyles(styles);

export default function AddRoles() {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab
          label="Display"
          classes={{ root: classes.tabRoot, selected: classes.selectedTab }}
        />
        <Tab label="Permissions" />
        <Tab
          label="Manage Member"
          classes={{
            root: classes.tabRootRight,
            selected: classes.selectedTabRight,
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <AddRoless />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h3> Ini Adalah Tab Untuk UI Permission </h3>
      </TabPanel>
    </Card>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <CardBody p={3}>{children}</CardBody>}
    </div>
  );
}
