import {saveQuestion} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

export const ADD_QUESTION = 'SAVE_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions(questions){
  return{
    type: RECEIVE_QUESTIONS,
    payload: questions
  }
}

function addQuestion(question){
  return{
    type: ADD_QUESTION,
    payload:question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText){
  return(dispatch, getState)=>{
    const {authedUser} = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author:authedUser
    })
     .then(question=>dispatch(addQuestion(question)))
     .then(dispatch(hideLoading()))
  }
}