import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "assets/img/LOGIN.jpg"; // Sesuaikan path dengan lokasi file gambar Anda
import API_BASE_URL from "config/apiConfig";
import api from "config/apiService";
import CustomInput from "components/CustomInput/CustomInput";

// Hook untuk styling
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    maxWidth: 400,
    padding: theme.spacing(3),
    boxShadow: theme.shadows[5],
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Set transparansi card
    borderRadius: theme.spacing(3),
  },
  form: {
    width: "100%", // Full width form
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1.5), // Tambahkan padding untuk menambah tinggi tombol
  },
  forgotPassword: {
    marginTop: theme.spacing(2),
  },
}));

function Login() {
    const classes = useStyles();
    const history = useHistory(); // Menggunakan useHistory untuk navigasi

    const handleForgotPassword = () => {
      alert("Redirecting to Forgot Password page...");
    };

    const [posts, setPosts] = useState([]);
    const [isUsername, setisUsername] = useState('');
    const [isPassword, setisPassword] = useState('');

    const handleSubmitGeneric = async (
      endpoint,
      method,
      bodyData,
      successMessage,
    ) => {
      try {
        console.log(`Sending ${method} request to ${API_BASE_URL}/${endpoint}`);
        console.log('Request body:', bodyData);

        const response = await api({
          method: method, // Menentukan metode HTTP: 'get', 'post', 'put', 'delete', dll.
          url: `/${endpoint}`, // Menentukan endpoint API
          data: bodyData, // Data yang akan dikirim (hanya untuk POST, PUT, PATCH)
        });

        console.log(successMessage, response.data);
        alert(successMessage);
        setPosts((posts) => [response.data, ...posts]);

        if (endpoint === 'auth/login') {
          setisUsername('');
          setisPassword('');
          history.push('/admin/dashboard')
        } 
      } catch (error) {
        if (error.response) {
          // Jika server merespon dengan error
          const errorMessage = error.response.data.error["Error Description"];
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
        alert('Isi form anjing!');
        return;
      }
      handleSubmitGeneric(
        'auth/login', // Endpoint API
        'post', // Metode HTTP yang digunakan
        {username: isUsername, password: isPassword }, // Data yang dikirim
        'Berhasil login!',
      );
    };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography component="h1" variant="h5" align="center">
            Login
          </Typography>
          <form className={classes.form} onSubmit={handleSubmitLogin}>
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
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
          </form>
          <Button
            onClick={handleForgotPassword}
            fullWidth
            color="secondary"
            className={classes.forgotPassword}
          >
            Forgot Password?
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;