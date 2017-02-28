import React from 'react';
import * as actionCreators from '../Actions/ActionCreators.js';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {PrimaryButton} from 'office-ui-fabric-react/lib/Button';
import {TextField} from 'office-ui-fabric-react/lib/TextField';
import { Spinner, SpinnerType} from 'office-ui-fabric-react/lib/Spinner';
import 'office-ui-fabric-react/dist/css/fabric.css';


class AddToDoForm extends React.Component {

    render() {   
      let spinner = this.props.loading === true ?  <Spinner type={ SpinnerType.large } /> : "";
      return (
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-u-sm6">
              <TextField value={this.props.timer}></TextField>
            </div>
            <div className="ms-Grid-col ms-u-sm1">
              {spinner}
            </div>
          </div>
          <div className="ms-Grid-row">
            <span className="ms-Grid-col ms-u-sm5">
              <PrimaryButton onClick={this.update.bind(this)}>Refresh from server</PrimaryButton>
            </span>
            <span className="ms-Grid-col ms-u-sm6">
              <PrimaryButton onClick={this.increment.bind(this)}>Increment</PrimaryButton>
            </span>
          </div>  
          
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
