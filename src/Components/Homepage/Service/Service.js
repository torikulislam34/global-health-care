import React from 'react';
import './Survice.css';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { id, name, chief, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <h5>Chief: {chief}</h5>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Deatiles {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;