import React from 'react';
import Menu from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import './header.css';
import { NotificationAdd } from '@mui/icons-material';
import { Apps, ArrowDropDown,Search } from '@mui/icons-material';
const Header = () => {
    return (
        <div className='header'>
           <div className="header_left">
            <IconButton>
            <Menu/>
            </IconButton>
          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="" />
           </div>

           <div className="header_middle">
            <Search/>
            <input type="text" name="" placeholder='Search all' id="" />
            <ArrowDropDown/>
           </div>

           <div className="header_right">
            <IconButton>
                <Apps/>
            </IconButton>
            
            <IconButton>
                <NotificationAdd/>
            </IconButton>

            <IconButton>
            <Avatar/>
            </IconButton>
           
           </div>
        </div>
    );
};

export default Header;