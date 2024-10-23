import React from 'react';

//Styles
// import { makeStyles } from "@material-ui/core/styles";

//Core Components
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';

// const styles = {
//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0",
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//   },
//   Button: {
//     color: "#319ADD",
//   },
// };

// const useStyles = makeStyles(styles);

export default function PersonalInfo() {
  // const classes = useStyles();

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
                Personal Information
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

        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Name"
              id="NamePersonal"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Nomor Induk Pegawai"
              id="NomorInduk"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Nomor KTP"
              id="NomorKTP"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Nomor NPWP"
              id="NomorNPWP"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Kartu Keluarga"
              id="KartuKeluarga"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Alamat Lengkap"
              id="AlamatLengkap"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Agama"
              id="Agama"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Tempat Lahir"
              id="TempatLahir"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Jenis Kelamin"
              id="JenisKelamin"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Nama Ibu Kandung"
              id="NamaIbu"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Alamat Domisili"
              id="AlamatDomisili"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Nomor Telepon"
              id="NoTelp"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Kontak Darurat"
              id="KontakDarurat"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Nomor Kontak Darurat"
              id="NoKontakDarurat"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Email Pribadi"
              id="EmailPribadi"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Pendidikan Terakhir"
              id="Pendidikan"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Jurusan"
              id="Major"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Nama Universitas"
              id="Universitas"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Status Pernikahan"
              id="Pernikahan"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Jumlah Anak"
              id="JumlahAnak"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Bank"
              id="NamaBank"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Nomor Rekening"
              id="NoRekening"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>
      </CardBody>

      <CardFooter>
        <Button color="primary" round>
          Update Information
        </Button>
      </CardFooter>
    </div>
  );
}
