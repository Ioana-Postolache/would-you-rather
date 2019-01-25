import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  
handleLogOut = event => {
    event.preventDefault()    
    const { dispatch } = this.props
    dispatch( setAuthedUser( null ))
  }

render () {
  return(
    <nav className = "ui segment">
        <div className = "ui menu">
           <NavLink className = "item" to = '/' exact>
             Home
           </NavLink>
           <NavLink className = "item" to = '/add'>
             New Question
           </NavLink>
           <NavLink className = "item" to = '/leaderboard'>
             LeaderBoard
           </NavLink>
           <div className = "right menu">
             <div className = "ui item">Hi, { this.props.signedInUser.name } </div>
             <NavLink className = "ui item" to = './signInPage' onClick = { this.handleLogOut }>
               Logout
            </NavLink>
           </div>
        </div>
    </nav>
    )
  }
}

function mapStateToProps ({ authedUser, users  }) {
  const signedInUser = users[authedUser]
  return { signedInUser }
}
export default connect( mapStateToProps )( Nav )