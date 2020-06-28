import React from 'react';
import {Form} from 'react-bootstrap';
import ReddyContainer from '../componet-connectors/reddy-counter-connector';
import RakeshContainer from '../componet-connectors/rakesh-counter-connector';
import DisplayCounterContainer from '../componet-connectors/display-counter-connector';

function App() {
    return (
        <div className='App container-fluid'>
            <Form.Row>
                <Form.Group className='mt-5 ml-5 col-md-8'>
                    <ReddyContainer/>
                    <RakeshContainer/>
                    <DisplayCounterContainer/>
                </Form.Group>
            </Form.Row>
        </div>
    )
}

export default App;
