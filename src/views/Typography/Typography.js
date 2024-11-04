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
    paddingLeft: '30px', // Menambahkan padding kiri untuk menggeser judul ke kanan
    borderBottom: '1px solid #ddd', // Garis pembatas di bawah judul
  },
  cardContent: {
    paddingTop: '10px',
  },
  tableContainer: {
    width: '100%',
    overflowX: 'auto', // Untuk responsif jika kolom tabel lebih lebar dari card
  },
  tableControls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    marginBottom: '15px', // Menambahkan margin bawah untuk memberi jarak dengan tabel
  },
  searchInputContainer: {
    position: 'relative',
    width: '250px',
  },
  searchInput: {
    width: '100%',
    padding: '10px 10px 10px 35px', // Menambah padding kiri untuk ikon
    border: '1px solid #e0e0e0',
    borderRadius: '7px',
    outline: 'none',
    fontSize: '14px',
    color: '#555',
  },
  // searchIcon: {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '10px',
  //   transform: 'translateY(-50%)',
  //   fontSize: '16px',
  //   color: '#888',
  // },
  buttonGroup: {
    display: 'flex',
    gap: '10px', // Menambahkan jarak antar tombol
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
  paginationContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '15px', // Menambahkan jarak di atas pagination
    gap: '8px', // Jarak antar elemen pagination
  },
  paginationButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    color: '#007bff',
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
    textAlign: 'left', // Align text left for name column
    paddingLeft: '25px',
  },
  statusCell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    textAlign: 'center', // Menyelaraskan teks di tengah
  },
};

const useStyles = makeStyles(styles);

const Pagination = () => {
  const classes = useStyles();
  return (
    <div className={classes.paginationContainer}>
      <div className={classes.paginationButton}>&lt;</div>
      <span className={classes.paginationText}>Page</span>
      <div className={`${classes.paginationButton} ${classes.pageNumber}`}>
        1
      </div>
      <span className={classes.paginationText}>of 100</span>
      <div className={classes.paginationButton}>&gt;</div>
    </div>
  );
};

const Table = () => {
  const classes = useStyles();
  return (
    <div className={classes.tableContainer}>
      <div className={classes.tableControls}>
        <div className={classes.searchInputContainer}>
          {/* <i className={`fas fa-search ${classes.searchIcon}`}></i> */}
          <input
            type="text"
            placeholder="Search"
            className={classes.searchInput}
          />
        </div>
        <div className={classes.buttonGroup}>
          <button className={classes.button}>
            <i className={`far fa-calendar-alt ${classes.buttonIcon}`}></i>
            <span>Monthly Report</span>
          </button>
          <button className={classes.button}>
            {/* <i className={`fas fa-filter ${classes.buttonIcon}`}></i> */}
            <span>Filter</span>
          </button>
        </div>
      </div>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <tr>
            <th className={classes.tableHeaderCell}>NIP</th>
            <th className={classes.tableHeaderCell}>Name</th>
            <th className={classes.tableHeaderCell}>Jenis Cuti</th>
            <th className={classes.tableHeaderCell}>Divisi</th>
            <th className={classes.tableHeaderCell}>Tanggal Mulai</th>
            <th className={classes.tableHeaderCell}>Alasan</th>
            <th className={classes.tableHeaderCell}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.tableCell}>10012</td>
            <td className={classes.nameCell}>Abdul Rojak</td>
            <td className={classes.tableCell}>Cuti Tahunan</td>
            <td className={classes.tableCell}>Developer</td>
            <td className={classes.tableCell}>03/10/2024</td>
            <td className={classes.tableCell}>Liburan Keluarga</td>
            <td className={`${classes.tableCell} ${classes.statusCell}`}>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span>Pending</span>
            </td>
          </tr>
          <tr>
            <td className={classes.tableCell}>10003</td>
            <td className={classes.nameCell}>Lazuardi Fajar</td>
            <td className={classes.tableCell}>WFH</td>
            <td className={classes.tableCell}>IOT</td>
            <td className={classes.tableCell}>02/09/2024</td>
            <td className={classes.tableCell}>Merawat Orang Tua</td>
            <td className={`${classes.tableCell} ${classes.statusCell}`}>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span>Pending</span>
            </td>
          </tr>
          <tr>
            <td className={classes.tableCell}>10027</td>
            <td className={classes.nameCell}>Mamat Gunshop</td>
            <td className={classes.tableCell}>Cuti Liburan</td>
            <td className={classes.tableCell}>CV</td>
            <td className={classes.tableCell}>03/08/2024</td>
            <td className={classes.tableCell}>Refreshing</td>
            <td className={`${classes.tableCell} ${classes.statusCell}`}>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span>Pending</span>
            </td>
          </tr>
          {/* Baris kosong */}
          <tr>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
          </tr>
          <tr>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default function TypographyPage() {
  const classes = useStyles();
  return (
    <Card>
      <div className={classes.cardTitle}>Leave Permissions</div>
      <CardBody className={classes.cardContent}>
        <Table />
      </CardBody>
    </Card>
  );
}
