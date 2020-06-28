import React from 'react';
import {Form, Button} from 'react-bootstrap';

function DisplayCounter(props) {
    return (
        <>
            {
                (props.showRakeshCounter || props.showReddyCounter) &&
                <Form.Group className='col-md-4'>
                    <Form.Row>
                        <Button
                            type='button'
                            variant='success'
                            onClick={props.resetCounters}
                        >
                            Reset Counters
                        </Button>
                    </Form.Row>
                    < Form.Row>
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
                    </Form.Row>
                </Form.Group>
            }
        </>
    )
}

export default DisplayCounter;
