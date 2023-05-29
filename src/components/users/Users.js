import { Container, Grid, Paper, Typography, TextField, Box, Button, IconButton, InputAdornment, } from '@mui/material'
import React from 'react'
import UseUsers from "./UseUsers";
import { DriveFileRenameOutline } from '@mui/icons-material';
import CircularProgress from "@mui/material/CircularProgress";


export default function Users() {
    // Custom Hook
    const {
        focusHandlerName,
        focusHandlerEmail,
        focusHandlerPhoneNum,
        textInputOne,
        textInputTwo,
        textInputThree,
        userName,
        email,
        phoneNo,
        setUserName,
        setEmail,
        setPhoneNo,
        addUserHandler,
        loading,
        flag,
        updateHandler,
    } = UseUsers();


    // loading
    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', height: '80vh' }}>
                <CircularProgress size={100} />
            </Box>
        );
    }


    return (
        <>
            <Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                        <Paper component={Box} mt={5} p={4}>
                            <Typography variant='h4' textAlign={"center"}>
                                Add User
                            </Typography>
                            <Box component="form" mt={2}>
                                <TextField fullWidth value={userName} onChange={(e) => { setUserName(e.target.value) }} type={"text"} placeholder='Enter UserName' margin='normal' label="Enter UserName" inputRef={textInputOne} InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton onClick={focusHandlerName}>
                                                <DriveFileRenameOutline />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                                <TextField fullWidth value={email} onChange={(e) => { setEmail(e.target.value) }} type={"email"} placeholder='Enter Email' margin='normal' label="Enter Email" inputRef={textInputTwo} InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton onClick={focusHandlerEmail}>
                                                <DriveFileRenameOutline />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                                <TextField fullWidth value={phoneNo} onChange={(e) => { setPhoneNo(e.target.value) }} type={"text"} placeholder='Enter Phone No.' margin='normal' label="Enter Phone No." inputRef={textInputThree} InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton onClick={focusHandlerPhoneNum}>
                                                <DriveFileRenameOutline />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                            </Box>
                            <Box mt={2}>
                                {
                                    flag ?
                                        <Button variant='contained' onClick={updateHandler}>
                                            Update User
                                        </Button> :
                                        <Button variant='contained' onClick={addUserHandler}>
                                            Add User
                                        </Button>
                                }
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
