import React from 'react';
import { Stack, Paper, Typography, Divider } from '@mui/material';

function StackLayout() {
  return (
    <>
        <Stack spacing={2} direction="column" useFlexGap  flexWrap="wrap" divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}>
            <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h5" noWrap>
                    Stack Item 1
                </Typography>
                <Typography noWrap>
                    This is a sample item inside a Stack component for column.
                </Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h5" noWrap>
                    Stack Item 2
                </Typography>
                <Typography noWrap>
                    This is another sample item inside a Stack component for column.
                </Typography>
            </Paper>
        </Stack>
        <Stack spacing={2} direction="row" sx={{mt:3}} divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}>
            <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h5" noWrap>
                    Stack Item 1
                </Typography>
                <Typography noWrap>
                    This is a sample item inside a Stack component for row.
                </Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h5" noWrap>
                    Stack Item 2
                </Typography>
                <Typography noWrap>
                    This is another sample item inside a Stack component for row.
                </Typography>
            </Paper>
        </Stack>
    </>
  );
}

export default StackLayout;
