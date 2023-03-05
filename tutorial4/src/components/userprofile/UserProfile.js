import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export function UserProfile()
{
    const[user, setUser] = useState({});
    const location = useLocation();
    const url = 'https://express-t4.onrender.com/api/users/';

    useEffect(()=>{
        if(location?.state?.userId)
        {
            const link = url + location.state.userId;
            axios.get(link).then((response) => {
               const user = response.data;
               setUser(user);
            },
            (error)=>{
                setUser({});
            })
        }
    },[]);

    return (
            <Container component="main" maxWidth="xs" sx={{mt:20, p:5,border:'5px solid black', backgroundColor:'#ffcccc', alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'}}>
                        <Typography component="h1" variant="h4" sx={{color:'black'}}>
                                {user.name}
                        </Typography>
                        <Box sx={{mt:5}}>
                            <Grid container>
                                <Grid item xs={3}>Age</Grid>
                                <Grid item xs={9}>{user.age}</Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={3}>Gender</Grid>
                                <Grid item xs={9}>{user.gender}</Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={3}>Eye color</Grid>
                                <Grid item xs={9}>{user.eyeColor}</Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={3}>Company</Grid>
                                <Grid item xs={9}>{user.company}</Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={3}>Email</Grid>
                                <Grid item xs={9}>{user.email}</Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={3}>Phone</Grid>
                                <Grid item xs={9}>{user.phone}</Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={3}>Address</Grid>
                                <Grid item xs={9}>{user.address}</Grid>
                            </Grid>
                        </Box>
                       
            </Container>
    );
}

export default UserProfile;