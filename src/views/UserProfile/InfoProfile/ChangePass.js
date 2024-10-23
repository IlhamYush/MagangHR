import React from 'react';

//Styles
import { makeStyles } from '@material-ui/core/styles';

//Core Components
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardFooter from 'components/Card/CardFooter';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
  // textStyle: {
  //     fontWeight: "bold",
  //     fontFamily: "Nova Mono",
  // },
};

const useStyles = makeStyles(styles);

export default function ChangePass() {
  const classes = useStyles();

  return (
    <div>
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
                Change Password
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
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Current Password"
              id="CurrentPass"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="New Password"
              id="NewPass"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Confirm Password"
              id="ConfirmPass"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>
      </CardBody>

      <CardFooter>
        <Button color="primary" round>
          Save Password
        </Button>
      </CardFooter>
    </div>
  );
}
