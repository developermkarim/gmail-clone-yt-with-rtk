import React from 'react';
import './section.css'
const Section = ({Icon,color,title,selected}) => {
    return (
        <div className={`section ${selected && 'Section--selected'}`}
        style={{
          borderBottom:`3px solid ${color}`,
          color:`${selected && color}`
        }}
        >
            <Icon/>
            <h4>{title}</h4>

        </div>
    );
};

export default Section;