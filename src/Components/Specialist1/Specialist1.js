import React from 'react';

const Specialist1 = ({specialist1}) => {
    const {name, img} = specialist1
    return (
        <div className="col-lg-4 col-sm-6 col-12 all-specialist">
            <img className='speci-img' src={img} alt="" />
            <h3>{name}</h3>
            
        </div>
    );
};

export default Specialist1;