import { AccessTime, Add, Inbox, LabelImportant, NearMe, Star,Note, ExpandMore, Person, Duo, Phone } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
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

            <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={Star} title="Starred" number={54} selected={true}/>

            <SidebarOption Icon={AccessTime} title="Snoozed" number={71}/>
            <SidebarOption Icon={LabelImportant} title="important" number={12}/>
            <SidebarOption Icon={NearMe} title="Sent" number={21}/>
            <SidebarOption Icon={Note} title="Drafts" number={7}/>
            <SidebarOption Icon={ExpandMore} title="More" number={5}/>

            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                     <Person/>    
                    </IconButton>

                    <IconButton>
                        <Duo/>
                    </IconButton>

                    <IconButton>
                        <Phone/>
                    </IconButton>
                    
                </div>
            </div>
        </div>
    );
};

export default Sidebar;