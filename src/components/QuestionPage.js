import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleSubmitAnswer} from '../actions/questions'

class QuestionPage extends Component{
  state = {
      selectedOption: "optionOne"
    }
  
handleOptionChange = event => {
  this.setState({
    selectedOption: event.target.value
  });
};

handleFormSubmit = event => {
  
  event.preventDefault();
  const {id} = this.props
  const {selectedOption} = this.state
  const {dispatch} = this.props
  
  dispatch(handleSubmitAnswer(id,selectedOption))
}

  render(){
    const {question} = this.props
    if(question===null) {
      return <div>
        Loading...
        </div>
    } else {
      const {author, optionOne, optionTwo, answeredBySignedInUser} = question
      const optionOneVotes = optionOne.votes.length
      const optionTwoVotes = optionTwo.votes.length
      const totalVotes = optionOneVotes + optionTwoVotes
      if(answeredBySignedInUser!==null){
        return(
           <div>
            <p>Total votes: {totalVotes}</p>
            <ul>
              <li key='1'>{optionOne.text}: {optionOneVotes/totalVotes*100}% {answeredBySignedInUser==='optionOne' && 'voted'}</li>
              <li key='2'>{optionTwo.text}: {optionTwoVotes/totalVotes*100}% {answeredBySignedInUser==='optionTwo' && 'voted'}</li>
            </ul>
           </div>
          )
      }else{
      return(

        <div>
        <h3>Question Page</h3>
        <div>Would you rather...</div>
          <div>
            
            <div>Question asked by {author}</div>
            <form onSubmit={this.handleFormSubmit}>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="optionOne"
                    checked={this.state.selectedOption === "optionOne"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                {optionOne.text}
                </label>
              </div>
              <div>or</div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="optionTwo"
                    checked={this.state.selectedOption === "optionTwo"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                 {optionTwo.text}
                </label>
              </div>

              <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Submit
                </button>
              </div>

          </form>
          </div>

        </div>


    )
   }
  }
  }
}
  
function mapStateToComponents({users, questions, authedUser}, {id}){
  if (authedUser===null){
    return{
      question: null
    } 
  } else {
    const question = {
      ...questions[id],
      answeredBySignedInUser: questions[id].optionOne.votes.includes(authedUser) ? 'optionOne'  : (questions[id].optionTwo.votes.includes(authedUser) ? 'optionTwo' : null)
    }

    return{
      question
    }
  }
}
  
export default connect(mapStateToComponents)(QuestionPage)
   