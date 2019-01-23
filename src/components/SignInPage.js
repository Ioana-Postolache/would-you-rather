import React, {Component} from 'react'
import {connect} from 'react-redux'

class SignInPage extends Component{
  render(){
    return(
    <div className="ui segment">
      <h3>SignInPage</h3>
    </div>
    )
  }
}

export default connect()(SignInPage)