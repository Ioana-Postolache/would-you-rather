import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component{
  state ={
          activeTab: "unanswered" 
       }

  handleClick = ( event ) => {
    const tabName = event.target.getAttribute('name')
    this.setState({ activeTab: tabName })
  } 

  render() {
    const { answeredStatusQuestions } = this.props
    const answeredQuestions = answeredStatusQuestions.filter(q => q.isAnsweredBySignedInUser)
    const nonAnsweredQuestions = answeredStatusQuestions.filter(q => !q.isAnsweredBySignedInUser)
    
    return(
      <div className = "ui segment">
        <h3 className = "ui block header"> QuestionList </h3>
      {answeredStatusQuestions.length !== 0 &&
      <div>
      <div className = "ui top attached tabular menu">
        <div 
          className = {'item '.concat(this.state.activeTab === 'answered' ? 'active' : '')} 
          name = "answered"
          onClick = {this.handleClick}
          >
            Answered Questions
        </div>
        <div 
          className = {'item '.concat(this.state.activeTab === 'unanswered' ? 'active' : '')} 
          name = "unanswered"
          onClick = { this.handleClick }
           >
            Unanswered Questions
        </div>
      </div>
          <div className={'ui bottom attached tab segment  '.concat( this.state.activeTab === 'answered' ? 'active' : '' )} data-tab = "answered">
            <div className="ui divided items">
              {answeredQuestions.map(question =>
               <Question key = { question.id } id = { question.id } handleViewQuestionPoll = { this.props.handleViewQuestionPoll }/>
               )}
            </div>
         </div>
         <div className = {'ui bottom attached tab segment  '.concat( this.state.activeTab === 'unanswered' ? 'active' : '' )}  data-tab = "unanswered" >
            <div className = "ui divided items">
              {nonAnsweredQuestions.map(question =>
                 <Question key = { question.id } id = { question.id } handleViewQuestionPoll = { this.props.handleViewQuestionPoll }/>
               )}
            </div>
           </div>
         </div>
          }         
      </div>
    )
  }
}

function mapStateToProperties({ questions, authedUser }, props){

  let answeredStatusQuestions = []
  
  if( authedUser === null ){
    return {
      answeredStatusQuestions,
      props
    }
  } 

     answeredStatusQuestions = Object.values(questions).map(question=>  { 
                                   return {
                                     ...question,
                                      isAnsweredBySignedInUser: question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
                                    }})
 
  return {
      answeredStatusQuestions:  answeredStatusQuestions
                                  .sort(( a, b ) => b.timestamp - a.timestamp ),
      props                              
          }
 
}

export default connect(mapStateToProperties)(QuestionList)