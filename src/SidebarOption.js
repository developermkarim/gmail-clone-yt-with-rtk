import React from 'react';
import './SidebarOption.css'
const SidebarOption = ({Icon,title,number,selected}) => {
    return (
        <div className={`sidebarOption ${selected && 'sidebar--active'}`}>
            <Icon/>
            <h4>{title}</h4>
            <p>{number}</p>
        </div>
    );
};

export default SidebarOption;