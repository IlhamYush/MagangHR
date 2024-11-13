import React from 'react';

//Styles

//Core Components
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';

export default function PersonalInfo() {
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
              inputProps={{
                disabled: true,
                value: 'Nicholas Davi Erlangga Susilo',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: '1234567890',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: '3201234567890001',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: '12.345.678.9-012.345',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: '3201234567890002',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: 'Jl. Sudirman No, 50, Jakarta Selatan',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: 'Islam',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: 'Bandung',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: 'Laki-laki',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: 'Eti Fatmawati',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                value: 'Jl. Sudirman No. 50, Jakarta Selatan',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: '081234567890',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                value: 'Muhammad Mubasir',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                value: '081234567891',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                value: 'Herjuna@gmail.com',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: 'S1 Teknik Informatika',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: 'Teknik Informatika',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                disabled: true,
                value: 'Telkom University',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                value: 'Belum Menikah',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                value: '0',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                value: 'BCA',
                style: {
                  color: 'black',
                },
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
              inputProps={{
                value: '1234567890',
                style: {
                  color: 'black',
                },
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
