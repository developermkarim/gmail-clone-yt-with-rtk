import { Add, Inbox, Start } from '@mui/icons-material';
import { Button } from '@mui/material';
import { fontSize } from '@mui/system';
import React from 'react';
import './sidebar.css'
import SidebarOption from './SidebarOption';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <Button startIcon=
            {
            <Add fontSize="large"/>}
            className='sidebar_compose'
            >
             Compose
            </Button>
            <SidebarOption Icon={Inbox} title="inbox" number={54}/>
        </div>
    );
};

export default Sidebar;