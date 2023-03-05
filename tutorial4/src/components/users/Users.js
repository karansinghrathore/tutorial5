import { Box, Button, Container, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export function Users()
{
    const navigate = useNavigate();
    const location = useLocation();
    const [allUsers, setAllUsers] = useState([]);
    const [displayUsers, setDisplayUsers] = useState([]);
    const [filterKeyword, setFilterKeyword] = useState("");

    useEffect(()=>{
        if(location?.state?.usersData)
        {
            setAllUsers(location?.state?.usersData);
            handleFilter(filterKeyword);
        }
        else
        {
            navigate('/login');
        }
    });

    const handleFilter = (keyword) =>{
        let arr= allUsers;
        if(keyword && keyword.trim().length > 0)
        {
            console.log("applying filter");
            arr = allUsers.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase()));
        }  
        setDisplayUsers(arr);
        setFilterKeyword(keyword);
    }

    const navigateToUserProfile = (user) =>{
        navigate('/userprofile', {state : {userId:user._id}});
    }   

    return(<>
        <Container component="main" maxWidth="xs" sx={{mt:20}}>
            <Box sx={{mb:5}}>
                <Grid item xs={12} sm={4} md={3}>
                    <TextField id="nameFilter" label="Search" value={filterKeyword} 
                                                onChange={(e)=>{handleFilter(e.target.value)}} fullWidth/>
                </Grid>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Users</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {displayUsers.map((row) => (
                        <TableRow key={row.index}>
                            <TableCell>
                                <Stack direction="row" spacing={5}>
                                    <img src={row.picture} alt="imageprofile" width="32" height="32"/>
                                    <div>{row.name}</div>
                                </Stack>
                            </TableCell>
                            <TableCell>
                                    <Button onClick={()=>{navigateToUserProfile(row)}}>View Profile</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
           
        </Container>
    </>);
}

export default Users;