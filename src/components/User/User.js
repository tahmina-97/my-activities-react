import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.css'
import Break from '../Break/Break';



const User = (props) => {
    const { time } = props;
    const [breakTime, setBreakTime] = useState(0);



    const handleBreak = (selectedBreak) => {
        setBreakTime(selectedBreak);
    }



    //    Toast notification function
    const notifyToast = () => {
        toast('Congratulations, You are done!!')
    }



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
                <div className="break-container">
                    <Break handleBreak={handleBreak} break="10"></Break>
                    <Break handleBreak={handleBreak} break="20"></Break>
                    <Break handleBreak={handleBreak} break="30"></Break>
                    <Break handleBreak={handleBreak} break="40"></Break>
                    <Break handleBreak={handleBreak} break="50"></Break>
                </div>
            </div>

            <div>
                <h2 className='titles'>Sports Details</h2>

                <div className='sports-details'>
                    <h2 className=''>Sports Time</h2>
                    <p className='time'> {time} </p>
                </div>

                <div className='sports-details'>
                    <h2 className=''>Break Time</h2>
                    <p className='time'> {breakTime} </p>
                </div>
                <div>
                    <button onClick={notifyToast} className='btn-activity-complete'>
                        <p>Activity Completed</p>
                    </button>
                    <ToastContainer />

                </div>




            </div>

        </div>
    );
};



export default User;