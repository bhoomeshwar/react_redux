import {connect} from 'react-redux';
import DisplayCounter from '../views/display-counter';
import {actions as reddyActions, selectors as reddySelectors} from '../dux/reddy-reducer';
import {actions as rakeshActions, selectors as rakeshSelectors} from '../dux/rakesh-reducer';
import {resetCounters} from '../thunks/resetCounters';

function mapStateToProps(state) {
    return {
        reddyCounter: reddySelectors.getReddyCounter(state),
        rakeshCounter: rakeshSelectors.getRakeshCounter(state),
        showReddyCounter: reddySelectors.showReddyCounter(state),
        showRakeshCounter: rakeshSelectors.showRakeshCounter(state)
    };
}

const mapDispatchToProps = {
    resetCounters
};

const DisplayCounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayCounter);

export default DisplayCounterContainer;
