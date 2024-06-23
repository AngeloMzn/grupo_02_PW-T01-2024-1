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
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
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