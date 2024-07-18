import React, { useContext} from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { styled } from '@mui/material/styles'

const StyledAppBar = styled(AppBar)(( { theme } ) => ({
  // if the theme is dark, the background color will be black, otherwise white
  backgroundColor: theme.palette.mode === 'dark' ? 'black' : '#C4C5C5',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  paddingBottom: '0.5rem',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  borderRadius: 0,
  margin: '0 5px',
  '&:hover': {
    color: theme.palette.mode === 'dark' ? '#CEC8C8' : '#444242',
    borderBottom: '2px solid ',
  },
  
}));

const Navbar = () => {
  const toggleTheme = useContext(ThemeContext)

  return (
    <StyledAppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <StyledLink to='/'><CatchingPokemon /></StyledLink>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>HIDDENGEMS</Typography>
        <Stack direction='row' spacing={2}>
          <StyledLink to='/home' ><StyledButton color='inherit'>Home</StyledButton></StyledLink>
          <StyledLink to='/about' ><StyledButton color='inherit'>About</StyledButton></StyledLink>
          <StyledLink to='/contact-us' ><StyledButton color='inherit'>Contact Us</StyledButton></StyledLink>
          <StyledButton color='inherit' onClick={toggleTheme}>Toggle Theme</StyledButton>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Navbar