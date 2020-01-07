import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, MenuItem, Menu, IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useSelector} from 'react-redux';
import {getMyCookie} from '../Utils/CookiesHelper';
import * as myProps from '../Utils/MyProperties';
//import {Link} from 'react-router-dom';
import {expireMyCookie} from '../Utils/CookiesHelper';
import {Redirect, Link} from 'react-router-dom';
import {logoutUser} from '../Actions/UserAuthenticationActions';


const useStyles = makeStyles(theme => ({
    appHeader: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    loginBtn: {
        height: 25,
        width: 60,
        fontColor: '#FFFFFF',
        border: 2,
        borderColor: '#FFFFFF'
    }
}));

function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLogoutInitiated, setLogoutInitiated] = React.useState(false);
    const open = Boolean(anchorEl);

    const myStoreData = useSelector((state) => state);
    
    const isUserLoggedIn = (myStoreData.isUserValid && (getMyCookie(myProps.TOKEN_NAME) !== ''));
    

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () =>{
        setAnchorEl(null);
    }

    const handleLogout = () => {
        logoutUser();
    };
    return (
        <div className={classes.appHeader}>
          {isLogoutInitiated && <Redirect to='/login' />}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Test React App
                    </Typography>
                    

                    {isUserLoggedIn ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={() => handleLogout}><Link to="/login">Logout</Link></MenuItem>
              </Menu>
            </div>
    ): (<div className='loginBtn'><Link to="/login">Sign in</Link></div>)}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
