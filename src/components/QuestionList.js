import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class QuestionList extends Component{
  render(){
    return(
      <div>
        <h3>QuestionList</h3>
        <ul>
          {this.props.questionIds.map(id =>
           <li key={id}>
             <Question id={id}/>
           </li>
           )}
        </ul>
      </div>
    )
  }
}

function mapStateToProperties({questions}){
  return {
    questionIds: Object.keys(questions)
                    .sort((a,b)=>
                         questions[b].timestamp-questions[a].timestamp)
  }
}

export default connect(mapStateToProperties)(QuestionList)