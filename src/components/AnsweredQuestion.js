import React, { Component } from 'react'

class AnsweredQuestion extends Component {
  render () {
    const { optionOne, optionTwo, answeredBySignedInUser } = this.props
    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes
    
    return (
      <div className="ui segment">
        <div className="content">
            <h3 className="ui block header">Poll results</h3>
            <h4>Total votes: {totalVotes}</h4>
            <ul>
               <li key='1' className="inline field">
                  { optionOne.text } : {optionOneVotes} vote(s), {Math.round(optionOneVotes/totalVotes*100)}% of the total votes
                                      {answeredBySignedInUser==='optionOne' && <div className="ui left pointing green basic label">your option</div>}
               </li>
               <li key='2' className="inline field"> 
                  { optionTwo.text } : {optionTwoVotes} vote(s), {Math.round(optionTwoVotes/totalVotes*100)}% of the total votes
                                       {answeredBySignedInUser==='optionTwo' && <div className="ui left pointing green basic label">your option</div>}
                </li>
            </ul>
        </div>
      </div>
      )
  }  
}

export default AnsweredQuestion;