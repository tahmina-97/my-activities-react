import { faFootball } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Sport from '../Sport/Sport';
import User from '../User/User';
import './Activity.css'

const Activity = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])

    return (
        <div className='activity-container'>
            <div className="sports-container">
                <div className='title'>
                    <FontAwesomeIcon className='logo-icon' icon={faFootball}></FontAwesomeIcon>
                    <h1>Diverse Sports Club</h1>
                </div>
                <h2>Select Today's Sports</h2>

                <div className='all-sports'>
                    {
                        sports.map(sport => <Sport
                            key={sport.id}
                            sport={sport}
                        ></Sport>)
                    }

                </div>


            </div>

            <div className="user-container">
                <User></User>


            </div>


        </div >
    );
};

export default Activity;