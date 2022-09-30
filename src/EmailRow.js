import { Check, LabelImportantOutlined, StarBorder } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import './EmailRow.css'
const EmailRow = ({title,subject, id,description},time) => {
    return (
        <div className='emailRow'>
            <div className="emailRow_options">
                <Checkbox/>
                <IconButton>
                    <StarBorder/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </div>

            <div className="emailRow_title"></div>
            <div className="emailRow_message"></div>
            <div className="emailRow_description"></div>
        </div>
    );
};

export default EmailRow;