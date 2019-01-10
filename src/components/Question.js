import React, {Component} from 'react'
import {connect} from 'react-redux'

class Question extends Component{
  render(){
    const {question} = this.props
    const {author, id, optionOne, optionTwo} = question
    return(
      <div>
      Question {id} asked by {author} - would you rather {optionOne.text} or {optionTwo.text}?
      </div>
    )
  }
}

function mapStateToProperties({questions, authedUser, users},{id}){
  const question = questions[id]
  return {
    authedUser,
    question,
    users
  }
}

export default connect(mapStateToProperties)(Question)
