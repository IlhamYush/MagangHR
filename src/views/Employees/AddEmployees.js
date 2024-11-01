import React, { useState, useEffect } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';

// import { makeStyles } from "@material-ui/core/styles";
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';

// core components
import Card from 'components/Card/Card.js';
import AddPersonalInfo from './AddData/AddPersonalInfo';
import AddBasicInfo from './AddData/AddBasicInfo';
import GenerateAccount from './AddData/GenerateAccount';

export default function AddEmployees() {
  const [value, setValue] = useState(0);
  const [isTab3Enable, setTab3Enable] = useState(false);

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEnable = () => {
    console.log('Index ke : ', value);
    if (value === 1) {
      setTab3Enable(true);
      console.log('Tab 3 enabled: ', true);
    }
  };

  return (
    <div>
      <Card>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon tabs example"
            indicatorColor="primary"
            style={{ marginTop: '16px', marginLeft: '23px' }} // Adjusts the top spacing of the Tabs
          >
            <Tab icon={<PersonOutlineRoundedIcon />} aria-label="Person" />
            <Tab icon={<ImportContactsRoundedIcon />} aria-label="BasicInfo" />
            <Tab
              icon={<LockRoundedIcon />}
              aria-label="GenerateAcc"
              disabled={handleEnable}
            />
          </Tabs>

          <hr
            style={{
              width: '95%', // set panjang line
              margin: 'auto', // menambah spacing
              borderTop: '1px solid #ddd',
            }}
          />

          <TabPanel value={value} index={0}>
            <AddPersonalInfo />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <AddBasicInfo />
          </TabPanel>

          <TabPanel value={value} index={2}>
            <GenerateAccount />
          </TabPanel>

      </Card>
    </div>
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
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
}
