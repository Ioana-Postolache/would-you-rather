import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSubmitAnswer } from '../actions/questions'
import { image } from 'faker'

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
    const {question, users} = this.props
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
           <div className="ui segment">
            <div className="content">
                <h3 className="ui block header">Poll results</h3>
                <h4>Total votes: {totalVotes}</h4>
                <ul>
                  <li key='1' className="inline field">{optionOne.text}: {optionOneVotes/totalVotes*100}% {answeredBySignedInUser==='optionOne' && <div className="ui left pointing green basic label">your option</div>}</li>
                  <li key='2' className="inline field">{optionTwo.text}: {optionTwoVotes/totalVotes*100}% {answeredBySignedInUser==='optionTwo' && <div className="ui left pointing green basic label">your option</div>}</li>
                </ul>
               </div>
            </div>
          )
      }else{
      return(

        <div className="ui segment">
        <h3 className="ui block header">Question Page</h3>
          <div className="ui segment">

            <div className="ui left floated image">
              <img style={{width: '175px'}} alt={`${users[author].name}'s avatar`}  src={image.avatar()}/>
           </div>
          <div className="content">
            <h3>Would you rather...</h3>
            <p className="question-author" style={{color: 'rgba(0,0,0,.4)'}}> 
               Question asked by {users[author].name}
             </p>

            <form onSubmit={this.handleFormSubmit}>

              <p className="ui action input">
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
              </p>
 
              <p className="form-check">
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
              </p>

              <div className="form-group">
                <button className="ui secondary button" type="submit">
                  Submit
                </button>
              </div>

          </form>
          </div>
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
  } 
    const question = {
      ...questions[id],
      answeredBySignedInUser: questions[id].optionOne.votes.includes(authedUser) ? 'optionOne'  : (questions[id].optionTwo.votes.includes(authedUser) ? 'optionTwo' : null)
    }

    return{
      question,
      users
    }

}
  
export default connect(mapStateToComponents)(QuestionPage)
   