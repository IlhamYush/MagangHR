import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import api from 'config/apiService';
// import API_BASE_URL from 'config/apiConfig';

import Button from 'components/CustomButtons/Button';
import Typography from '@material-ui/core/Typography';
import CustomInput from 'components/CustomInput/CustomInput';

import logo1 from 'assets/img/hrlogo.png';
import styles from 'assets/jss/material-dashboard-react/views/loginStyle';
import SuccessModal from 'components/ModalCard/successModal.js';

const useStyles = makeStyles(styles);

function Login() {
  const classes = useStyles();
  const history = useHistory();

  const [posts, setPosts] = useState([]);

  const [isUsername, setisUsername] = useState('');
  const [isPassword, setisPassword] = useState('');
  const [globalError, setGlobalError] = useState(''); // State untuk pesan kesalahan global

  const [openModal, setOpenModal] = useState(false);
  const [showError, setShowError] = useState(false); // State untuk kontrol tampilan banner kesalahan

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleRedirectToDashboard = () => {
    setOpenModal(false);
    history.push('/admin/dashboard'); // Redirect to dashboard
  };

  const handleSubmitGeneric = async (
    endpoint,
    method,
    bodyData,
    successMessage,
  ) => {
    try {
      const response = await api({
        method: method,
        url: `/${endpoint}`,
        data: bodyData,
      });

      console.log(successMessage, response.data);
      setPosts((posts) => [response.data, ...posts]);

      if (endpoint === 'auth/login') {
        const token = response.data?.token || response.data?.data?.token;

        if (token) {
          localStorage.setItem('authToken', token);
          console.log('Token: ', token);
        } else {
          console.warn('Token Tidak Ditemukan');
        }

        setisUsername('');
        setisPassword('');
        setShowError(false);
        setGlobalError('');
        setOpenModal(true);
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.error['Error Description'] ||
          'Invalid username or password'
        : 'Invalid username or password';

      setGlobalError(errorMessage); // Tampilkan pesan kesalahan
      setShowError(true);

      // Sembunyikan pesan kesalahan setelah beberapa detik (opsional)
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!isUsername || !isPassword) {
      setGlobalError('Please fill in the form'); // Set pesan kesalahan jika form kosong
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    handleSubmitGeneric(
      'auth/login',
      'post',
      { username: isUsername, password: isPassword },
      'Berhasil login!',
    );
  };

  return (
    <div className={classes.root}>
      {showError && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '98%',
            backgroundColor: '#f44336',
            color: '#fff',
            padding: '15px',
            textAlign: 'center',
            fontWeight: 'bold',
            zIndex: 1000,
            borderBottom: '2px solid #e53935',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            animation: 'fadeIn 0.5s, fadeOut 0.5s 4.5s',
          }}
        >
          {globalError}
        </div>
      )}
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <img
            src={logo1}
            alt="Illustration"
            className={classes.illustration}
          />
        </div>
        <div className={classes.rightContainer}>
          <Typography className={classes.header}>
            Login to Your Account
          </Typography>
          <form onSubmit={handleSubmitLogin} style={{ width: '100%' }}>
            <div className={classes.inputContainer}>
              <p className={classes.label}>Password</p>
              <CustomInput
                id="username"
                inputProps={{
                  placeholder: 'Username',
                  value: isUsername,
                  onChange: (e) => setisUsername(e.target.value),
                }}
                formControlProps={{
                  fullWidth: true,
                }}
                className={classes.input}
              />
            </div>
            <div className={classes.inputContainer}>
              <p className={classes.label}>Password</p>
              <CustomInput
                id="password"
                inputProps={{
                  type: 'password',
                  placeholder: 'Password',
                  value: isPassword,
                  onChange: (e) => setisPassword(e.target.value),
                }}
                formControlProps={{
                  fullWidth: true,
                }}
                className={classes.input}
              />
            </div>
            <div className={classes.options}>
              <Typography
                className={classes.forgotPassword}
                onClick={() => history.push('/forgot-password')}
              >
                Forgot Password?
              </Typography>
            </div>
            <Button
              type="submit"
              fullWidth
              round
              className={classes.signInButton}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>

      {/* Use the SuccessModal Component */}
      <SuccessModal
        open={openModal}
        onClose={handleCloseModal}
        onAnimationComplete={handleRedirectToDashboard}
        message="Login Success"
        // title="Login Berhasil!"
      />
    </div>
  );
}

export default Login;
