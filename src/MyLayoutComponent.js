import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Divider, Drawer, IconButton, Link, List, ListItem, Toolbar, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MyLayoutComponent = ({ routeNames }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, borderRadius: 1  }}>
        <AppBar position='static'>
            <Toolbar  variant="dense">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>           
                <Link component={RouterLink} to="/" sx={{ color: 'inherit', textDecoration: 'none', justifyContent: 'center',  }}>
                    <Typography variant="h6" color="inherit" component="div">
                        <Box sx={{ textAlign: 'center', m: 1 }}>{routeNames[location.pathname] || 'Home'}</Box>
                    </Typography>
                </Link>     
            </Toolbar>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer} variant="persistent">
                <Box>
                    <IconButton onClick={() => setDrawerOpen(false)}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>                    
                </Box>
                <List onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                    <ListItem>
                        <Button 
                            color='primary'
                            variant='text'
                            sx={{ cursor: 'pointer' }}
                            onClick={() => {navigate('/Grid');}}>
                            Grid
                        </Button>
                    </ListItem>
                    <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />
                    <ListItem>
                        <Button
                            color='primary'
                            variant='text'
                            sx={{ cursor: 'pointer' }}
                            onClick={() => {navigate('/Stack');}}>
                            Stack
                        </Button>
                    </ListItem>
                    <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />
                    <ListItem>
                        <Button 
                            color='primary'
                            variant='text'
                            sx={{ cursor: 'pointer' }} 
                            onClick={() => {navigate('/Box');}}>
                            Box
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button 
                            color='primary'
                            variant='text'
                            sx={{ cursor: 'pointer' }}
                            onClick={() => {navigate('/Flex');}}>
                            Flex
                        </Button>
                    </ListItem>
                    <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />
                    <ListItem>
                        <Button 
                            color='primary'
                            variant='text'
                            sx={{ cursor: 'pointer' }}
                            onClick={() => {navigate('/Position');}}>
                            Position
                        </Button>
                    </ListItem>
                    <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />
                    <ListItem>
                        <Button 
                            color='primary'
                            variant='text'
                            sx={{ cursor: 'pointer' }}
                            onClick={() => {navigate('/Float');}}>
                            Float
                        </Button>
                    </ListItem>
                    <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />
                    <ListItem>
                        <Button 
                            color='primary'
                            variant='text'
                            sx={{ cursor: 'pointer' }}
                            onClick={() => {navigate('/Display');}}>
                            Display
                        </Button>
                    </ListItem>
                    <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />
                    <ListItem>
                        <Button 
                            color='primary'
                            variant='text'
                            sx={{ cursor: 'pointer' }}
                            onClick={() => {navigate('/MultipleProperties');}}>
                            MultipleProperties
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    </Box>
  );
};

export default MyLayoutComponent;
