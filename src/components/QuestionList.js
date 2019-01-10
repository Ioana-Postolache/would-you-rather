import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class QuestionList extends Component{
  render(){
    const {answeredStatusQuestions} = this.props
    const answeredQuestions = answeredStatusQuestions.filter(q=>q.isAnsweredBySignedInUser)
    const nonAnsweredQuestions = answeredStatusQuestions.filter(q=>!q.isAnsweredBySignedInUser)
    
    return(
      <div>
        <h3>QuestionList</h3>
      {answeredStatusQuestions.length!==0 &&
      <div>
          <h4>Answered Questions</h4>
          <ul>
            {answeredQuestions.map(question =>
             <li key={question.id}>
               <Question id={question.id}/>
             </li>
             )}
          </ul>
         <h4>Non-Answered Questions</h4>
          <ul>
            {nonAnsweredQuestions.map(question =>
             <li key={question.id}>
               <Question id={question.id}/>
             </li>
             )}
          </ul>
         </div>
          }         
      </div>
    )
  }
}

function mapStateToProperties({questions, authedUser}){
   
  let answeredStatusQuestions = []
  if(authedUser === null){
    return {
      answeredStatusQuestions
    }
  } else {

      answeredStatusQuestions = Object.values(questions)
                                   .map(question=>  { 
                                           return {...question,
                                                   isAnsweredBySignedInUser: question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
                                                  }})
 
  return {
    answeredStatusQuestions:  answeredStatusQuestions
                                  .sort((a,b)=>a.timestamp-b.timestamp)
                              
          }
  }
}

export default connect(mapStateToProperties)(QuestionList)