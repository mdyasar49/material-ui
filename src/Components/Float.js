import Box from '@mui/material/Box';
export default  function Float () {
  return(
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Box sx={{ float: 'left', width: '50%', backgroundColor: 'lightblue', padding: 2 }}>
        Float Left
      </Box>
    </Box>
  );
}

