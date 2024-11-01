import React, { useState } from 'react';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import CardFooter from 'components/Card/CardFooter';
import CardBody from 'components/Card/CardBody';
import api from 'config/apiService';
import API_BASE_URL from 'config/apiConfig';

export default function AddPersonalInfo() {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    no_ktp: '',
    npwp: '',
    kartuKeluarga: '',
    jenisKelamin: '',
    tempatLahir: '',
    tanggalLahir: '',
    agama: '',
    alamatLengkap: '',
    alamatDomisili: '',
    noTelp: '',
    kontakDarurat: '',
    noKontakDarurat: '',
    emailPribadi: '',
    pendidikanTerakhir: '',
    jurusan: '',
    namaUniversitas: '',
    namaIbuKandung: '',
    statusPernikahan: '',
    jumlahAnak: '',
    nomorRekening: '',
    bank: '',
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post(`${API_BASE_URL}/api/addEmployee`, employeeData);
      console.log('Data successfully submitted:', response.data);
      alert('Data submitted successfully!');
      // Optionally reset form after submission
      setEmployeeData({
        name: '',
        no_ktp: '',
        npwp: '',
        kartuKeluarga: '',
        jenisKelamin: '',
        tempatLahir: '',
        tanggalLahir: '',
        agama: '',
        alamatLengkap: '',
        alamatDomisili: '',
        noTelp: '',
        kontakDarurat: '',
        noKontakDarurat: '',
        emailPribadi: '',
        pendidikanTerakhir: '',
        jurusan: '',
        namaUniversitas: '',
        namaIbuKandung: '',
        statusPernikahan: '',
        jumlahAnak: '',
        nomorRekening: '',
        bank: '',
      });
    } catch (error) {
      console.error('Error submitting data:', error.response?.data || error.message);
      alert(`Error: ${error.response?.data?.message || error.message || 'Unknown Error'}`);
    }
  };

  return (
    <div style={{ marginTop: '-15px' }}>
      <form onSubmit={handleSubmit}>
        <CardBody>
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
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Name"
                id="name"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.name,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            {/* <GridItem xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Nomor Induk Pegawai"
                id="nomorInduk"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.nomorInduk,
                  onChange: handleChange,
                }}
              />
            </GridItem> */}

            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Nomor KTP"
                id="no_ktp"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.no_ktp,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Nomor NPWP"
                id="npwp"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.npwp,
                  onChange: handleChange,
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Kartu Keluarga"
                id="kartuKeluarga"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.kartuKeluarga,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Alamat Lengkap"
                id="alamatLengkap"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.alamatLengkap,
                  onChange: handleChange,
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Agama"
                id="agama"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.agama,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Tempat Lahir"
                id="tempatLahir"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.tempatLahir,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Jenis Kelamin"
                id="jenisKelamin"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.jenisKelamin,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Nama Ibu Kandung"
                id="namaIbuKandung"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.namaIbuKandung,
                  onChange: handleChange,
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Alamat Domisili"
                id="alamatDomisili"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.alamatDomisili,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Nomor Telepon"
                id="noTelp"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.noTelp,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Kontak Darurat"
                id="kontakDarurat"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.kontakDarurat,
                  onChange: handleChange,
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Nomor Kontak Darurat"
                id="noKontakDarurat"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.noKontakDarurat,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Email Pribadi"
                id="emailPribadi"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.emailPribadi,
                  onChange: handleChange,
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Pendidikan Terakhir"
                id="pendidikanTerakhir"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.pendidikanTerakhir,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Jurusan"
                id="jurusan"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.jurusan,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Nama Universitas"
                id="namaUniversitas"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.namaUniversitas,
                  onChange: handleChange,
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Status Pernikahan"
                id="statusPernikahan"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.statusPernikahan,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Jumlah Anak"
                id="jumlahAnak"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.jumlahAnak,
                  onChange: handleChange,
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Bank"
                id="bank"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.bank,
                  onChange: handleChange,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Nomor Rekening"
                id="nomorRekening"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.nomorRekening,
                  onChange: handleChange,
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Tanggal Lahir"
                id="tanggalLahir"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: employeeData.tanggalLahir,
                  onChange: handleChange,
                }}
              />
            </GridItem>
          </GridContainer>
        </CardBody>

        <CardFooter>
          <GridItem xs={12} sm={12} md={6} style={{ display: 'flex' }}>
            <Button round color="primary" type="submit">
              Save
            </Button>
          </GridItem>
        </CardFooter>
      </form>
    </div>
  );
}
