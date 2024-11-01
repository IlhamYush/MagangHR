import React from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Table from 'components/Table/Table.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button';
import { blackColor } from 'assets/jss/material-dashboard-react';

//material-ui
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import CustomInput from 'components/CustomInput/CustomInput';
import AddEmployees from './AddEmployees';

export default function Employees() {
  const history = useHistory();
  const match = useRouteMatch();

  const OpenEmployee = () => {
    console.log('Navigating to Add Employee Page');
    history.push(`${match.url}/addEmployee`);
  };

  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}/addEmployee`}>
          <AddEmployees />
        </Route>
      </Switch>

      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <CustomInput
                    labelText="Search"
                    id="Search"
                    // inputProps={{
                    //     value: "..."
                    // }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent:
                      'flex-end' /* Memposisikan tombol ke kanan */,
                    gap: '10px',
                  }}
                >
                  {/* Add Employee Button */}
                  <Button
                    onClick={OpenEmployee}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #E0E0E0',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      cursor: 'pointer',
                      height: '43px',
                    }}
                  >
                    <AddRoundedIcon
                      style={{ marginRight: '8px', color: blackColor }}
                    />
                    <p style={{ color: blackColor }}>Add Employee</p>
                  </Button>

                  {/* Filter Button */}
                  <Button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #E0E0E0',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      cursor: 'pointer',
                      height: '43px',
                    }}
                  >
                    <FilterListRoundedIcon
                      style={{ marginRight: '8px', color: blackColor }}
                    />
                    <p style={{ color: blackColor }}>Filter</p>
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Table
                tableHeaderColor={blackColor}
                // tableHead={["Name", "Status", "Divisi", "Department", "Role", "Action"]}
                tableHead={[
                  <th style={{ fontWeight: 'bold' }}>Name</th>,
                  <th style={{ fontWeight: 'bold' }}>Status</th>,
                  <th style={{ fontWeight: 'bold' }}>Divisi</th>,
                  <th style={{ fontWeight: 'bold' }}>Department</th>,
                  <th style={{ fontWeight: 'bold' }}>Role</th>,
                  <th style={{ fontWeight: 'bold' }}>Action</th>,
                ]}
                tableData={[
                  [
                    'Ilham Yushronni',
                    'Active',
                    'Engineering',
                    'Software Development',
                    'Frontend Developer',
                    'Edit',
                  ],
                  [
                    'Akmal Malika',
                    'Active',
                    'Engineering',
                    'Software Development',
                    'Software Developer',
                    'Edit',
                  ],
                  [
                    'Lazuardi Fajar',
                    'Active',
                    'IT Support',
                    'Technical Support',
                    'IT Support Specialist',
                    'Edit',
                  ],
                ]}
              />
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    </div>
  );
}
