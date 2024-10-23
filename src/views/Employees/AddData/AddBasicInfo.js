import React from 'react';

import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';

export default function AddBasicInfo() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <div
            style={{
              marginTop: '5px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ImportContactsRoundedIcon
              style={{ marginRight: '10px', fontSize: '30px' }}
            />
            <h6 style={{ fontWeight: 'bold', fontSize: '15px' }}>
              Basic Information
            </h6>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Position"
            id="company-disabled"
            formControlProps={{
              fullWidth: true,
            }}
            // inputProps={{
            //   disabled: true,
            // }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Contract Start Date"
            id="username"
            formControlProps={{
              fullWidth: true,
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
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Division"
            id="last-name"
            formControlProps={{
              fullWidth: true,
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
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Contract Status"
            id="country"
            formControlProps={{
              fullWidth: true,
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
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
