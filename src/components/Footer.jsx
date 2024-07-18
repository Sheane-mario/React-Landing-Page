import React, { useContext } from 'react'
import { Box, Typography, Container, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { styled } from '@mui/material/styles'

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'black' : '#C4C5C5',
  width: '100%',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  padding: '6rem 0',
  // position: 'fixed',
  bottom: 0,
}));
const Footer = () => {
  return (
    <StyledBox>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © 2024 by Earth's Hidden Gems. Proudly created with MUI. 
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <IconButton color="inherit" component={Link} href="https://facebook.com">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" component={Link} href="https://twitter.com">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" component={Link} href="https://instagram.com">
            <Instagram />
          </IconButton>
        </Box>
      </Container>
    </StyledBox>
  );
}

export default Footer;
