import React, { useEffect, useState } from 'react';
import Teacher from '../Component/Teacher/Teacher';
import Hire from '../Component/Hire/Hire';
import './Teachers.css';


const Teachers = () => {
    const [teachers, setTeacher] = useState([]);
    const [hire, setHire] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=21')
            .then(res => res.json())
            .then(data => setTeacher(data.results))
    }, [])

    const handleHire=(teacher)=>{
        const newHire = [...hire,teacher];
        setHire(newHire);
    }
    return (
        <div className='teachers-container container'>
            <div className='left-side'>

                {
                    teachers.map(teacher => <Teacher
                        key={teacher.cell}
                        teacher={teacher}
                        handleHire={handleHire}
                    ></Teacher>)
                }

            </div>
            <div className='hire-teacher'>
                <Hire hire={hire}></Hire>
            </div>
        </div>
    );
};

export default Teachers;