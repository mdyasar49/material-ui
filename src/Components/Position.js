import Box from '@mui/material/Box';

export default  function Position () {
  return(
      <Box sx={{ padding: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box sx={{ position: 'relative', top: 10, left: 20 }}>Positioned Box</Box>
      </Box>
  );
}

