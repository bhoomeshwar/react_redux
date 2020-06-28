import React, {Component} from 'react';
import logo from '../images/logo.svg';
import {Button, Form} from 'react-bootstrap';
import ReddyCounter from './reddy-counter';
import RakeshCounter from './rakesh-counter';
import DisplayCounter from './display-counter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reddyCounter: 0,
            rakeshCounter: 0,
            showReddyCounter: false,
            showRakeshCounter: false
        };

        this.incrementReddyCounter = this.incrementReddyCounter.bind(this);
        this.incrementRakeshCounter = this.incrementRakeshCounter.bind(this);
        this.toggleReddyCounter = this.toggleReddyCounter.bind(this);
        this.toggleRakeshCounter = this.toggleRakeshCounter.bind(this);
        this.resetReddyCounter = this.resetReddyCounter.bind(this);
        this.resetRakeshCounter = this.resetRakeshCounter.bind(this);
        this.resetCounters = this.resetCounters.bind(this);
    }

    incrementReddyCounter() {
        this.setState({
            reddyCounter: this.state.reddyCounter + 1
        });
    }

    toggleReddyCounter() {
        this.setState({
            showReddyCounter: !this.state.showReddyCounter
        });
    }

    resetReddyCounter() {
        this.setState({
            reddyCounter: 0
        });
    }

    incrementRakeshCounter() {
        this.setState({
            rakeshCounter: this.state.rakeshCounter + 1
        });
    }

    toggleRakeshCounter() {
        this.setState({
            showRakeshCounter: !this.state.showRakeshCounter
        });
    }

    resetRakeshCounter() {
        this.setState({
            rakeshCounter: 0
        });
    }

    resetCounters() {
        this.setState({
            reddyCounter: 0,
            rakeshCounter: 0
        });
    }

    render() {
        return (
            <div className='App container-fluid'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn React
                    </a>
                </header>
                <Form.Row>
                    <Form.Group className='mt-5 ml-5 col-md-8'>
                        <Form.Row>
                            <Form.Group>
                                <Form.Check
                                    type='checkbox'
                                    label='show Reddy Counter'
                                    onClick={this.toggleReddyCounter}
                                />
                            </Form.Group>
                            {
                                this.state.showReddyCounter &&
                                <Form.Group className='col-md-4'>
                                    <ReddyCounter incrementReddyCounter={this.incrementReddyCounter}/>
                                </Form.Group>
                            }
                        </Form.Row>
                        <Form.Row>
                            <Form.Group>
                                <Form.Check
                                    type='checkbox'
                                    label='Show Rakesh Counter'
                                    onClick={this.toggleRakeshCounter}
                                />
                            </Form.Group>
                            {
                                this.state.showRakeshCounter &&
                                <Form.Group className='col-md-4'>
                                    <RakeshCounter incrementRakeshCounter={this.incrementRakeshCounter}/>
                                </Form.Group>
                            }
                        </Form.Row>
                        {
                            this.state.showReddyCounter &&
                            <Form.Row>
                                <Button
                                    type='button'
                                    variant='warning'
                                    onClick={this.resetReddyCounter}
                                >
                                    Reset Reddy Counter
                                </Button>
                            </Form.Row>
                        }

                        {
                            this.state.showRakeshCounter &&
                            <Form.Row>
                                <Button
                                    type='button'
                                    variant='warning'
                                    onClick={this.resetRakeshCounter}
                                >
                                    Reset Rakesh Counter
                                </Button>
                            </Form.Row>
                        }
                    </Form.Group>
                    {
                        (this.state.showRakeshCounter || this.state.showReddyCounter) &&
                        <Form.Group className='col-md-4'>
                            <Form.Row>
                                <Button
                                    type='button'
                                    variant='success'
                                    onClick={this.resetCounters}
                                >
                                    Reset Counters
                                </Button>
                            </Form.Row>
                            < Form.Row>
                                < DisplayCounter
                                    showRakeshCounter={this.state.showRakeshCounter}
                                    showReddyCounter={this.state.showReddyCounter}
                                    reddyCounter={this.state.reddyCounter}
                                    rakeshCounter={this.state.rakeshCounter}
                                />
                            </Form.Row>
                        </Form.Group>
                    }
                </Form.Row>
            </div>
        )
    }
}

export default App;
