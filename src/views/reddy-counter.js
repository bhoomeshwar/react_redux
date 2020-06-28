import React from 'react';
import {Form, Button} from 'react-bootstrap';

function ReddyCounter(props) {
    return (
        <Form.Row>
            <Form.Group>
                <Form.Check
                    id='reddy-counter-checkbox'
                    type='checkbox'
                    label='show Reddy Counter'
                    onClick={props.toggleReddyCounter}
                />
            </Form.Group>
            {
                props.showReddyCounter &&
                <Form.Group className='col-md-4'>
                    <Button
                        type='button'
                        variant='primary'
                        onClick={props.incrementReddyCounter}
                    >
                        Increase Reddy Counter
                    </Button>
                </Form.Group>
            }
            {
                props.showReddyCounter &&
                <Form.Row>
                    <Button
                        type='button'
                        variant='warning'
                        onClick={props.resetReddyCounter}
                    >
                        Reset Reddy Counter
                    </Button>
                </Form.Row>
            }
        </Form.Row>
    );
}

export default ReddyCounter;
