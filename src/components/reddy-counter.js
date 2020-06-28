import React from 'react';
import {Button} from 'react-bootstrap';

function ReddyCounter(props) {
    return (
        <>
            <Button
                type='button'
                variant='primary'
                onClick={props.incrementReddyCounter}
            >
                Increase Reddy Counter
            </Button>
        </>
    )
}

export default ReddyCounter;
