import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './Navbar.css';


const drawerWidth = '100%';
const navItems = ['Home', 'Skills', 'Experience', 'Projects', 'Contact'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'white', fontWeight: 'bold', borderBottom: '#ffffff', fontSize: 32 }}>
        Ritu Raj
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <ListItem sx={{flexDirection: 'column', padding: 0}}>
            <ListItemButton sx={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center', color: 'white' }}>
              <Link to='/'>
                <ListItemText primary={navItems[0]} />
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center', color: 'white' }}>
              <Link to='/skills'>
                <ListItemText primary={navItems[1]} />
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center', color: 'white' }}>
              <Link to='/experience'>
                <ListItemText primary={navItems[2]} />
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center', color: 'white' }}>
              <Link to='/projects'>
                <ListItemText primary={navItems[3]} />
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center', color: 'white' }}>
              <Link to='/contact'>
                <ListItemText primary={navItems[4]} />
              </Link>
            </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', textAlign: 'start', fontWeight: 900, fontSize: 28, } }}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
            <Link to='/'>
                <Button sx={{ color: '#fff', fontWeight: 600, textTransform: 'capitalize' }} id="">
                    {navItems[0]}
                </Button>
            </Link>
            <Link to='/skills'>
                <Button sx={{ color: '#fff', fontWeight: 600, textTransform: 'capitalize' }} id="">
                    {navItems[1]}
                </Button>
            </Link>
            <Link to='/experience'>
                <Button sx={{ color: '#fff', fontWeight: 600, textTransform: 'capitalize' }} id="">
                    {navItems[2]}
                </Button>
            </Link>
            <Link to='/projects'>
                <Button sx={{ color: '#fff', fontWeight: 600, textTransform: 'capitalize' }} id="">
                    {navItems[3]}
                </Button>
            </Link>
            <Link to='/contact'>
                <Button sx={{ color: '#fff', fontWeight: 600, textTransform: 'capitalize' }} id="">
                    {navItems[4]}
                </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;