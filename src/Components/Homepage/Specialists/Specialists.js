import React, { useEffect, useState } from 'react';
import Specialist from '../Spcialist/Specialist';

const Specialists = () => {
    const [specialists, setSpecialists] = useState([]);

    useEffect(() => {
        fetch('specialists.json')
        .then(res => res.json())
        .then(data => setSpecialists(data));
    }, [])
    return (
        <div id="specialist" className="container">
        <h2 className="text-primary mt-5">Our Specialist</h2>
        <div className="row">
            {
                specialists.map(specialist => <Specialist
                    key={specialist.key}
                    specialist={specialist}
                >

                </Specialist>)
            }
        </div>
    </div>
    );
};

export default Specialists;