import { ArrowDropDown, CheckBox, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import Section from './Section';
import './mail.css'
import EmailRow from './EmailRow';
const MailList = () => {
    return (
        <div className='emailList'>

            <div className="emailList_settings">
            <div className="emailList_settingLeft">
                <CheckBox/>
                <IconButton>
                    <ArrowDropDown/>
                </IconButton>
                <IconButton>
                    <Redo/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>

            </div>

            <div className="emailList_settingright">
            <IconButton>
                    <ChevronLeft/>
                </IconButton>
                <IconButton>
                    <ChevronRight/>
                </IconButton>
                <IconButton>
                    <KeyboardHide/>
                </IconButton>
                <IconButton>
                    <Settings/>
                </IconButton>
            </div>
            </div>

            <div className="emailList_sections">
                <Section Icon={Inbox} color='red' title='primary' selected={true}></Section>
                <Section Icon={People} color='#1a73eb' title='Social' selected={true}></Section>
                <Section Icon={LocalOffer} color='green' title='Promotions' selected={true}></Section>
            </div>
            <div className="emailList_list">
                <EmailRow title='Twitch' subject='Hey Fellow Streamer!!!' description='This is test' time="10pm"/>
            </div>
        </div>
       
    );
};

export default MailList;