import React from 'react';
// import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from '@material-ui/core';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';

const useStyles = makeStyles({
  disableInput: {
    color: 'black',
  },
});

export default function BasicInfo() {
  const classes = useStyles();

  return (
    <div style={{ marginBottom: '15px' }}>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
              <h4
                style={{
                  fontWeight: 'bold',
                  marginBottom: '30px',
                  marginTop: '12px',
                }}
              >
                Basic Information
              </h4>
            </div>
          </GridItem>
          <hr
            style={{
              width: '100%',
              margin: 'auto',
              borderTop: '1px solid #ddd',
            }}
          />
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Position"
              id="company-disabled"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                disabled: true,
                value: 'IT Consultant',
                style: {
                  color: 'black',
                },
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Contract Start Date"
              id="username"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                disabled: true,
                value: '1 Januari 2023',
                style: {
                  color: 'black',
                },
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Second Contract"
              id="email-address"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                disabled: true,
                value: '1 Januari 2024',
                style: {
                  color: 'black',
                },
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Department"
              id="first-name"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                disabled: true,
                value: 'Consulting Services',
                style: {
                  color: 'black',
                },
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Division"
              id="last-name"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                disabled: true,
                value: 'IT Solutions',
                style: {
                  color: 'black',
                },
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Sub-Division"
              id="Department"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                disabled: true,
                value: 'Software Implementation',
                style: {
                  color: 'black',
                },
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Salary"
              id="city"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                disabled: true,
                value: 'IDR 25,000,000',
                style: {
                  color: 'black',
                },
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Contract Status"
              id="country"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                disabled: true,
                value: 'Full-Time Contract',
                style: {
                  color: 'black',
                },
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Attachment"
              id="postal-code"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                disabled: true,
                value: 'ITIL Certificate',
                style: {
                  color: 'black',
                },
              }}
            />
          </GridItem>
        </GridContainer>
      </CardBody>
    </div>
  );
}
