import {connect} from 'react-redux';
import {selectors as rakeshSelectors, actions as rakeshActions} from '../dux/rakesh-reducer';
import RakeshCounter from '../views/rakesh-counter';

function mapStateToProps(state) {
    return {
        showRakeshCounter: rakeshSelectors.showRakeshCounter(state)
    };
}

const mapDispatchToProps = (dispatch) => ({
    toggleRakeshCounter: () => dispatch(rakeshActions.toggleRakeshCounter),
    incrementRakeshCounter: () => dispatch(rakeshActions.incrementRakeshCounter),
    resetRakeshCounter: () => dispatch(rakeshActions.resetRakeshCounter)
});

const RakeshContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RakeshCounter);

export default RakeshContainer;
