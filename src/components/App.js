import React, { Component } from 'react';
import {connect} from 'react-redux'
import handleInitialData from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import QuestionList from './QuestionList'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <LoadingBar/>
        <h3> Would You Rather App</h3>
        <QuestionList/>
       
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
