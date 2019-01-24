import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { image } from 'faker'

class Question extends Component{
  handleViewQuestionPoll=(event)=>{
    const id = event.target.getAttribute("id")
    return  this.props.handleViewQuestionPoll(id)
  }
  render(){
    const { question, users } = this.props
    const { author, id, optionOne, optionTwo } = question
    return(
      <div className="item">
        <div className="image">
          <img alt={ `${users[author].name}'s avatar` }  src={image.avatar()}/>
        </div>
        <div className="content">
          <div className="header">Would you rather...</div>
          <div className="extra"> 
             Question asked by {users[author].name}
         </div>
        <ul className="ui styled list">
              <li key="1">{optionOne.text}...</li>
              <li key="2">...or {optionTwo.text}?</li>          
        </ul>
       <Link to='/'>Home</Link>
        <button id={id} className="ui secondary button" onClick={this.handleViewQuestionPoll}>View Poll</button>
      </div>
      
      </div>
    )
  }
}

function mapStateToProperties({questions, authedUser, users},props){
  const question = questions[props.id]

  return {
    authedUser,
    question,
    users,
    props
  }
}

export default connect(mapStateToProperties)(Question)
