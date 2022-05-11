import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import flouride from '../../assets/images/fluoride.png';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'A 1994 issue of "Before & After" magazine traces "Lorem ipsum ..." to a jumbled Latin version of a passage from de Finibus Bonorum et Malorum, a',
            img: flouride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'A 1994 issue of "Before & After" magazine traces "Lorem ipsum ..." to a jumbled Latin version of a passage from de Finibus Bonorum et Malorum, a',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'A 1994 issue of "Before & After" magazine traces "Lorem ipsum ..." to a jumbled Latin version of a passage from de Finibus Bonorum et Malorum, a',
            img: whitening
        },
    ];
    return (
        <div className='my-20 mx-5 lg:mx-20 '>
            <div className="text-center ">
                <h3 className='text-primary text-xl font-bold '>OUR SERVICES</h3>
                <h2 className=' text-accent text-3xl font-bold'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
            {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;