import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Button, CssBaseline, TextField } from '@material-ui/core/';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function LoginPage(props) {
  const [state, setState] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/users/`
      );
      await setState([...result.data]);
    }
    fetchData();
  }, []);

  const onEmailChange = e => {
    setEmail(e.target.value);
  }

  const onPasswordChange = async e => {
    e.preventDefault();
    await setPassword(e.target.value);

  }

  const onSubmit = async event => {
    event.preventDefault();

    if (email) {
      let filtered = await state.filter(function (item) {
        return item.email === email && item.username === password;
      });
      { filtered.length ? props.doLogin() : alert('Please enter a registered email ...') }
    } else {
      alert('Please enter name');
    }

  }

  return (<>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onEmailChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onPasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Log In
          </Button>

        </form>
      </div>

    </Container>
  </>

  );
}