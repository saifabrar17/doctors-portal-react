import React from 'react';

const Service = ({ service }) => {
    return (
        <div>
            <div className="card w-100 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-accent">{service.name}</h2>
                    <p>{service.description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;