import {getInitialData} from '../utils/api'
import {saveQuestionAnswer} from '../utils/api'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
import {setAuthedUser} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_USER_ID = 'johndoe'
const SUBMIT_ANSWER = 'SUBMIT_ANSWER'


function submitAnswer({ qid, answer }){
  return{
    type:SUBMIT_ANSWER,
    payload:{
    }
  }
}
                       
export function handleSubmitAnswer(){
  return(dispatch)=>{
  }
}

export default function handleInitialData(){
  return(dispatch)=>{
    dispatch(showLoading())
    return getInitialData()
      .then(({users, questions})=>{
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_USER_ID))
        dispatch(hideLoading())
    })
  }
}