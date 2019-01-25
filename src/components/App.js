import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import handleInitialData from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import SignInPage from './SignInPage'
import Nav from './Nav'

class App extends Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser, loading } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar/>                              
          { loading === true
              ? null
              :( <div className="ui container">  
                 <h1 className="ui block header"> Would You Rather App</h1>     
                 { authedUser === null
                 ? <Route path = '/' component = { SignInPage }/>
                 : <div>                     
                     <Nav/>
                     <Route path='/' exact render={()=>(
                        <QuestionList handleViewQuestionPoll = { this.handleViewQuestionPoll }/>
                      )}/>
                      <Route path = '/add' component = { NewQuestion }/>
                      <Route path = '/questions/:id' component = { QuestionPage }/>
                      <Route path = '/leaderboard' component = { LeaderBoard }/> 
                  </div>
                  }
               </div> 
               )} 
         </Fragment>
       </Router>
    );
  }
}

function mapStateToProps({authedUser, questions}){
  return {
    loading: Object.keys(questions).length === 0,
    authedUser
  }
}
export default connect(mapStateToProps)(App);
