import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from "@material-ui/core/InputLabel";

// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';

import avatar from 'assets/img/faces/marc.jpg';

// import { Grid, List } from "@material-ui/core";
import PersonalInfo from './InfoProfile/PersonalInfo';
import BasicInfo from './InfoProfile/BasicInfo';
import ChangePict from './InfoProfile/ChangePict';
import ChangePass from './InfoProfile/ChangePass';
import MenuListRoutes from '../../MenuListRoutes';

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
  footerText: {
    fontSize: '14px',
    color: '#6c757d',
    textAlign: 'center',
    width: '100%',
  },
  footerContainer: {
    borderTop: '1px solid #f0f0f0',
    padding: '10px 0',
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>

            <CardBody profile>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4
                  className={classes.cardTitle}
                  style={{ fontWeight: 'bold' }}
                >
                  Name
                </h4>
                <h4
                  className={classes.cardTitle}
                  style={{ textAlign: 'right' }}
                >
                  Muhammad Ilham Yushronni
                </h4>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4
                  className={classes.cardTitle}
                  style={{ fontWeight: 'bold' }}
                >
                  Email
                </h4>
                <h4
                  className={classes.cardTitle}
                  style={{ textAlign: 'right' }}
                >
                  Cumyush21@gmail.com
                </h4>
              </div>
            </CardBody>

            <CardFooter className={classes.footerContainer}>
              <p className={classes.footerText}>
                Latest Update : 27 September 2024
              </p>
            </CardFooter>
          </Card>

          <Card>
            <MenuListRoutes />
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <Switch>
              <Route path="/admin/user/basicinfo" component={BasicInfo} />
              <Route path="/admin/user/personalinfo" component={PersonalInfo} />
              <Route path="/admin/user/profilePicture" component={ChangePict} />
              <Route path="/admin/user/password" component={ChangePass} />
              <Redirect from="/admin/user" to="/admin/user/basicinfo" />
            </Switch>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
