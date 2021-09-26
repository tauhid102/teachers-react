import React from 'react';
import './Hire.css';

const Hire = (props) => {
    const { hire } = props;
    // // const {age}=dob;
    console.log(hire);
    let ageTotal = 0;
    for(const age of hire){
        ageTotal+=age.dob.age;
    }
    let names='';
    for(const name of hire){
        names += name.name.title +' ' +name.name.first +', ';
    }
    return (
        <div className='hire-card'>
            <h4>Hire Summary</h4>
            <p><span className='text'>Total Teacher Add:</span> {props.hire.length}</p>
            <p><span className='text'>Members Age Sum:</span> {ageTotal}</p>
            <p><span className='text'>Names:</span>{names}</p>
        </div>
    );
};

export default Hire;