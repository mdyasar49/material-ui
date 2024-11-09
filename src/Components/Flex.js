import Box from '@mui/material/Box';

export default  function Flex () {
      return(
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Box sx={{ flex: '1 1 50%', backgroundColor: 'lightblue', padding: 2 }}>Item 1</Box>
                  <Box sx={{ flex: '1 1 50%', backgroundColor: 'lightgreen', padding: 2 }}>Item 2</Box>
            </Box>
      );
}
