import React, {Component} from 'react'
import {connect} from 'react-redux'

class QuestionPage extends Component{
  
  render(){
    const {question} = this.props
    if(question===null) {
      return <div>
        The page does not exist
        </div>
    } else {
      const {author, optionOne, optionTwo} = question
      const totalVotes = optionOne.votes.length + optionTwo.votes.length
      return(

        <div>
        Question asked by {author}
        <div>Total Votes: {totalVotes}</div>

        </div>
    )
  }
  }
}
  
function mapStateToComponents({users, questions, authedUser}, {id}){
  if (users === null || questions === null || authedUser==null){
    return{
      question: null
    } 
  } else {
    const question = questions[id]

    return{
      question
    }
  }
}
  
export default connect(mapStateToComponents)(QuestionPage)
   