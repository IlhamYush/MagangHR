/*eslint-disable*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button';
import CustomInput from 'components/CustomInput/CustomInput';

import styles from 'assets/jss/material-dashboard-react/views/iconsStyle.js';

const useStyles = makeStyles({
  ...styles,
  customCardHeader: {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    padding: '10px 20px',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '17px',
    marginTop: '15px',
    marginLeft: '5px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '8px',
  },
  tableCell: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
  inputLabelOutside: {
    marginBottom: '2px',
    fontSize: '14px',
    color: '#333',
    fontWeight: 'bold',
    display: 'block',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '20px',
  },
  smallButton: {
    padding: '6px 16px',
    fontSize: '14px',
  },
});

export default function Icons() {
  const classes = useStyles();
  
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader className={classes.customCardHeader}>
            Add Leave
          </CardHeader>
          <CardBody>
            <GridContainer spacing={3}>
              <GridItem xs={12} sm={6} md={4}>
                <label className={classes.inputLabelOutside}>Tanggal Mulai</label>
                <CustomInput
                  id="start-date"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: 'date',
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <label className={classes.inputLabelOutside}>Tanggal Berakhir</label>
                <CustomInput
                  id="end-date"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: 'date',
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <label className={classes.inputLabelOutside}>Upload Bukti</label>
                <CustomInput
                  id="upload-proof"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: 'file',
                    accept: ".jpg, .png, .pdf",
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <label className={classes.inputLabelOutside}>Jenis Cuti</label>
                <CustomInput
                  id="leave-type"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    select: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <label className={classes.inputLabelOutside}>Divisi</label>
                <CustomInput
                  id="division"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    select: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <label className={classes.inputLabelOutside}>Alasan Cuti</label>
                <CustomInput
                  id="leave-reason"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 4,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <label className={classes.inputLabelOutside}>Direksi</label>
                <CustomInput
                  id="director"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    select: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <label className={classes.inputLabelOutside}>Manager</label>
                <CustomInput
                  id="manager"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    select: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <label className={classes.inputLabelOutside}>Project Manager</label>
                <CustomInput
                  id="project-manager"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    select: true,
                  }}
                />
              </GridItem>
            </GridContainer>

            {/* Button Container */}
            <div className={classes.buttonContainer}>
              <Button color="danger" className={classes.smallButton}>
                Reject
              </Button>
              <Button color="primary" className={classes.smallButton}>
                Submit
              </Button>
            </div>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader className={classes.customCardHeader}>
            Annual Leave
          </CardHeader>
          <CardBody>
            <table className={classes.table}>
              <thead>
                <tr>
                  <th className={classes.tableHeader}>Jenis Cuti</th>
                  <th className={classes.tableHeader}>Sisa Cuti</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={classes.tableCell}>Cuti Tahunan</td>
                  <td className={classes.tableCell}>12</td>
                </tr>
                <tr>
                  <td className={classes.tableCell}>Cuti Liburan</td>
                  <td className={classes.tableCell}>10</td>
                </tr>
                <tr>
                  <td className={classes.tableCell}>Work From Home</td>
                  <td className={classes.tableCell}>5</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
