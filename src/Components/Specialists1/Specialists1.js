import React, { useEffect, useState } from 'react';
import Specialist1 from '../Specialist1/Specialist1';

const Specialists1 = () => {
    const [specialists, setSpecialists] = useState([]);

    useEffect(() => {
        fetch('specialistsymbol.json')
        .then(res => res.json())
        .then(data => setSpecialists(data));
    }, [])
    return (
        <div id="specialist" className="container">
        <h2 className="text-primary mt-5">Our Specialist</h2>
        <div className="row">
            {
                specialists.map(specialist1 => <Specialist1
                    key={specialist1.key}
                    specialist1={specialist1}
                >

                </Specialist1>)
            }
        </div>
    </div>
    );
};

export default Specialists1;