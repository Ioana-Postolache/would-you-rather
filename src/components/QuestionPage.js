import React, { Component } from 'react'
import { connect } from 'react-redux'
import { image } from 'faker'
import { Route } from 'react-router-dom'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import SignInPage from './SignInPage'
import PageNotFound from './PageNotFound'

class QuestionPage extends Component{
 
  render(){
     const {question, users, authedUser } = this.props
    
    if ( authedUser === null ){
      return <Route path='/' component = { SignInPage }/>
    }
    
    if ( question === undefined ) {
      return <PageNotFound/>
    }
    const { author, optionOne, optionTwo, answeredBySignedInUser } = question
    
    if ( answeredBySignedInUser !== null ) {
       return (
           <AnsweredQuestion 
             id = { question.id }
             optionOne = { optionOne } 
             optionTwo = { optionTwo }
             answeredBySignedInUser = { answeredBySignedInUser }
           />  
        )
    }
      return (
        <UnansweredQuestion
          id = { question.id }
          users = { users }
          author = { author }
          image = { image }
          optionOne = { optionOne } 
          optionTwo = { optionTwo }
        />
        )
  }
}
  
function mapStateToComponents ({ users, questions, authedUser }, props ) {
  const { id } = props.match.params
  let question = questions[id]
  
  if ( authedUser === null ){
    return {
      authedUser
    } 
  } 
  
  if ( question === undefined) {
    return {
      question,
      authedUser
    }
  }
    question = {
      ...question,
      answeredBySignedInUser: question.optionOne.votes.includes(authedUser) 
                                     ? 'optionOne'  
                                     : (question.optionTwo.votes.includes(authedUser) 
                                         ? 'optionTwo' 
                                         : null)
    }

    return{
      question,
      users,
      authedUser,
      loading: false
    }

}
  
export default connect(mapStateToComponents)(QuestionPage)
   