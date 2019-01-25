import React, { Component } from 'react'
import { connect } from 'react-redux'
import { image } from 'faker'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  
  handleViewQuestionPoll = ( event ) => {
    const id = event.target.getAttribute ( "id" )
    return this.props.history.push(`/Question/${ id }`)
  }

  render() {
    const { question, users } = this.props
    const { author, id, optionOne, optionTwo } = question

    
    return(  
      <div className = "item">
        <div className = "image">
          <img alt = { `${users[author].name}'s avatar` }  src = { image.avatar() }/>
        </div>
        <div className = "content">
          <div className = "header"> Would you rather... </div>
          <div className = "extra"> 
             Question asked by { users[author].name }
         </div>
        <ul className = "ui styled list">
              <li key = "1"> { optionOne.text }... </li>
              <li key="2">...or { optionTwo.text }?</li>          
        </ul>
       <Link to = { `/Question/${ id }` } id = { id } className = "ui secondary button" onClick = { this.handleViewQuestionPoll }> View Poll </Link>
      </div>      
     </div>
    )
  }
}

function mapStateToProperties({ questions, authedUser, users }, props){
  const question = questions[props.id]

  return {
    authedUser,
    question,
    users,
    props
  }
}

export default withRouter(connect(mapStateToProperties)(Question))
