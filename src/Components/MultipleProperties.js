import { Button, Container, Divider, Grid, Stack, styled } from '@mui/material';
import Box from '@mui/material/Box';

const StyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  }));
export default function MultipleProperties() {
    return (
        <Box sx={{ padding: 2, overflow:'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 5 }}>
            <Stack divider={<Divider orientation='horizontal' sx={{ borderStyle: 'dashed', borderColor: 'black' }} />} spacing={2} sx={{border: '2px solid black', borderStyle: 'double'}}>
                <Box sx={{ flex: '1 1 50%', backgroundColor: 'lightblue', p: 2 }}>
                    Item 1
                </Box>
                <Box sx={{ flex: '1 1 50%', backgroundColor: 'lightgreen', p: 2 }}>
                    Item 2
                </Box>
                <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', mt: 2, borderStyle: 'groove' }}>
                    <Box sx={{ position: 'relative', top: 5, left: 20 }}>
                        Positioned Box
                    </Box>
                </Box>
                <Grid container spacing={2} sx={{ padding: 2, mt: 3 }}>
                    <Grid item xs={12}>
                        <Box sx={{ float: 'left', width: '50%', backgroundColor: 'lightblue', p: 2 }}>
                            Float Left
                        </Box>
                    </Grid>
                </Grid>
                <Container sx={{ borderStyle: 'dotted' }}>
                    <Box sx={{ display: 'inline-block', width: '50%', backgroundColor: 'lightgreen', p: 2 }}>
                        Inline Block
                    </Box>
                </Container>
                <Box sx={{ borderStyle: 'dashed', padding: 2, backgroundColor: 'primary.main' }}>
                    Content
                </Box>
                <Button sx={{ borderStyle: 'dotted', color: 'primary.main', padding: (theme) => theme.spacing(2) }}>
                    Click Me
                </Button> 
                <Box sx={{ borderStyle: 'solid', width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500, } }}>
                    Responsive Box
                </Box>
                <Box sx={(theme) => ({ borderStyle: 'ridge', backgroundColor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100' })}>
                    Dynamic Box
                </Box>
                <StyledButton sx={{ borderStyle: 'outset', margin: 2 }}>
                    Styled Button
                </StyledButton>
                <Box sx={{ borderStyle: 'revert-layer', color: 'error.main' }}>
                    Error Text
                </Box>
                <Button sx={{ borderStyle: 'unset', fontSize: '1.5rem' }}>
                    Large Button
                </Button>       
                <Box sx={{ bgcolor: 'primary.main', p: 2, borderRadius: 1, '&:hover': { borderStyle: 'groove',  bgcolor: 'secondary.main', } }}>
                    This is a styled box!
                </Box>  
            </Stack>
        </Box>
    );
}
