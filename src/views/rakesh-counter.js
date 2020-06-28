import React from 'react';
import {Form, Button} from 'react-bootstrap';

function RakeshCounter(props) {
    return (
        <Form.Row>
            <Form.Group>
                <Form.Check
                    id='rakesh-counter-checkbox'
                    type='checkbox'
                    label='Show Rakesh Counter'
                    onClick={props.toggleRakeshCounter}
                />
            </Form.Group>
            {
                props.showRakeshCounter &&
                <Form.Group className='col-md-4'>
                    <Button
                        type='button'
                        variant='danger'
                        onClick={props.incrementRakeshCounter}
                    >
                        Increase Rakesh Counter
                    </Button>
                </Form.Group>
            }
            {
                props.showRakeshCounter &&
                <Form.Row>
                    <Button
                        type='button'
                        variant='warning'
                        onClick={props.resetRakeshCounter}
                    >
                        Reset Rakesh Counter
                    </Button>
                </Form.Row>
            }
        </Form.Row>
    );
}

export default RakeshCounter;
