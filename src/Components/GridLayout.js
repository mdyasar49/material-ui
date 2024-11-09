import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function GridLayout() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="h5" noWrap>
                        Header
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="body1" noWrap>
                        Left
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="body3" noWrap>
                        Main
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="body1" noWrap>
                        Right
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="h5" noWrap>
                        Footer
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default GridLayout;
