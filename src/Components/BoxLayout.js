import React from 'react';
import Box from '@mui/material/Box';
import { Paper, Typography } from '@mui/material';

const BoxLayout = () => {
  return (
    <Box sx={{ padding: 2, borderRadius: 1 }}>
        <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h5" noWrap>
                This is a Box Component
            </Typography>
            <Typography noWrap>
                Using Box component for layout and styling.
            </Typography>
        </Paper>
    </Box>
  );
};

export default BoxLayout;
