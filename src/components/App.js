import React, { Component } from 'react';
import {connect} from 'react-redux'
import handleInitialData from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import SignInPage from './SignInPage'

class App extends Component {
  state={questionId:"loxhs1bqm25b708cmbf3g"}

  handleViewQuestionPoll=(id)=>{
    return this.setState({questionId:id})
  }
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="ui container">
        <LoadingBar/>
        <h1 className="ui block header"> Would You Rather App</h1>
        <QuestionList  handleViewQuestionPoll={this.handleViewQuestionPoll}/>
        <NewQuestion/>
        <QuestionPage id={this.state.questionId}/>
        <LeaderBoard/>
        <SignInPage/>
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
