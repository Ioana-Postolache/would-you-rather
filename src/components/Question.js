import React, {Component} from 'react'
import {connect} from 'react-redux'

class Question extends Component{
  render(){
    const {question} = this.props
    const {author, id} = question
    return(
      <div>
      Question {id} asked by {author}
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
