import React from 'react';
import { InputAdornment, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';

import Button from 'components/CustomButtons/Button';
import Table from 'components/Table/Table';
import CustomInput from 'components/CustomInput/CustomInput';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { blackColor } from 'assets/jss/material-dashboard-react';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'left',
  },
  titleHeader: {
    fontWeight: 'bold',
    marginBottom: '30px',
    marginTop: '12px',
  },
  lineHeader: {
    width: '100%',
    margin: 'auto',
    borderTop: '1px solid #ddd',
    marginBottom: '30px',
  },
  itemSearch: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
};

const useStyles = makeStyles(styles);

export default function Roles() {
  const history = useHistory();

  const handleAddRoleClick = () => {
    history.push('/admin/addroles');
  };

  const classes = useStyles();
  return (
    <Card>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.header}>
              <h4 className={classes.titleHeader}>Roles</h4>
            </div>
          </GridItem>
          <hr className={classes.lineHeader} />
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.itemSearch}>
              <div>
                <CustomInput
                  id="search"
                  inputProps={{
                    placeholder: 'Search',
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </div>

              <div className={classes.itemButton}>
                <Button onClick={handleAddRoleClick} round color="primary">
                  Add Roles
                </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Table
              tableHeaderColor={blackColor}
              tableHead={[
                <th key="Role" style={{ fontWeight: 'bold' }}>
                  Roles
                </th>,
                <th key="Member" style={{ fontWeight: 'bold' }}>
                  Member
                </th>,
                <th key="Action" style={{ fontWeight: 'bold' }}>
                  Action
                </th>,
              ]}
              tableData={[['Manager', 'Akmal Maliki', 'Backend Developer']]}
            />
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}
