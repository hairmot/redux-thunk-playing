import React from 'react';
import * as actionCreators from '../Actions/ActionCreators.js';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'

  class AddToDoForm extends React.Component {

    render() {     
      return (
        <div>
          <button onClick={this.update.bind(this)}>Refresh from server</button> 
          <img src="load.gif" alt="loading" 
              style={
                  {"display": this.props.loading === true ? "inline" : "none" }
              } 
          /> 
          <br />
          <button onClick={this.increment.bind(this)}>Increment</button>
          <br />
          {this.props.timer}
        </div>
      )
    }

    update() {
      this.props.actions.fetchTimer();
    }  

    increment() {
      this.props.actions.updateTimer(this.props.timer);
    }  
}

const mapStateToProps = function(store, ownProps) {
  return {
    timer: store.timer,
    loading: store.loading
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
   return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToDoForm);
