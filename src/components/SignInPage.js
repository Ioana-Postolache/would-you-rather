import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class SignInPage extends Component{
  
  state={
    selected: ''
  }
  
   onSelect = (option)=> {
    this.setState({selected: option})
  }
 
  handleSignIn=event=>{
    event.preventDefault()
    
    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.selected.value))
  }
    
  render(){
    const { users } = this.props
    const defaultOption = this.state.selected

    if(users){
        return(
        <div className="ui segment">
          <h3 className="ui block header" >Sign In Page</h3>
          <form onSubmit={this.handleSignIn}>
              <div className="ui form"> 
                <div className="field">
                    <label>Username: </label>
                    <div className="ui selection dropdown">
                        <Dropdown 
                          className="item" 
                          options={Object.keys(users).filter(user=>user!==this.state.selected.value)} 
                          onChange={this.onSelect} 
                          value={defaultOption} 
                          placeholder="Select an option" 
                        />
                    </div>                    
                </div>
              </div>
              <div className="form-group">
                <button className="ui secondary button" type="submit">
                  Submit
                </button>
              </div>
           </form>
        </div>
        )
    }
  }
}

function mapStateToProps({ users, authedUser }){
  return{
    authedUser,
    users, 

  }
}
export default connect(mapStateToProps)(SignInPage)