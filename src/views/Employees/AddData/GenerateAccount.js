import React from 'react';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import Button from 'components/CustomButtons/Button';

export default function GenerateAccount() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <div
            style={{
              marginTop: '5px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <LockRoundedIcon
              style={{
                marginRight: '10px',
                fontSize: '30px',
              }}
            />
            <h6
              style={{
                fontWeight: 'bold',
                fontSize: '15px',
              }}
            >
              Generate Account
            </h6>
          </div>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Username"
            id="UsernameAcc"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            {/* <p htmlFor='PassAcc'style={{fontWeight: 'bold', fontSize: '15px'}}>
                                Password
                            </p> */}
            <CustomInput
              labelText="Password"
              id="PassAcc"
              formControlProps={{
                fullWidth: true,
              }}
            />
            <div
              style={{
                marginTop: '15px',
              }}
            >
              <Button color="primary" round>
                Save
              </Button>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
