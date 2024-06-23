'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LoggedUserNav from './LoggedUserNav';
import ExternalUserNav from './ExternalUserNav';
import { Content } from 'next/font/google';
import ContentNavbar from './ContentNavbar';

const pages = ['Products', 'Pricing', 'Blog'];

export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {

  return (
    <AppBar position="static">
      <Container sx={{
        backgroundColor: '#348E91',
      }} maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 0,
              mr: 2,
              width: '50px',
              height: '30px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              borderRadius: '5%',
              color: 'inherit',
              textDecoration: 'none',
              backgroundColor: 'black',
            }}
          >
            PKT
          </Typography>
          <ContentNavbar />
          {isLoggedIn ? <LoggedUserNav /> : <ExternalUserNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
