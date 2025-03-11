import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate, useLocation } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import logo from '../../assets/logo.jpg';

const pages = [
  { name: 'Home', icon: <HomeIcon fontSize="small" />, path: '/' },
  { name: 'About', icon: <InfoIcon fontSize="small" />, path: '/about' },
  { name: 'Services', icon: <BuildIcon fontSize="small" />, path: '/services' },
  { name: 'Pricing', icon: <PriceCheckIcon fontSize="small" />, path: '/pricing' }
];

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f1b000',
  color: '#fff',
  borderRadius: '5px',
  fontWeight: 'bold',
  textTransform: 'none',
  padding: '6px 12px',
  '&:hover': {
    backgroundColor: '#d99700',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    padding: '4px 6px',
  },
}));

function ResponsiveNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false); // State for popup
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    if (path) navigate(path);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ top: 0, zIndex: 1100, backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #ddd', px: 1 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            {/* Logo */}
            <Box component="img" src={logo} alt="DreamGains" sx={{ height: 60, cursor: 'pointer' }} onClick={() => navigate('/')} />

            {/* Navigation Links (Desktop) */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => navigate(page.path)}
                  sx={{
                    color: location.pathname === page.path ? '#f1b000' : '#333',
                    fontWeight: 'bold',
                    mx: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    position: 'relative',
                  }}
                >
                  {location.pathname === page.path && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        width: '100%',
                        height: 3,
                        backgroundColor: '#f1b000',
                        borderRadius: 2,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {page.icon} {page.name}
                </Button>
              ))}
            </Box>

            {/* Phone Number & Callback Button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon sx={{ color: '#333', fontSize: 20 }} />
              <Typography sx={{ color: '#333', fontWeight: 'bold', fontSize: { xs: '0.8rem', md: '1rem' } }}>
                +91 7981235137
              </Typography>
              <CustomButton variant="contained" onClick={handleOpenDialog}>
                Get Callback
              </CustomButton>
            </Box>

            {/* Mobile - Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon sx={{ color: '#333' }} />
              </IconButton>
              <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={() => handleCloseNavMenu(null)}>
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.path)} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {page.icon} <Typography>{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      {/* Dialog (Popup) for Get Callback */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Get Callback</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Please give a missed call to <strong>+91 7981235137</strong> and we will call you back shortly.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ResponsiveNavBar;
