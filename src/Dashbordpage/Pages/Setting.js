import React from 'react'
import Sidenav from "../components/Sidenav"
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';


export default function Setting() {
  return (
    <>
    <Box sx={{ display: 'flex', }}>
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Setting</h1>
      </Box>
    </Box>
    
    </>
  )
}
