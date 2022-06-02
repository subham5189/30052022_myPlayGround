import React from 'react'
import { Box, Grid, TextField, Typography, FormControlLabel, Checkbox, Button, Alert, InputLabel, MenuItem, Select,
        FormControl, FormLabel, RadioGroup, Radio, FormGroup, Stack, Paper, Table, TableContainer,
        TableBody, TableCell, TableHead, TableRow, Avatar, } from "@mui/material";
function Resumeuploader() {
  const rows = [
    {"Name":'Subham Das', "email":"sd@gmail.com", "DOB": "1206","State": "odisha","Gender":"M","Location":"BBS","Avatar":"aaa"},
    {"Name":'Subham Das', "email":"sd@gmail.com", "DOB": "1206","State": "odisha","Gender":"M","Location":"BBS","Avatar":"bbb"},
    {"Name":'Subham Das', "email":"sd@gmail.com", "DOB": "1206","State": "odisha","Gender":"M","Location":"BBS","Avatar":"ccc"},
    {"Name":'Subham Das', "email":"sd@gmail.com", "DOB": "1206","State": "odisha","Gender":"M","Location":"BBS","Avatar":"ddd"},
    {"Name":'Subham Das', "email":"sd@gmail.com", "DOB": "1206","State": "odisha","Gender":"M","Location":"BBS","Avatar":"eee"},
  ];
  return (
    <div>
      <Box display={'flex'} justi justifyContent={'center'} sx={{backgroundColor:'#0288d1',  p:'6px'}} margin='6px' borderRadius={'15px'}>
        <Typography  color='white'>
        Resume Uploader
        </Typography>
      </Box>
      <Grid container={true} justifyContent='center'>
        <Grid item xs={6}>
<Box component='form' noValidate id='resume-form'>
<TextField id='name' name='name' margin='normal' label='name' aria-required fullWidth sx={{borderRadius:'15px'}}>

</TextField>
</Box>
        </Grid>

        <Grid item xs={6}>
        <Box display={'flex'} 
        justifyContent={'center'} 
        sx={{backgroundColor:'DodgerBlue',  p:'6px'}}
         margin='6px' borderRadius={'15px'}>Table</Box>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="resume table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">location</TableCell>
            <TableCell align="right">Avatar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="right">
                Name
              </TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right"><Avatar sx={{textAlign:"right"}} src='#'></Avatar></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
      </Grid>
    </div>
  )
}

export default Resumeuploader