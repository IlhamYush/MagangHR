import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';

import { DatePicker } from '@mui/lab';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

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
    position: 'relative',
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
  dropdown: {
    position: 'absolute',
    top: '120%',
    right: '0',
    left: 'auto',
    width: '120px', // Adjusted width to match the content
    border: '1px solid #e0e0e0',
    borderRadius: '7px',
    backgroundColor: 'white',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
    zIndex: 1,
    padding: '4px 0', // Reduced padding for a compact fit
  },
  dropdownItem: {
    padding: '8px 16px', // Consistent padding with the button
    cursor: 'pointer',
    fontSize: '14px',
    color: '#333', // Matching color with button text
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
    fontWeight: 'bold',
  },
  attendStatus: {
    color: 'lightgreen', // Light green color for "Attend"
  },
  absentStatus: {
    color: 'red', // Red color for "Absent"
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
    zIndex: 1000,
  },
  datePickerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
};

const useStyles = makeStyles(styles);

const AttendanceTable = () => {
  const classes = useStyles();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filter, setFilter] = useState(null); // Track selected filter
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const applyFilter = (status) => {
    setFilter(status);
    setDropdownVisible(false); // Close the dropdown after selection
  };

  const handleDateSelect = () => {
    setDatePickerOpen(true); // Open date picker dialog
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selected date
    setDatePickerOpen(false); // Close the dialog after selection
  };

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
          <button className={classes.button} onClick={handleDateSelect}>
            <i className="far fa-calendar-alt"></i>
            <span style={{ marginLeft: '8px' }}>Date Select</span>
          </button>
          <button className={classes.button} onClick={toggleDropdown}>
            <span>Filter</span>
          </button>
          {dropdownVisible && (
            <div className={classes.dropdown}>
              <div
                className={classes.dropdownItem}
                onClick={() => applyFilter('Attend')}
              >
                Attend
              </div>
              <div
                className={classes.dropdownItem}
                onClick={() => applyFilter('Absent')}
              >
                Absent
              </div>
            </div>
          )}
        </div>
      </div>

       {/* Date Picker Dialog */}
      <Dialog open={datePickerOpen} onClose={() => setDatePickerOpen(false)} className={classes.overlay}>
        <DialogContent className={classes.datePickerContainer}>
          <DatePicker
            label="Select Date"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </DialogContent>
      </Dialog>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <tr>
            <th className={classes.tableHeaderCell}>Date</th>
            <th className={classes.tableHeaderCell}>NIP</th>
            <th className={classes.tableHeaderCell}>Name</th>
            <th className={classes.tableHeaderCell}>Location</th>
            <th className={classes.tableHeaderCell}>Check In</th>
            <th className={classes.tableHeaderCell}>Check Out</th>
            <th className={classes.tableHeaderCell}>Total Shift</th>
            <th className={classes.tableHeaderCell}>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row filtering based on selected filter */}
          <tr style={{ display: filter === 'Absent' ? 'none' : 'table-row' }}>
            <td className={classes.tableCell}>13/11/2024</td>
            <td className={classes.tableCell}>10012</td>
            <td className={classes.nameCell}>Abdul Rojak</td>
            <td className={classes.tableCell}>Rastek.ID</td>
            <td className={classes.tableCell}>09:00 AM</td>
            <td className={classes.tableCell}>17:00 PM</td>
            <td className={classes.tableCell}>7 Hours</td>
            <td className={`${classes.tableCell} ${classes.statusCell} ${classes.attendStatus}`}>
              <CheckCircleRoundedIcon/>
            </td>
          </tr>
          <tr style={{ display: filter === 'Attend' ? 'none' : 'table-row' }}>
            <td className={classes.tableCell}>13/11/2024</td>
            <td className={classes.tableCell}>10018</td>
            <td className={classes.nameCell}>Toddy Wicaksono</td>
            <td className={classes.tableCell}>-</td>
            <td className={classes.tableCell}>-</td>
            <td className={classes.tableCell}>-</td>
            <td className={classes.tableCell}>-</td>
            <td className={`${classes.tableCell} ${classes.statusCell} ${classes.absentStatus}`}>
              <CancelRoundedIcon/>
            </td>
          </tr>
          <tr style={{ display: filter === 'Absent' ? 'none' : 'table-row' }}>
            <td className={classes.tableCell}>13/11/2024</td>
            <td className={classes.tableCell}>10023</td>
            <td className={classes.nameCell}>Tiddy Wijayanto</td>
            <td className={classes.tableCell}>Rastek.ID</td>
            <td className={classes.tableCell}>09:00 AM</td>
            <td className={classes.tableCell}>17:00 PM</td>
            <td className={classes.tableCell}>7 Hours</td>
            <td className={`${classes.tableCell} ${classes.statusCell} ${classes.attendStatus}`}>
              <CheckCircleRoundedIcon/>
            </td>
          </tr>
          <tr style={{ display: filter === 'Absent' ? 'none' : 'table-row' }}>
            <td className={classes.tableCell}>13/11/2024</td>
            <td className={classes.tableCell}>10031</td>
            <td className={classes.nameCell}>Arief Nukimo</td>
            <td className={classes.tableCell}>Buahbatu</td>
            <td className={classes.tableCell}>09:00 AM</td>
            <td className={classes.tableCell}>17:00 PM</td>
            <td className={classes.tableCell}>7 Hours</td>
            <td className={`${classes.tableCell} ${classes.statusCell} ${classes.attendStatus}`}>
              <CheckCircleRoundedIcon/>
            </td>
          </tr>
          <tr style={{ display: filter === 'Attend' ? 'none' : 'table-row' }}>
            <td className={classes.tableCell}>13/11/2024</td>
            <td className={classes.tableCell}>10010</td>
            <td className={classes.nameCell}>Muhammad Rafi</td>
            <td className={classes.tableCell}>-</td>
            <td className={classes.tableCell}>-</td>
            <td className={classes.tableCell}>-</td>
            <td className={classes.tableCell}>-</td>
            <td className={`${classes.tableCell} ${classes.statusCell} ${classes.absentStatus}`}>
              <CancelRoundedIcon/>
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
