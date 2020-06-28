import {connect} from 'react-redux';
import DisplayCounter from '../views/display-counter';
import {actions as reddyActions, selectors as reddySelectors} from '../dux/reddy-reducer';
import {actions as rakeshActions, selectors as rakeshSelectors} from '../dux/rakesh-reducer';

function mapStateToProps(state) {
    return {
        reddyCounter: reddySelectors.getReddyCounter(state),
        rakeshCounter: rakeshSelectors.getRakeshCounter(state),
        showReddyCounter: reddySelectors.showReddyCounter(state),
        showRakeshCounter: rakeshSelectors.showRakeshCounter(state)
    };
}

const mapDispatchToProps = (dispatch) => ({
    resetCounters: () => {
        dispatch(reddyActions.resetReddyCounter);
        dispatch(rakeshActions.resetRakeshCounter);
    }
});

const DisplayCounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayCounter);

export default DisplayCounterContainer;
