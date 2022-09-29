import React from 'react';

const Question2 = () => {
    return (
        <div className='question'>
            <h1>What are the differences between props and state ?</h1>
            <p>
                Props are used to pass data from one component to another.
                The state is a local data storage that is local to the component only and cannot be passed to other components.
                Props is Immutable (cannot be modified) whereas, state is Mutable ( can be modified).
                Props can be used with state and functional components.State can be used only with the state components/class component (Before 16.0).
                Props are read-only. State is both read and write.

            </p>

        </div>
    );
};

export default Question2;