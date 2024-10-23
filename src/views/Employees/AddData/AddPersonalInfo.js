import React from 'react';

import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';

export default function AddPersonalInfo() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <div
            style={{
              marginTop: '5px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <PersonOutlineRoundedIcon
              style={{ marginRight: '8px', fontSize: '30px' }}
            />
            <h6 style={{ fontWeight: 'bold', fontSize: '15px' }}>
              Personal Information
            </h6>
          </div>
        </GridItem>
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
    </div>
  );
}
