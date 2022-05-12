import React, { useState } from 'react';
import AppointmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';


const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
        <AppointmentBanner date={date} setDate={setDate}/>
        <AvailableAppoinment date={date}/>
        </div>
    );
};

export default Appoinment;