import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

function HomeLayout() {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2} sx={{ marginTop: '20%' }}>
                <Grid item xs={12}>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
                        sx={{ flexGrow: 1, padding: 2, backgroundColor: 'secondary.main' }}
                    >
                        <Box sx={{ flexGrow: 1, padding: 2 }}>
                            <Paper elevation={10} sx={{ padding: 2, textAlign: 'center', color: 'GrayText' }}>
                                <Typography variant="h5" noWrap>
                                    Welcome to our screen
                                </Typography>
                            </Paper>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomeLayout;
