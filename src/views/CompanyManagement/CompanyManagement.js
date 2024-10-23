import React, { useState, useEffect } from 'react';
import api from 'config/apiService';

import { Box } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import API_BASE_URL from 'config/apiConfig';

// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';

export default function CompanyManagement() {

  const [departement_name, setdepartement_name] = useState('');
  const [departement_head, setDepartement_head] = useState('');
  const [division_name, setDivision_name] = useState('');
  const [subdivision_name, setSubdivision_name] = useState('');
  // const [position_name, setPosition_name] = useState('');

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState(0);

  const handleSubmitGeneric = async (
    endpoint,
    method,
    bodyData,
    successMessage,
  ) => {
    try {
      console.log(`Sending ${method} request to ${API_BASE_URL}/${endpoint}`);
      console.log('Request body:', bodyData);

      const response = await api({
        method: method, // Menentukan metode HTTP: 'get', 'post', 'put', 'delete', dll.
        url: `/${endpoint}`, // Menentukan endpoint API
        data: bodyData, // Data yang akan dikirim (hanya untuk POST, PUT, PATCH)
      });

      console.log(successMessage, response.data);
      alert(successMessage);
      setPosts((posts) => [response.data, ...posts]);

      if (endpoint === 'api/addDepartement') {
        setdepartement_name('');
        setDepartement_head('');
      } else if (endpoint === 'api/addDivision') {
        setDivision_name('');
      }
    } catch (error) {
      console.error('HTTP ERROR! Status:', error.message);
      alert(`${error.message || 'Unknown Error'}`);
    }
  };

  const handleSubmitDepartment = (e) => {
    e.preventDefault();
    if (!departement_name || !departement_head) {
      alert('Departement dan Kepala Departemen Diperlukan');
      return;
    }
    handleSubmitGeneric(
      'addDepartement', // Endpoint API
      'post', // Metode HTTP yang digunakan
      { departement_name, departement_head }, // Data yang dikirim
      'Data Departement Berhasil Didaftarkan',
    );
  };

  const handleSubmitDivision = (e) => {
    e.preventDefault();
    if (!division_name) {
      alert('Mohon untuk mengisi divisi');
      return;
    }
    handleSubmitGeneric(
      'addDivision', // Endpoint API
      'post', // Metode HTTP yang digunakan
      { division_name }, // Data yang dikirim
      'Data Divisi Berhasil Dimasukkan',
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Department" />
            <Tab label="Division" />
            <Tab label="Sub Division" />
            <Tab label="Position" />
          </Tabs>

          <GridContainer>
            <hr
              style={{
                width: '100%',
                margin: 'auto',
                borderTop: '1px solid #ddd',
              }}
            />
          </GridContainer>

          <TabPanel value={value} index={0}>
            <form onSubmit={handleSubmitDepartment}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                    }}
                  >
                    {/* Name Department */}
                    <div>
                      <p
                        htmlFor="DepartmentName"
                        style={{
                          fontWeight: 'bold',
                          marginBottom: '15px',
                          display: 'block',
                        }}
                      >
                        Department Name
                      </p>

                      <CustomInput
                        id="department-name"
                        labelText="Department Name"
                        inputProps={{
                          value: departement_name,
                          onChange: (e) => setdepartement_name(e.target.value),
                        }}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />

                      {/* Add Name Department Head */}
                      <p
                        htmlFor="departmentHead"
                        style={{
                          fontWeight: 'bold',
                          // marginBottom: '15px',
                          display: 'block',
                        }}
                      >
                        Department Head
                      </p>

                      <CustomInput
                        id="department-head"
                        labelText="Department Head"
                        inputProps={{
                          value: departement_head,
                          onChange: (e) => setDepartement_head(e.target.value),
                        }}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />

                      <Button
                        color="primary"
                        type="submit"
                        style={{
                          padding: '8px 16px',
                          borderRadius: '8px',
                          height: '37px',
                        }}
                      >
                        Add
                      </Button>

                      <div style={{ marginTop: '15px', fontSize: '18px' }}>
                        <p>Create your Department to manage your company.</p>
                      </div>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </form>
          </TabPanel>

          {/* Division Form (Tab 1) */}
          <TabPanel value={value} index={1}>
            <form onSubmit={handleSubmitDivision}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                    }}
                  >
                    {/* Name Department */}
                    <div>
                      <p
                        htmlFor="DepartmentName"
                        style={{
                          fontWeight: 'bold',
                          marginBottom: '5px',
                          display: 'block',
                        }}
                      >
                        Department Name
                      </p>

                      <CustomInput
                        id="department-name"
                        labelText="Department Name"
                        inputProps={{
                          value: departement_name,
                          onChange: (e) => setdepartement_name(e.target.value),
                        }}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />

                      {/* Add Name Division */}
                      <p
                        htmlFor="Division"
                        style={{
                          fontWeight: 'bold',
                          marginBottom: '5px',
                          display: 'block',
                        }}
                      >
                        Division Name
                      </p>

                      <CustomInput
                        id="division-name"
                        labelText="Division Name"
                        inputProps={{
                          value: division_name,
                          onChange: (e) => setDivision_name(e.target.value),
                        }}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />

                      {/* Button untuk Add Division */}
                      <Button
                        color="primary"
                        type="submit"
                        style={{
                          padding: '8px 16px',
                          borderRadius: '8px',
                          height: '37px',
                        }}
                      >
                        Add
                      </Button>

                      <div style={{ marginTop: '10px', fontSize: '18px' }}>
                        <p>Create your Division to manage your company.</p>
                      </div>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </form>
          </TabPanel>

          {/* Sub Division Form (Tab 2) */}
          <TabPanel value={value} index={2}>
            <form
              onSubmit={(e) => handleSubmit(e, subdivision_name, 'subdivision')}
            >
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                    }}
                  >
                    {/* Name Division */}
                    <div>
                      <p
                        htmlFor="division"
                        style={{
                          fontWeight: 'bold',
                          marginBottom: '5px',
                          display: 'block',
                        }}
                      >
                        Choose Division
                      </p>
                      <CustomInput
                        id="Division-Input"
                        labelText="Choose Division"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />

                      {/* Add Name Sub Division */}
                      <p
                        htmlFor="SubDivision"
                        style={{
                          fontWeight: 'bold',
                          marginBottom: '5px',
                          display: 'block',
                        }}
                      >
                        Sub Division Name
                      </p>
                      <CustomInput
                        id="SubDivision-Input"
                        labelText="Create Sub Division"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />

                      {/* Button untuk Add Sub Division */}
                      <Button
                        color="primary"
                        style={{
                          padding: '8px 16px',
                          borderRadius: '8px',
                          height: '37px',
                        }}
                      >
                        Add Sub Division
                      </Button>

                      <div style={{ marginTop: '15px', fontSize: '18px' }}>
                        <p>Create your Sub Division to manage your company.</p>
                      </div>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </form>
          </TabPanel>

          {/* Position Form (Tab 3) */}
          <TabPanel value={value} index={3}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  <div>
                    <p
                      htmlFor="position-input"
                      style={{
                        fontWeight: 'bold',
                        marginBottom: '5px',
                        display: 'block',
                      }}
                    >
                      Position Name
                    </p>
                    <CustomInput
                      id="Position-name"
                      labelText="Position"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {/* Button untuk Add Position */}
                    <Button
                      color="primary"
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        height: '37px',
                      }}
                    >
                      Add Position
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </TabPanel>
        </CardBody>
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
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
