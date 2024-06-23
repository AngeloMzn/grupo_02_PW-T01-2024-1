'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoggedUserNav from './LoggedUserNav';
import ExternalUserNav from './ExternalUserNav';
import { Content } from 'next/font/google';

export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {

  return (
    <AppBar sx={{
      backgroundColor: '#348E91',
    }} position="static">
      <div className='mx-2'>
        <Toolbar className='w-100' disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              width: '50px',
              height: '50px',
              paddingTop: '10px',
              paddingLeft: '2px',
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
          {isLoggedIn ? <LoggedUserNav /> : <ExternalUserNav />}
        </Toolbar>
      </div>
    </AppBar>
  );
}
