
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './User.css'

const User = () => {
    return (
        <div className='user'>
            <div className='user-profile'>
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" alt="" />
                <div>
                    <p className='user-name'>Amaya Rahman</p>
                    <p className='user-address'>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                        <span>Toronto, Canada</span></p>
                </div>
            </div>

            <div className='user-data'>
                <div>
                    <h2>56 kg</h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>5.4</h2>
                    <p>height</p>
                </div>
                <div>
                    <h2>25 yrs</h2>
                    <p>Age</p>
                </div>
            </div>

            <div className="break">
                <h2 className='titles'>Add a Break</h2>
                <ul className="break-container">
                    <li><span>10</span>m</li>
                    <li><span>20</span>m</li>
                    <li><span>30</span>m</li>
                    <li><span>40</span>m</li>
                    <li><span>50</span>m</li>
                </ul>
            </div>

            <div>
                <h2 className='titles'>Sports Details</h2>
                <div className='sports-details'>
                    <h2 className=''>Sports Time</h2>
                    <p className='time'> 200</p>
                </div>
                <div className='sports-details'>
                    <h2 className=''>Break Time</h2>
                    <p className='time'> 200</p>
                </div>

                <button className='btn-activity-complete'>
                    <p>Activity Completed</p>
                </button>


            </div>

        </div>
    );
};

export default User;