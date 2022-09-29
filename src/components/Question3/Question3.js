import React from 'react';

const Question3 = () => {
    return (
        <div className='question'>
            <h1>What are the use cases of useEffect other than data load?</h1>
            <ul>
                <li>Running once on mount: fetch API data</li>
                <li> Running on state change: validating input field</li>
                <li>Running on state change: live filtering</li>
                <li>Running on state change: trigger animation on new array value</li>
                <li>Running on props change: update paragraph list on fetched API data update</li>
                <li>Running on props change: updating fetched API data to get BTC updated price</li>
            </ul>

        </div>
    );
};

export default Question3;