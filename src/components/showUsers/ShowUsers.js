import { Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import UseShowUsers from "./UseShowUsers";
import PersonIcon from '@mui/icons-material/Person';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CircularProgress from "@mui/material/CircularProgress";

export default function ShowUsers() {
  // Custom Hook
  const {
    allData,
    loading,
    deleteHandler,
    updateHandler,
  } = UseShowUsers();


  // loading
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems:'center', height:'80vh'}}>
        <CircularProgress size={100} />
      </Box>
    );
  }


  return (
    <>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Typography variant='h4' mt={3} textAlign={'center'}>
              Users
            </Typography>
            {
              allData?.data?.map((items,index) => {
                // console.log(items);
                return (
                  <Paper component={Box} mt={3} p={2} key={index}>
                    {/* card Header */}
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                      <Box display={'flex'} alignItems={'center'}>
                        <Box>
                          <IconButton>
                            <PersonIcon color='primary' />
                          </IconButton>
                        </Box>
                        <Box>
                          <Typography variant='h6' ml={2}>
                            {items?.userName}
                          </Typography>
                          <span style={{ margin: '16px' }}>
                            {items?.email}
                          </span>
                          <br />
                          <span style={{ margin: '16px' }}>
                            {items?.phoneNo}
                          </span>
                        </Box>
                      </Box>
                      <Box>
                        <p style={{ fontSize: '8px' }}>
                          {
                            items?.createdAt
                          }
                        </p>
                        <IconButton onClick={()=>{deleteHandler(items?._id)}}>
                          <DeleteOutlineIcon color='error' />
                        </IconButton>
                        <IconButton onClick={()=>{updateHandler(items)}}>
                          <DriveFileRenameOutlineIcon color='primary' />
                        </IconButton>
                      </Box>
                    </Box>
                  </Paper>
                )
              })
            }
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
