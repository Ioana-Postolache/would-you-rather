import React from 'react'
import { NavLink } from 'react-router-dom'

export default ()=>{
  return(
    <nav className="ui segment">
        <div className="ui horizontal bulleted list">
           <div className="item">
             <NavLink to='/' exact>
               Home
             </NavLink>
           </div>
           <div className="item">
             <NavLink to='/NewQuestion'>
               New Question
             </NavLink>
           </div>
           <div className="item">
             <NavLink to='/LeaderBoard'>
               LeaderBoard
             </NavLink>
           </div>
        </div>
    </nav>
    )
}