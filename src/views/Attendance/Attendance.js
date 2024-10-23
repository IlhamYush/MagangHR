import React from 'react';

// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Table from 'components/Table/Table.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import { blackColor } from 'assets/jss/material-dashboard-react';
import CustomInput from 'components/CustomInput/CustomInput';

export default function Attendance() {
  return (
    <Card>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <CustomInput
                id="search-attendance"
                labelText="Search"
                formontrolProps={{
                  fullWidth: true,
                }}
              />
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Table
              tableHeaderColor={blackColor}
              tableHead={[
                <th style={{ fontWeight: 'bold' }}>Name</th>,
                <th style={{ fontWeight: 'bold' }}>Location</th>,
                <th style={{ fontWeight: 'bold' }}>Check In</th>,
                <th style={{ fontWeight: 'bold' }}>Check Out</th>,
                <th style={{ fontWeight: 'bold' }}>Total Shift</th>,
                <th style={{ fontWeight: 'bold' }}>Date</th>,
                <th style={{ fontWeight: 'bold' }}>Status</th>,
              ]}
              tableData={[
                [
                  'Abdul Rajak',
                  'Buahbatu',
                  '09.00 AM',
                  '17.00 PM',
                  '7 Hours',
                  '10/22/2024',
                  'Approved',
                ],
                [
                  'Fajar Sadboi',
                  'Rastek.ID',
                  '09.00 AM',
                  '17.00 PM',
                  '7 Hours',
                  '10/21/2024',
                  'Approved',
                ],
                [
                  'Viego Boulevard',
                  'Sharon Boulevard',
                  '08.50 AM',
                  '7 Hours',
                  '17.00 PM',
                  '10/08/2024',
                  'Approved',
                ],
              ]}
            />
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}
