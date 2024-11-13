import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import api from 'config/apiService';
import API_BASE_URL from 'config/apiConfig';

import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';

import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'left',
  },
  titleHeader: {
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  label: {
    fontSize: '14px',
    display: 'block',
    fontWeight: 'bold',
  },
  Button: {
    borderRadius: '8px',
    display: 'block',
  },
};

const useStyles = makeStyles(styles);

export default function AddRoless() {
  const classes = useStyles();

  //const untuk Integrasi API
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');

  const [posts, setPosts] = useState([]);

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
      resetForm(endpoint); // fungsi reset form
    } catch (error) {
      console.error('HTTP ERROR! Status: ', error.message);
      alert(`${error.message || 'Unknown Error'}`);
    }
  };

  const resetForm = (endpoint) => {
    if (endpoint === 'roles/create') {
      setname('');
      setdescription('');
    }
  };

  const handleSubmitRoles = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert('Roles Required');
      return;
    }
    handleSubmitGeneric(
      'roles/create',
      'post',
      { name, description },
      'Roles Successfully Added',
    );
  };

  return (
    <form onSubmit={handleSubmitRoles}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h4 className={classes.titleHeader}>Add Roles</h4>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <p className={classes.label}>Role Name</p>
          <CustomInput
            id="NameRole"
            inputProps={{
              placeholder: 'Roles',
              value: name,
              onChange: (e) => setname(e.target.value),
            }}
            formControlProps={{
              fullWidth: true,
            }}
          />

          <p className={classes.label}>Role Description</p>
          <CustomInput
            id="Description"
            inputProps={{
              placeholder: 'Description',
              value: description,
              onChange: (e) => setdescription(e.target.value),
            }}
            formControlProps={{
              fullWidth: true,
            }}
          />
          <Button type="submit" className={classes.Button} color="primary">
            Add Role
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
}
