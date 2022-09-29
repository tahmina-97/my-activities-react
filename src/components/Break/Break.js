import React from 'react';
import './Break.css'

const Break = (props) => {
    const { handleBreak } = props;

    return (

        <li onClick={() => handleBreak(props.break)} >{props.break}m</li>

    );
};

export default Break;