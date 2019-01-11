import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderBoard extends Component{
  render(){
   const {scores} = this.props

    return(
      <div>
        <h3>LeaderBoard</h3>
      {
      scores === null 
      ? <div>Loading....</div>
      :
       <ol>
          {Object.keys(scores).sort((a, b)=> -(scores[a].totalScore-scores[b].totalScore))
           .map(userId => {
           const {askedQuestions, answeredQuestions, totalScore} = scores[userId]
           return <li key={userId}>
                      {userId}: TotalScore ({totalScore}), askedQuestions ({askedQuestions}), answeredQuestions ({answeredQuestions})
            </li>})}
         
       </ol>
     }
      </div>
    )
  }
}

function mapStateToProps({users, questions, authedUser}){
  let scores = {}
  if(authedUser!==null){
    Object.keys(users).forEach(userId => {

      const askedQuestions = Object.keys(questions).filter(qId =>questions[qId].author===userId).length
      const answeredQuestions = Object.keys(questions).filter(qId =>
                                                              questions[qId].optionOne.votes.includes(userId)
                                                              ||questions[qId].optionTwo.votes.includes(userId)).length   
      return scores = {...scores,
                [userId]:{
                          userId,
                          askedQuestions,
                          answeredQuestions, 
                          totalScore: askedQuestions+answeredQuestions
                          }
               }})   
    } else {
     return {scores: null}
  }
     return {scores}
}
export default connect(mapStateToProps)(LeaderBoard)
               