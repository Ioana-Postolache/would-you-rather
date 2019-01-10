import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderBoard extends Component{
  render(){

    return(
      <div>
        <h3>LeaderBoard</h3>
      </div>
    )
  }
}

function mapStateToProps({users, questions}){
  const scores = []
  Object.keys(users).forEach(userId => {
    //to do: calculate scores
 })
}
export default connect()(LeaderBoard)
               