import React from 'react';

import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';

const leaveStyles = {
  leaveInputContainer: {
    border: '2px solid #ccc',
    borderRadius: '7px',
    padding: '10px',
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    alignItems: 'center',
    minHeight: '56px', // Ensures it matches the height of CustomInput fields
  },
  leaveButton: {
    backgroundColor: '#9bbdf9', // Light blue background color for leave types
    borderRadius: '20px',
    padding: '8px 16px',
    fontSize: '14px',
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
};

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

      {/* Leave Entitlements Display Field */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <label style={{ fontSize: '12px', color: '#aaa' }}>Leave Entitlements</label>
          <div style={leaveStyles.leaveInputContainer}>
            <div style={leaveStyles.leaveButton}>Cuti Tahunan</div>
            <div style={leaveStyles.leaveButton}>Cuti Melahirkan</div>
            <div style={leaveStyles.leaveButton}>Cuti Kerabat Meninggal</div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
