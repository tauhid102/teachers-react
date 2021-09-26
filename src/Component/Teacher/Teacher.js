import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandPaper} from '@fortawesome/free-solid-svg-icons';

import './Teacher.css'

const Teacher = (props) => {
    const { name, cell, email, picture, gender, dob } = props.teacher;
    const { title, first, last } = name;
    const { age } = dob;
    const icon = <FontAwesomeIcon icon={faHandPaper} />

    return (
        <div className='teacher'>
            <div className='teacher-card'>
                <img src={picture.large} alt="" />
                <h5>Name: {title} {first} {last}</h5>
                <h6>Cell: {cell}</h6>
                <h6>Email: {email}</h6>
                <h6>Gender: {gender}</h6>
                <h6>Age: {age}</h6>
                <button onClick={()=>props.handleHire(props.teacher)}>{icon} Hire</button>

            </div>
        </div>
    );
};

export default Teacher;