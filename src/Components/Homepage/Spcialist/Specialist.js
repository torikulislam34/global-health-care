import React from 'react';
import './Specialist.css';

const Specialist = ({specialist}) => {
    const {name, img} = specialist;
    return (
        <div className="col-lg-4 col-sm-6 col-12 all-specialist">
            <img className='speci-img' src={img} alt="" />
            <h3>{name}</h3>
            
        </div>
    );
};

export default Specialist;