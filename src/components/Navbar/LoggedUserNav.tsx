'use client';
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const settings = ['Profile', 'Logout'];
const pages = ['calendário', 'eventos'];

export default function LoggedUserNav() {
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  async function deslogar() {
      await signOut({
          redirect: false,
      });
  }

  const actionSetting = (setting: string) => () => {
    let route = '';
    switch (setting) {
        case 'Profile':
            route = '/profile';
            break;
        case 'Logout':
            deslogar();
            route = '/';
            break;
        default:
            route = '/';
            break;
    }
    router.push(route);
  };

  const actionPage = (page: string) => () => {
    let route = '';
    switch (page) {
        case 'calendário':
            route = '/calendar';
            break;
        case 'eventos':
            route = '/events';
            break;
        default:
            route = '/';
            break;
    }
    router.push(route);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={actionPage(page)} 
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={actionSetting(setting)}>{/* Corrigido para passar o parâmetro `setting` */}
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}
