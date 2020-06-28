import {connect} from 'react-redux';
import {selectors as reddySelectors, actions as reddyActions} from '../dux/reddy-reducer';
import ReddyCounter from '../views/reddy-counter';

function mapStateToProps(state) {
    return {
        showReddyCounter: reddySelectors.showReddyCounter(state)
    };
}

const mapDispatchToProps = (dispatch) => ({
    toggleReddyCounter: () => dispatch(reddyActions.toggleReddyCounter),
    incrementReddyCounter: () => dispatch(reddyActions.incrementReddyCounter),
    resetReddyCounter: () => dispatch(reddyActions.resetReddyCounter)
});

const ReddyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReddyCounter);

export default ReddyContainer;
