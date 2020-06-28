import React from 'react';
import {Button} from 'react-bootstrap';

function RakeshCounter(props) {
    return (
        <>
            <Button
                type='button'
                variant='danger'
                onClick={props.incrementRakeshCounter}
            >
                Increase Rakesh Counter
            </Button>
        </>
    )
}

export default RakeshCounter;
