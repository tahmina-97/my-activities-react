import React from 'react';
import './Questions.css'
import Question1 from '../Question1/Question1';
import Question2 from '../Question2/Question2';
import Question3 from '../Question3/Question3';

const Questions = () => {
    return (
        <div>
            <h1 className='ques-title'>Frequently Asked Questions</h1>
            <div className='questions-container'>
                <Question1></Question1>
                <Question2></Question2>
                <Question3></Question3>
            </div>

        </div>

    );
};

export default Questions;