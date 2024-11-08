import React, { useState, useEffect } from 'react';
import api from 'config/apiService';

import { Box, MenuItem, TextField } from '@material-ui/core';
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
  const [value, setValue] = useState(0);

  //const variabel
  const [departement_name, setdepartement_name] = useState('');
  const [departement_head, setDepartement_head] = useState('');
  const [division_name, setDivision_name] = useState('');
  const [subDivision_name, setSubdivision_name] = useState('');
  const [nama_jabatan, setPosition_name] = useState('');
  const [kode_jabatan, setposition_code] = useState('');

  //const GET
  const [departementId, setDepartementId] = useState('');
  const [divisionId, setdivision_id] = useState('');
  const [subDivisionId, setSubDivision_id] = useState('');

  //const List Data Response
  const [posts, setPosts] = useState([]);
  const [departementList, setDepartementList] = useState([]);
  const [divisionList, setDivisionList] = useState([]);
  const [SubDivisionList, setSubDivisionList] = useState([]);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await api.get('api/getDepartement');
        console.log('Departement Data: ', response.data);
        setDepartementList(response.data);
      } catch (error) {
        console.error(
          'Error Fetch Departement Data: ',
          error.response?.status || error.message,
        );
        // alert(`Error fetching data: ${error.message}`);
      }
    };

    const fetchDivision = async () => {
      try {
        const response = await api.get('api/getDivision');
        console.log('Division Data : ', response.data);
        setDivisionList(response.data);
      } catch (error) {
        console.error(
          'Error Fetching Division Data: ',
          error.response?.status || error.message,
        );
      }
    };
    const fetchSubDivision = async () => {
      try {
        const response = await api.get('api/getSubdivision');
        console.log('SubDivision Data: ', response.data);
        setSubDivisionList(response.data);
      } catch (error) {
        console.error(
          'Error Fetching Subdivision Data: ',
          error.response?.status || error.message,
        );
      }
    };
    fetchDepartment();
    fetchDivision();
    fetchSubDivision();
  }, []);

  const handleSelectChange = (event) => {
    const selectedDepartement = departementList.find(
      (dept) => dept.departement_name === event.target.value,
    );
    setdepartement_name(selectedDepartement.departement_name);
    setDepartementId(selectedDepartement.id); // Set the ID of the selected department
  };

  const handleSelectDivChange = (event) => {
    const selectedDivision = divisionList.find(
      (divis) => divis.division_name === event.target.value,
    );
    setDivision_name(selectedDivision.division_name);
    setdivision_id(selectedDivision.id);
  };

  const handleSelectSubDivChange = (event) => {
    const selectedSubDivision = SubDivisionList.find(
      (Subdivis) => Subdivis.subDivision_name === event.target.value,
    );
    setSubdivision_name(selectedSubDivision.subDivision_name);
    setSubDivision_id(selectedSubDivision.id);
  };

  const handleSubmitGeneric = async (
    endpoint,
    method,
    bodyData,
    successMessage,
  ) => {
    try {
      console.log(
        `Sending ${method} request to ${API_BASE_URL}/${endpoint}`,
        bodyData,
      );
      const response = await api({
        method: method,
        url: `/${endpoint}`,
        data: bodyData,
      });
      console.log(successMessage, response.data);
      alert(successMessage);
      setPosts((posts) => [response.data, ...posts]);
      resetForm(endpoint);
    } catch (error) {
      console.error('HTTP ERROR! Status:', error.message);
      alert(`${error.message || 'Unknown Error'}`);
    }
  };

  const resetForm = (endpoint) => {
    if (endpoint === 'api/addDepartement') {
      setdepartement_name('');
      setDepartement_head('');
    } else if (endpoint === 'api/addDivision') {
      setdepartement_name('');
      setDivision_name('');
    } else if (endpoint === 'api/addSubDivision') {
      setDivision_name('');
      setSubdivision_name('');
    } else if (endpoint === 'api/addJabatan') {
      setdepartement_name('');
      setDivision_name('');
      setSubdivision_name('');
      setPosition_name('');
      setposition_code('');
    }
  };

  const handleSubmitDepartment = (e) => {
    e.preventDefault();
    if (!departement_name || !departement_head) {
      alert('Departement and Department Head are required');
      return;
    }
    handleSubmitGeneric(
      'api/addDepartement',
      'post',
      { departement_name, departement_head },
      'Department successfully added',
    );
  };

  const handleSubmitDivision = (e) => {
    e.preventDefault();
    if (!division_name || !departementId) {
      alert('Please select a department and fill in the division name');
      return;
    }

    // console.log("Division Payload: ", { division_name, departementId }); // Debug: Check payload
    handleSubmitGeneric(
      'api/addDivision',
      'post',
      { division_name, departementId }, // Include the department ID in the request payload
      'Division successfully added',
    );
  };

  const handleSubmitSubdivision = (e) => {
    e.preventDefault();
    if (!subDivision_name || !divisionId) {
      alert('Please select a Division and fill in the Sub Division name');
      return;
    }
    console.log('SubDivision Payload: ', { subDivision_name, divisionId }); // Debug: Check payload
    handleSubmitGeneric(
      'api/addSubDivision',
      'post',
      { subDivision_name, divisionId },
      'SubDivision Successfully Added',
    );
  };

  const handleSubmitPosition = (e) => {
    e.preventDefault();
    if (!nama_jabatan || !kode_jabatan || !departementId) {
      alert('Make Sure Position Code, Position Name and Departement is filled');
      return;
    }
    handleSubmitGeneric(
      'api/addJabatan',
      'post',
      {
        nama_jabatan,
        kode_jabatan,
        departementId,
        divisionId: divisionId || null, // kondisi jika division dapat dikosongkan
        subDivisionId: subDivisionId || null,
      },
      'Position successfully added',
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
                        // labelText="Department Name"
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
                        Add Department
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

                      <TextField
                        id="department_name"
                        select
                        label="Departement Name"
                        value={departement_name}
                        onChange={handleSelectChange}
                        style={{
                          width: '100%',
                        }}
                      >
                        {departementList.map((dept) => (
                          <MenuItem key={dept.id} value={dept.departement_name}>
                            {dept.departement_name}
                          </MenuItem>
                        ))}
                      </TextField>

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
                        Add Division
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
            <form onSubmit={handleSubmitSubdivision}>
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
                      <TextField
                        id="division_name"
                        select
                        label="Division Name"
                        value={division_name}
                        onChange={handleSelectDivChange}
                        style={{
                          width: '100%',
                        }}
                      >
                        {divisionList.map((divis) => (
                          <MenuItem key={divis.id} value={divis.division_name}>
                            {divis.division_name}
                          </MenuItem>
                        ))}
                      </TextField>

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
                        inputProps={{
                          value: subDivision_name,
                          onChange: (e) => setSubdivision_name(e.target.value),
                        }}
                      />

                      {/* Button untuk Add Sub Division */}
                      <Button
                        type="submit"
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
            <form onSubmit={handleSubmitPosition}>
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
                        htmlFor="DepartmentName"
                        style={{
                          fontWeight: 'bold',
                          marginBottom: '5px',
                          display: 'block',
                        }}
                      >
                        Departement Name
                      </p>

                      <TextField
                        id="department_name"
                        select
                        label="Departement Name"
                        value={departement_name}
                        onChange={handleSelectChange}
                        style={{
                          width: '100%',
                        }}
                      >
                        {departementList.map((dept) => (
                          <MenuItem key={dept.id} value={dept.departement_name}>
                            {dept.departement_name}
                          </MenuItem>
                        ))}
                      </TextField>

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
                      <TextField
                        id="division_name"
                        select
                        label="Division Name"
                        value={division_name}
                        onChange={handleSelectDivChange}
                        style={{
                          width: '100%',
                        }}
                      >
                        {divisionList.map((divis) => (
                          <MenuItem key={divis.id} value={divis.division_name}>
                            {divis.division_name}
                          </MenuItem>
                        ))}
                      </TextField>

                      <p
                        htmlFor="SubDivision"
                        style={{
                          fontWeight: 'bold',
                          marginBottom: '5px',
                          display: 'block',
                        }}
                      >
                        Choose SubDivision
                      </p>

                      <TextField
                        id="subDivision_name"
                        select
                        label="subDivision Name"
                        value={subDivision_name}
                        onChange={handleSelectSubDivChange}
                        style={{
                          width: '100%',
                        }}
                      >
                        {SubDivisionList.map((Subdivis) => (
                          <MenuItem
                            key={Subdivis.id}
                            value={Subdivis.subDivision_name}
                          >
                            {Subdivis.subDivision_name}
                          </MenuItem>
                        ))}
                      </TextField>

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
                        inputProps={{
                          value: nama_jabatan,
                          onChange: (e) => setPosition_name(e.target.value),
                        }}
                      />
                      <p
                        htmlFor="position-code"
                        style={{
                          fontWeight: 'bold',
                          marginBottom: '5px',
                          display: 'block',
                        }}
                      >
                        Position Code
                      </p>
                      <CustomInput
                        id="PositionCode"
                        labelText="Position Code"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          value: kode_jabatan,
                          onChange: (e) => setposition_code(e.target.value),
                        }}
                      />
                      {/* Button untuk Add Position */}
                      <Button
                        type="submit"
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
            </form>
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
