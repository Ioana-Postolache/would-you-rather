import React, {Component} from 'react'
import {connect} from 'react-redux'
import { image } from 'faker'

class LeaderBoard extends Component{
  render(){
   const {scores, users} = this.props

    if(users&& scores) {
      return(
      <div className="ui segment">
        <h3 className="ui block header">LeaderBoard</h3>
      
      <div className="ui divided items">
        {Object.keys(scores).sort((a, b)=> -(scores[a].totalScore-scores[b].totalScore)).map((userId, index) => {
          const {askedQuestions, answeredQuestions, totalScore} = scores[userId]
          
               return (
                  <div key={userId} className="item">
                    
                    <div className="image">
                      <div className="floating ui black circular label">{index+1}</div>
                      <img alt={`${users[userId].name}'s avatar`}  src={image.avatar()}/>
                    </div>
                    <div className="content">
                      <div className="header">{users[userId].name}</div>
                      <div className="total-score">
                        <p>Total Score: {totalScore}</p>
                      </div>
                      <div className="extra">
                        <p>Asked questions: {askedQuestions}</p>
                        <p>Answered questions: {answeredQuestions}</p>
                      </div>
                  </div>
               </div>
             )
       })}
      </div>
   
      </div>
    )
  }
return <div> Loading...</div>
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
      scores = {...scores,
                [userId]:{
                          userId,
                          askedQuestions,
                          answeredQuestions, 
                          totalScore: askedQuestions+answeredQuestions
                          }
               }})  
    return {scores,
           users}
    } 
     return {scores: null,
            users}
}
 
    
export default connect(mapStateToProps)(LeaderBoard)
               