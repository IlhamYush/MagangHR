import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from 'assets/img/GradientBlue.jpg';
import API_BASE_URL from 'config/apiConfig';
import api from 'config/apiService';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    maxWidth: 360,
    padding: theme.spacing(4),
    boxShadow: theme.shadows[5],
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '15px',
  },
  header: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
    '& input': {
      borderRadius: '8px',
      padding: '12px',
      border: '1px solid #ccc',
    },
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(2),
  },
  icon: {
    fontSize: '50px', // Sesuaikan ukuran ikon
    color: '#333',
    display: 'block',
    margin: '0 auto 40px auto', // Memusatkan ikon dan menambahkan margin bawah
  },
}));

function Login() {
  const classes = useStyles();
  const history = useHistory(); // Menggunakan useHistory untuk navigasi

  const handleForgotPassword = () => {
    alert('Redirecting to Forgot Password page...');
  };

  const [posts, setPosts] = useState([]);
  const [isUsername, setisUsername] = useState('');
  const [isPassword, setisPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmitGeneric = async (
    endpoint,
    method,
    bodyData,
    successMessage,
  ) => {
    try {
      console.log(`Sending ${method} request to ${API_BASE_URL}/${endpoint}`);
      // console.log('Request body:', bodyData);

      const response = await api({
        method: method, // Menentukan metode HTTP: 'get', 'post', 'put', 'delete', dll.
        url: `/${endpoint}`, // Menentukan endpoint API
        data: bodyData, // Data yang akan dikirim (hanya untuk POST, PUT, PATCH)
      });

      console.log(successMessage, response.data);
      alert(successMessage);
      setPosts((posts) => [response.data, ...posts]);

      if (endpoint === 'auth/login') {
        // const token = response.data.token;
        const token = response.data?.token || response.data?.data?.token;

        if (token) {
          localStorage.setItem('authToken', token);
          console.log('Token: ', token);
        } else {
          console.warn('Token Tidak Ditemukan');
        }

        setisUsername('');
        setisPassword('');
        history.push('/admin/dashboard');
      }
    } catch (error) {
      if (error.response) {
        // Jika server merespon dengan error
        const errorMessage = error.response.data.error['Error Description'];
        console.error('Error:', errorMessage);
        alert(`${errorMessage}`);
      } else if (error.request) {
        // Jika tidak ada respon dari server
        console.error('No response received:', error.request);
        alert('No response from the server.');
      } else {
        // Kesalahan saat membuat request
        console.error('Error setting up request:', error.message);
        alert(`Error: ${error.message || 'Unknown Error'}`);
      }
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!isUsername || !isPassword) {
      alert('Isi form');
      return;
    }
    handleSubmitGeneric(
      'auth/login', // Endpoint API
      'post', // Metode HTTP yang digunakan
      { username: isUsername, password: isPassword }, // Data yang dikirim
      'Berhasil login!',
    );
  };


  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <form onSubmit={handleSubmitLogin}>
          <CardBody>
            <ExitToAppRoundedIcon className={classes.icon} />
            <div className={classes.header}>Login</div>
            <CustomInput
              id="username"
              labelText="Username"
              inputProps={{
                value: isUsername,
                onChange: (e) => setisUsername(e.target.value),
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
            <CustomInput
              id="password"
              labelText="Password"
              inputProps={{
                value: isPassword,
                onChange: (e) => setisPassword(e.target.value),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </CardBody>
          <CardFooter className={classes.socialButtons}>
            <Button type="submit" fullWidth color="primary" round>
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Login;
