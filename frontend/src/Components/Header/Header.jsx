import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../../Redux/UserSlices';
import logo from "../../../images/smart-school-manager-logo.png";
import { headerLinks, LOGO_STYLES, TOOLBAR_STYLES } from '../../Constants/HeaderConstants';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(clearUser());
        navigate('/signin');
    };

    return (
        <AppBar position="static">
            <Toolbar sx={TOOLBAR_STYLES}>
                <img src={logo} onClick={() => navigate('/')} alt="Main logo" style={LOGO_STYLES} />
                <Box>
                    {user ? (
                        <>
                            {headerLinks(handleLogout).map((link) => (
                                <Button key={link.label} color="inherit" component={Link} to={link.path}
                                    onClick={link.onClick ? link.onClick : null}
                                >
                                    {link.label}
                                </Button>
                            ))}
                        </>
                    ) : (
                        <Button color="inherit" component={Link} to="/signin">Sign in</Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
