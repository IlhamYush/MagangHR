import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDumpNik } from '../EmployeeStore';

import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import GridContainer from 'components/Grid/GridContainer';
import CustomInput from 'components/CustomInput/CustomInput';

import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';

import api from 'config/apiService';
import API_BASE_URL from 'config/apiConfig';

export default function AddPersonalInfo() {
  const dispatch = useDispatch();
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
    joinDate: '',
    status: '',
  });

  const formatDateForSubmit = (date) => {
    // if (!date) return '';
    // const [year, month, day] = date.split('-');
    // return `${year}/${month}/${day}`;
    return date;
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Format tanggal sebelum mengirim ke server
    const formattedData = {
      ...employeeData,
      tanggalLahir: formatDateForSubmit(employeeData.tanggalLahir),
      joinDate: formatDateForSubmit(employeeData.joinDate),
    };

    try {
      const response = await api.post(
        `${API_BASE_URL}/api/addEmployee`,
        // formattedData,
        formattedData,
      );

      if (response.data && response.data.data && response.data.data.nik) {
        const nik = response.data.data.nik; // Mengakses NIK dengan benar
        dispatch(setDumpNik(nik)); // Menyimpan NIK ke dalam redux
        console.log('NIK berhasil diambil:', nik);
      } else {
        console.log('NIK tidak ditemukan dalam response.');
        console.log('Isi response:', response);
      }

      console.log('Data successfully submitted:', response.data);
      alert('Data submitted successfully!');
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
        joinDate: '',
        status: '',
      });
    } catch (error) {
      console.error(
        'Error submitting data:',
        error.response?.data || error.message,
      );
      alert(
        `Error: ${error.response?.data?.message || error.message || 'Unknown Error'}`,
      );
    }
  };

  return (
    <div style={{ marginTop: '-15px' }}>
      <form onSubmit={handleSubmit}>
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
            <p>Name</p>
            <CustomInput
              id="name"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Name',
                value: employeeData.name,
                onChange: handleChange,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <p>Nomor KTP</p>
            <CustomInput
              id="no_ktp"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Nomor KTP',
                value: employeeData.no_ktp,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <p>Nomor NPWP</p>
            <CustomInput
              id="npwp"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Nomor NPWP',
                value: employeeData.npwp,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
          <p>Nomor Kartu Keluarga</p>
            <CustomInput
              id="kartuKeluarga"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Kartu Keluarga',
                value: employeeData.kartuKeluarga,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
          <p>Alamat</p>
            <CustomInput
              id="alamatLengkap"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Alamat Lengkap',
                value: employeeData.alamatLengkap,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
          <p>Agama</p>
            <CustomInput
              id="agama"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Agama',
                value: employeeData.agama,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
          <p>Tempat Lahir</p>
            <CustomInput
              id="tempatLahir"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Tempat Lahir',
                value: employeeData.tempatLahir,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
          <p>Jenis Kelamin</p>
            <CustomInput
              id="jenisKelamin"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Jenis Kelamin',
                value: employeeData.jenisKelamin,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
          <p>Nama Ibu</p>
            <CustomInput
              id="namaIbuKandung"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Nama Ibu Kandung',
                value: employeeData.namaIbuKandung,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
          <p>Domisili</p>
            <CustomInput
              id="alamatDomisili"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Alamat Domisili',
                value: employeeData.alamatDomisili,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
          <p>Nomor Telepon</p>
            <CustomInput
              id="noTelp"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Nomor Telepon',
                value: employeeData.noTelp,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
          <p>Nama Kontak Darurat</p>
            <CustomInput
              id="kontakDarurat"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Kontak Darurat',
                value: employeeData.kontakDarurat,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
          <p>Nomor Kontak Darurat</p>
            <CustomInput
              id="noKontakDarurat"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Nomor Kontak Darurat',
                value: employeeData.noKontakDarurat,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
          <p>Email</p>
            <CustomInput
              id="emailPribadi"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Email Pribadi',
                value: employeeData.emailPribadi,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
          <p>Pendidikan Terakhir</p>
            <CustomInput
              id="pendidikanTerakhir"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Pendidikan Terakhir',
                value: employeeData.pendidikanTerakhir,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
          <p>Jurusan</p>
            <CustomInput
              id="jurusan"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Jurusan',
                value: employeeData.jurusan,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
          <p>Nama Universitas</p>
            <CustomInput
              id="namaUniversitas"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Nama Universitas',
                value: employeeData.namaUniversitas,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
          <p>Status Pernikahan</p>
            <CustomInput
              id="statusPernikahan"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Status Pernikahan',
                value: employeeData.statusPernikahan,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
          <p>Jumlah Anak</p>
            <CustomInput
              id="jumlahAnak"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Jumlah Anak',
                value: employeeData.jumlahAnak,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
          <p>Bank</p>
            <CustomInput
              id="bank"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Bank',
                value: employeeData.bank,
                onChange: handleChange,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <p>Nomor Rekening</p>
            <CustomInput
              id="nomorRekening"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Nomor Rekening',
                value: employeeData.nomorRekening,
                onChange: handleChange,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
          <p>Tanggal Lahir</p>
            <CustomInput
              id="tanggalLahir"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Tanggal Lahir',
                value: employeeData.tanggalLahir,
                onChange: handleChange,
                type: 'date', // Menambahkan tipe tanggal
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
          <p>Tanggal Masuk Kerja</p>
            <CustomInput
              id="joinDate"
              inputProps={{
                placeholder: 'Tanggal Masuk',
                value: employeeData.joinDate,
                onChange: handleChange,
                type: 'date', // Menambahkan tipe tanggal
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
          <p>Status Kerja</p>
            <CustomInput
              id="status"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                placeholder: 'Status',
                value: employeeData.status,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" type="submit">
              Save
            </Button>
          </GridItem>
        </GridContainer>
      </form>
    </div>
  );
}
