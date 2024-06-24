import * as React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';

const pages = ['sobre nós', 'tutorial', 'contato'];

export default function ExternalUserNav() {
    const router = useRouter();

    function register() {
        router.push('/register');
    }

    function login() {
        router.push('/login');
    }

    const goto = (page: string) => {
        let route = '';
        switch (page) {
            case 'sobre nós':
                route = '/aboutUs';
                break;
            case 'tutorial':
                route = '/tutorial';
                break;
            case 'contato':
                route = '/contact';
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
                        onClick={() => goto(page)}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
            <Button color="inherit" onClick={register}>Registrar</Button>
            <Button color="inherit" onClick={login}>Login</Button>
        </>
    );
}
