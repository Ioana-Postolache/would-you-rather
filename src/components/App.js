import React, { Component } from 'react';
import {connect} from 'react-redux'
import handleInitialData from '../actions/shared'



class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">

        Would You Rather
      </div>
    );
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
