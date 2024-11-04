import React, { useState } from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Table from 'components/Table/Table.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button';
import { blackColor } from 'assets/jss/material-dashboard-react';

// Material-UI icons
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import CustomInput from 'components/CustomInput/CustomInput';
import AddEmployees from './AddEmployees';

const styles = {
  cardTitle: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '17px',
    fontWeight: 'bold',
    color: '#333',
    padding: '20px',
    paddingLeft: '30px',
    borderBottom: '1px solid #ddd',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
    border: '1px solid #e0e0e0',
    borderRadius: '7px',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  searchInputContainer: {
    position: 'relative',
    width: '250px',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '15px',
    gap: '8px',
  },
  paginationButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  paginationText: {
    fontSize: '14px',
    color: '#333',
  },
  pageNumber: {
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '0 5px',
  },
  tableContainer: {
    padding: '10px 20px',
  },
  tableHeaderRow: {
    backgroundColor: '#d9e2f3', // Apply background color to entire row
  },
  tableCell: {
    textAlign: 'center',
  },
  tableCellName: {
    textAlign: 'left',
  },
  actionButtonGroup: {
    display: 'flex',
    gap: '5px',
    justifyContent: 'center',
  },
  actionButton: {
    fontSize: '12px',
    padding: '4px 8px',
  },
};

export default function Employees() {
  const history = useHistory();
  const match = useRouteMatch();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 100;

  const OpenEmployee = () => {
    history.push(`${match.url}/addEmployee`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}/addEmployee`}>
          <AddEmployees />
        </Route>
      </Switch>

      <Card>
        <div style={styles.cardTitle}>Employees Data</div>
        <CardBody style={styles.tableContainer}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '5px',
            }}
          >
            <div style={styles.searchInputContainer}>
              <CustomInput
                labelText="Search"
                id="Search"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </div>

            <div style={styles.buttonGroup}>
              <Button onClick={OpenEmployee} style={styles.button}>
                <AddRoundedIcon style={{ marginRight: '8px' }} />
                Add Employee
              </Button>

              <Button style={styles.button}>
                <FilterListRoundedIcon style={{ marginRight: '8px' }} />
                Filter
              </Button>
            </div>
          </div>

          <Table
            tableHeaderColor={blackColor}
            tableHead={[
              <th style={{ ...styles.tableHeaderRow, fontWeight: 'bold' }}>NIP</th>,
              <th style={{ ...styles.tableHeaderRow, fontWeight: 'bold' }}>Name</th>,
              <th style={{ ...styles.tableHeaderRow, fontWeight: 'bold' }}>Status</th>,
              <th style={{ ...styles.tableHeaderRow, fontWeight: 'bold' }}>Divisi</th>,
              <th style={{ ...styles.tableHeaderRow, fontWeight: 'bold' }}>Department</th>,
              <th style={{ ...styles.tableHeaderRow, fontWeight: 'bold' }}>Role</th>,
              <th style={{ ...styles.tableHeaderRow, fontWeight: 'bold' }}>Action</th>,
            ]}
            tableData={[
              ['10001', 'Ilham Yushronni', 'Active', 'Engineering', 'Software Development', 'Frontend Developer', 
               <div style={styles.actionButtonGroup}>
                 <Button style={styles.actionButton}>Edit</Button>
                 <Button style={styles.actionButton}>View</Button>
               </div>],
              ['10002', 'Akmal Malika', 'Active', 'Engineering', 'Software Development', 'Software Developer',
               <div style={styles.actionButtonGroup}>
                 <Button style={styles.actionButton}>Edit</Button>
                 <Button style={styles.actionButton}>View</Button>
               </div>],
              ['10003', 'Lazuardi Fajar', 'Active', 'IT Support', 'Technical Support', 'IT Support Specialist',
               <div style={styles.actionButtonGroup}>
                 <Button style={styles.actionButton}>Edit</Button>
                 <Button style={styles.actionButton}>View</Button>
               </div>],
              ['10004', 'Ankara Messi', 'Active', 'Finance', 'External Payment', 'Finance',
               <div style={styles.actionButtonGroup}>
                 <Button style={styles.actionButton}>Edit</Button>
                 <Button style={styles.actionButton}>View</Button>
               </div>],
              ['10005', 'Putti Moana', 'Inactive', 'IT Support', 'Technical Support', 'IT Support Specialist',
               <div style={styles.actionButtonGroup}>
                 <Button style={styles.actionButton}>Edit</Button>
                 <Button style={styles.actionButton}>View</Button>
               </div>],
            ]}
          />

          <div style={styles.paginationContainer}>
            <Button onClick={handlePreviousPage} disabled={currentPage === 1} style={styles.paginationButton}>
              &lt;
            </Button>
            <span>Page</span>
            <div style={{ ...styles.paginationButton, fontWeight: 'bold' }}>
              {currentPage}
            </div>
            <span>of {totalPages}</span>
            <Button onClick={handleNextPage} disabled={currentPage === totalPages} style={styles.paginationButton}>
              &gt;
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

