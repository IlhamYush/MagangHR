import backgroundImage from 'assets/img/GradientBlue.jpg';

const loginStyle = {
  root: {
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    width: '80%',
    maxWidth: '900px',
    backgroundColor: 'rgba(255, 255, 255)',
    borderRadius: '25px',
    overflow: 'hidden',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  },
  leftContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '25px',
  },
  illustration: {
    width: '100%',
    maxWidth: '300px',
  },
  rightContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#319ADD',
    padding: '2rem',
    color: 'white',
    borderRadius: '25px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: 'white',
  },
  inputContainer: {
    marginTop: '16px',
    width: '100%',
  },
  input: {
    marginBottom: '16px',
    '& input': {
      // borderRadius: '25px',
      padding: '12px',
      border: 'none',
    },
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  forgotPassword: {
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: 'black',
    },
  },
  signUp: {
    marginTop: '1rem',
    fontSize: '12px',
    color: 'white',
  },
  signInButton: {
    backgroundColor: 'white',
    color: '#319ADD',
    fontWeight: 'bold',
    borderRadius: '25px',
    marginTop: '1.5rem',
    padding: '12px 24px',
  },
  label: {
    fontSize: '14px',
    color: 'white',
    display: 'block',
  },
};

export default loginStyle;
