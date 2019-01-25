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
          <div className="ui container">

            <h1 className="ui block header"> Would You Rather App</h1>
            <div>
           {loading===true
            ?<LoadingBar/>
            : ( authedUser === null
              ?<Route path='/' component = { SignInPage }/>
              :(<Fragment>
                    <Nav/>
                    <Route path='/' exact render={()=>(
                       <QuestionList handleViewQuestionPoll = { this.handleViewQuestionPoll }/>
                    )}/>
                    <Route path = '/NewQuestion' component = { NewQuestion }/>
                    <Route path = '/Question/:id' component = { QuestionPage }/>

                    <Route path = '/LeaderBoard' component = { LeaderBoard }/> 
                </Fragment>
               ))}
            </div>
          </div>   
       </Router>
    );
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
