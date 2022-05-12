import React from 'react';
import treatment from '../../assets/images/treatment.png'
const Treatment = () => {
    return (
        <div className='mx-60 my-20'>
            <div class="card lg:card-side px-10 bg-base-100 shadow-xl">
                <figure>
                    <img className='' src={treatment} alt="Album" />
                </figure>
                <div class="card-body py-10">
                    <h2 class="card-title text-4xl text-accent">Exceptional Dental Care,<br/>on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop </p>
                    <div class="card-actions justify-start">
                    <button class="btn btn-primary uppercase text-white 
                        font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;