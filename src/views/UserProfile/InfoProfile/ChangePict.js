import React, { useState } from 'react';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import Button from 'components/CustomButtons/Button';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import { makeStyles } from '@material-ui/core';

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
  uploadContainer: {
    border: '2px dashed #d3d3d3',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f8f9fa',
  },
  uploadText: {
    margin: '10px 0',
    fontSize: '14px',
    color: '#6c757d',
  },
  uploadIcon: {
    fontSize: '50px',
    color: '#6c757d',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  logoStyle: {
    // Ubah ukuran sesuai kebutuhan
    marginBottom: '10px',
    color: '#6c757d',
    fontSize: '70px',
  },
};

const useStyles = makeStyles(styles);

export default function ChangePict() {
  const [selectedFile, setSelectedFile] = useState(null);
  const classes = useStyles();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.file[0]);
  };

  const handleFileSubmit = () => {
    if (selectedFile) {
      console.log('File yang diupload', selectedFile);
    }
  };

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
                Change Picture
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

        <div
          className={classes.uploadContainer}
          onClick={() => document.getElementById('upload-input').click()}
          style={{ marginTop: '50px' }}
        >
          <GridContainer justify="center">
            <GridItem
              xs={12}
              sm={12}
              md={8}
              style={{ textAlign: 'center', marginBottom: '20px' }}
            >
              <input
                type="file"
                id="upload-input"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </GridItem>
            <div>
              <ImageRoundedIcon className={classes.logoStyle} />
              <i className={'fas fa-cloud-upload-alt ${classes.uploadIcon}'} />
              <p className={classes.uploadText}>
                Browse Photo
                <br />
                Supported format JPEG, PNG. Max photo size 5MB.
              </p>
            </div>
          </GridContainer>
        </div>
      </CardBody>

      <CardFooter>
        <div className={classes.buttonContainer}>
          <Button color="primary" round onClick={handleFileSubmit}>
            Save
          </Button>
        </div>
      </CardFooter>
    </div>
  );
}
