import React, { useState } from 'react';
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
import CardFooter from 'components/Card/CardFooter';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';
import AddPersonalInfo from './AddData/AddPersonalInfo';
import AddBasicInfo from './AddData/AddBasicInfo';
import GenerateAccount from './AddData/GenerateAccount';

export default function AddEmployees() {
  const [value, setValue] = useState(0);
  const [isTab3Enable, setTab3Enable] = useState(false);

  const changeValue = (newValue) => {
    setValue(newValue);
  };

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
        <CardBody>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon tabs example"
            indicatorColor="primary"
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
              width: '100%',
              margin: 'auto',
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
        </CardBody>

        <CardFooter>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginBottom: '15px',
              // marginTop: '5px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              <ArrowBackIosRoundedIcon
                onClick={() => value > 0 && changeValue(value - 1)}
                style={{
                  cursor: value > 0 ? 'pointer' : 'not-allowed',
                  opacity: value > 0 ? 1 : 0.5,
                }}
              />

              <ArrowForwardIosRoundedIcon
                onClick={() => value < 1 && changeValue(value + 1)}
                style={{
                  cursor: value < 1 ? 'pointer' : 'not-allowed',
                  opacity: value < 1 ? 1 : 0.5,
                }}
              />
            </div>

            {value !== 2 && (
              <div
                style={{
                  alignItems: 'center',
                  marginRight: '24px',
                  marginLeft: 'auto',
                }}
              >
                <Button
                  color="primary"
                  round
                  onClick={() =>
                    value > 0 && changeValue(value + 1) && handleEnable
                  }
                >
                  Save
                </Button>
              </div>
            )}
          </div>
        </CardFooter>
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
