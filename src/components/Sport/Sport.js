import React from 'react';
import './Sport.css'

const Sport = (props) => {
    const { sport, handleAddToList } = props;
    const { name, info, img, time, age } = sport;

    return (
        <div className='sport'>
            <img src={img} alt="" />

            <div className="sport-info">
                <p className='sport-name'>{name}</p>
                <p className='sport-desc'>{info.length > 140 ? info.slice(0, 140) + '...' : info}</p>
                <p className='age-limit'>For Age: {age}</p>
                <p className='sport-time'>Time: {time} </p>
            </div>
            <button onClick={() => { handleAddToList(time) }} className='btn-add-list'>
                <p>Add To List</p>
            </button>

        </div>
    );
};

export default Sport;