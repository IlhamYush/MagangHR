import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from 'config/apiService';
import API_BASE_URL from 'config/apiConfig';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Button from 'components/CustomButtons/Button';
import CustomInput from 'components/CustomInput/CustomInput';

import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';

export default function AddBasicInfo() {
  const dumpnik = useSelector((state) => state.employee.dumpnik);

  const [employeeBasic, setEmployeeBasic] = useState({
    nik: dumpnik, // set nik sesuai dengan value yg sudah diambil
    statusKontrak: '',
    tmt_awal: '',
    tmt_akhir: '',
    kontrakKedua: '',
    salary: '',
    jabatanStrukturalId: '',
    jabatanFungsionalId: '',
  });

  // Mengatur ulang nilai NIK jika dumpnik berubah di Redux
  useEffect(() => {
    if (dumpnik) {
      setEmployeeBasic((prev) => ({ ...prev, nik: dumpnik }));
    }
  }, [dumpnik]);


  const formatDateForSubmit = (date) => {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${year}/${month}/${day}`;
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setEmployeeBasic((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Format tanggal sebelum mengirim ke server
    const formattedData = {
      ...employeeBasic,
      tmt_awal: formatDateForSubmit(employeeBasic.tmt_awal),
      tmt_akhir: formatDateForSubmit(employeeBasic.tmt_akhir),
      kontrakKedua: formatDateForSubmit(employeeBasic.kontrakKedua),
    };

    try {
      const response = await api.post(
        `${API_BASE_URL}/api/addRiwayatJabatan`,
        formattedData,
      );
      console.log('Data successfully submitted:', response.data);
      alert('Data submitted successfully!');
      setEmployeeBasic({
        nik: dumpnik,
        statusKontrak: '',
        tmt_awal: '',
        tmt_akhir: '',
        kontrakKedua: '',
        salary: '',
        jabatanStrukturalId: '',
        jabatanFungsionalId: '',
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
              <ImportContactsRoundedIcon
                style={{ marginRight: '10px', fontSize: '30px' }}
              />
              <h6 style={{ fontWeight: 'bold', fontSize: '15px' }}>
                Basic Information
              </h6>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              id="nik"
              inputProps={{
                placeholder: 'NIK',
                value: employeeBasic.nik,
                onChange: handleChange,
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              id="statusKontrak"
              inputProps={{
                placeholder: 'Status Kontrak',
                value: employeeBasic.statusKontrak,
                onChange: handleChange,
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              id="tmt_awal"
              inputProps={{
                placeholder: 'Mulai Kontrak',
                value: employeeBasic.tmt_awal,
                onChange: handleChange,
                type: 'date',
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              id="tmt_akhir"
              inputProps={{
                placeholder: 'Akhir Kontrak',
                value: employeeBasic.tmt_akhir,
                onChange: handleChange,
                type: 'date',
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              id="kontrakKedua"
              inputProps={{
                placeholder: 'Kontrak Kedua',
                value: employeeBasic.kontrakKedua,
                onChange: handleChange,
                type: 'date',
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              id="salary"
              inputProps={{
                placeholder: 'Salary',
                value: employeeBasic.salary,
                onChange: handleChange,
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              id="jabatanStrukturalId"
              inputProps={{
                placeholder: 'Jabatan 1',
                value: employeeBasic.jabatanStrukturalId,
                onChange: handleChange,
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              id="jabatanFungsionalId"
              inputProps={{
                placeholder: 'Jabatan 2',
                value: employeeBasic.jabatanFungsionalId,
                onChange: handleChange,
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Attachment"
              id="postal-code"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem> */}
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Button type="submit" color="primary">
              Save
            </Button>
          </GridItem>
        </GridContainer>
      </form>
    </div>
  );
}
