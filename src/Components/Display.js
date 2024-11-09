import Box from '@mui/material/Box';
export default  function Display () {
  return(
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'inline-block', width: '50%', backgroundColor: 'lightgreen', padding: 2 }}>
        Inline Block
      </Box>
    </Box>  
  );
}

