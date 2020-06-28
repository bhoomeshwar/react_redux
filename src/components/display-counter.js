import React from 'react';
import {Form} from 'react-bootstrap';

function DisplayCounter(props) {
    return (
        <>
            <Form.Group className='mt-3'>
                {
                    props.showReddyCounter &&
                    <Form.Row>
                        <h3> Reddy counter: {props.reddyCounter} </h3>
                    </Form.Row>
                }
                {
                    props.showRakeshCounter &&
                    <Form.Row>
                        <h3> Rakesh counter: {props.rakeshCounter} </h3>
                    </Form.Row>
                }
            </Form.Group>
        </>
    )
}

export default DisplayCounter;
