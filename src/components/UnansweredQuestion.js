import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSubmitAnswer } from '../actions/questions'


class UnansweredQuestion extends Component {
  state = {
      selectedOption: "optionOne"
    }
  
handleOptionChange = event => {
  this.setState({
    selectedOption: event.target.value
  });
};

handleFormSubmit = event => {    
  const { id } = this.props
  const { selectedOption } = this.state
  const { dispatch } = this.props
  
  event.preventDefault();
  dispatch(handleSubmitAnswer(id,selectedOption))
}

 render () {
   const { users , author, image, optionOne, optionTwo } = this.props
   
   return (
     <div className = "ui segment">
          <h3 className = "ui block header">Question Page</h3>
            <div className = "ui segment">
              <div className = "ui left floated image">
                <img style = {{ width: '175px' }} alt = { `${ users[author].name }'s avatar`}  src = { image.avatar() }/>
             </div>
            <div className = "content">
              <h3>Would you rather...</h3>
              <p className="question-author" style = {{ color: 'rgba(0,0,0,.4)' }}> 
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

function mapStateToProps({authedUser, questions, users}, props){
  const {id} = props
  return {
    id,
    props
  }
}
  
export default connect(mapStateToProps)(UnansweredQuestion)