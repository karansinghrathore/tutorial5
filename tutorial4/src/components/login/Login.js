import { Container } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export function Login(){

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const processLogin = (e) => {
        e.preventDefault();
        const url = 'https://express-t4.onrender.com/api/login';
        axios.post(url, { "username":username, "password": password })
        .then((response) => {
            if(response.data.message === "Login success!")
            {
                navigateToUsersList();
            }
        },
        (error)=>{
            alert("Invalid credentials");
        })
    }
    
    const navigateToUsersList = ()=>{
        const url = 'https://express-t4.onrender.com/api/users';
        axios.get(url)
        .then((response) => {
            const users = response.data;
            navigate('/users', {state:{usersData:users}});
        },
        (error)=>{
            alert("Some error occurred");
        })
    }

    const handleUsernameChange = (e) =>{
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) =>{
        e.preventDefault();
        setPassword(e.target.value);
    }

    return(
        <Container component="main" maxWidth="xs">
        <Grid item xs={0} sm={4} md={4}></Grid>
        <Grid item xs={12} sm={4} md={4} sx={{
            mt: 20,
            p:5,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            border:'5px solid black'
          }}>
            <Typography component="h1" variant="h6" sx={{color:'black'}}>
                Login form
            </Typography>
            <form sx={{p:2, marginTop:50}} noValidate onSubmit={processLogin}>
                <TextField id="username"  required label="Username" value={username} 
                onChange={(e)=>handleUsernameChange(e)} fullWidth margin='normal'/>
                <TextField id="password" required label="Password" value={password} fullWidth margin='normal' type='password'
                    onChange={(e)=>handlePasswordChange(e)}/>
                <Button type="submit" variant='outlined' sx={{ marginTop:4}} fullWidth>Submit</Button>
            </form>
        </Grid>
        <Grid item xs={0} sm={4} md={4}></Grid>
      </Container>
      )
}

export default Login;

