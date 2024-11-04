import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';

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
  cardContent: {
    paddingTop: '10px',
  },
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
  },
  tableControls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    marginBottom: '15px',
  },
  searchInputContainer: {
    position: 'relative',
    width: '250px',
  },
  searchInput: {
    width: '100%',
    padding: '10px 10px 10px 35px',
    border: '1px solid #e0e0e0',
    borderRadius: '7px',
    outline: 'none',
    fontSize: '14px',
    color: '#555',
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    fontSize: '16px',
    color: '#888',
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
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHead: {
    backgroundColor: '#d9e2f3',
  },
  tableHeaderCell: {
    padding: '12px 8px',
    borderBottom: '2px solid #ddd',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '14px',
  },
  tableCell: {
    padding: '10px 8px',
    borderBottom: '1px solid #ddd',
    fontSize: '13px',
    textAlign: 'center',
  },
  nameCell: {
    padding: '10px 8px',
    borderBottom: '1px solid #ddd',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '25px',
  },
  statusCell: {
    textAlign: 'center',
  },
};

const useStyles = makeStyles(styles);

const AttendanceTable = () => {
  const classes = useStyles();
  return (
    <div className={classes.tableContainer}>
      <div className={classes.tableControls}>
        <div className={classes.searchInputContainer}>
          <input
            type="text"
            placeholder="Search"
            className={classes.searchInput}
          />
        </div>
        <div className={classes.buttonGroup}>
          <button className={classes.button}>
            <i className="far fa-calendar-alt"></i>
            <span style={{ marginLeft: '8px' }}>Monthly Report</span>
          </button>
          <button className={classes.button}>
            <span>Filter</span>
          </button>
        </div>
      </div>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <tr>
            <th className={classes.tableHeaderCell}>NIP</th>
            <th className={classes.tableHeaderCell}>Name</th>
            <th className={classes.tableHeaderCell}>Location</th>
            <th className={classes.tableHeaderCell}>Check In</th>
            <th className={classes.tableHeaderCell}>Check Out</th>
            <th className={classes.tableHeaderCell}>Total Shift</th>
            <th className={classes.tableHeaderCell}>Date</th>
            <th className={classes.tableHeaderCell}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.tableCell}>10012</td>
            <td className={classes.nameCell}>Abdul Rojak</td>
            <td className={classes.tableCell}>Buahbatu</td>
            <td className={classes.tableCell}>09:00 AM</td>
            <td className={classes.tableCell}>17:00 PM</td>
            <td className={classes.tableCell}>7 Hours</td>
            <td className={classes.tableCell}>10/22/2024</td>
            <td className={`${classes.tableCell} ${classes.statusCell}`}>
              Attend
            </td>
          </tr>
          <tr>
            <td className={classes.tableCell}>10003</td>
            <td className={classes.nameCell}>Lazuardi Fajar</td>
            <td className={classes.tableCell}>Rastek.ID</td>
            <td className={classes.tableCell}>09:00 AM</td>
            <td className={classes.tableCell}>17:00 PM</td>
            <td className={classes.tableCell}>7 Hours</td>
            <td className={classes.tableCell}>10/21/2024</td>
            <td className={`${classes.tableCell} ${classes.statusCell}`}>
              Attend
            </td>
          </tr>
          <tr>
            <td className={classes.tableCell}>10032</td>
            <td className={classes.nameCell}>Akmal Malika</td>
            <td className={classes.tableCell}>Rastek.ID</td>
            <td className={classes.tableCell}>08:50 AM</td>
            <td className={classes.tableCell}>17:00 PM</td>
            <td className={classes.tableCell}>7 Hours 10 Minutes</td>
            <td className={classes.tableCell}>10/08/2024</td>
            <td className={`${classes.tableCell} ${classes.statusCell}`}>
              Attend
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function Attendance() {
  const classes = useStyles();
  return (
    <Card>
      <div className={classes.cardTitle}>Employees Attendance</div>
      <CardBody className={classes.cardContent}>
        <AttendanceTable />
      </CardBody>
    </Card>
  );
}
