import {saveQuestion, saveQuestionAnswer} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'


export const ADD_QUESTION = 'SAVE_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'

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
    console.log('teeeeeeeeeeeeeeeeeeeeeest')
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

function submitAnswer({ authedUser, qid, answer }){
  console.log('submitAnswer has been called with ',authedUser, qid, answer)
  return{
    type:SUBMIT_ANSWER,
    payload:{
      answer,
      qid,
      authedUser
    }
  }
}
                       
export function handleSubmitAnswer(qid, answer){
  return(dispatch, getState)=>{
    const {authedUser} = getState()
       
    return saveQuestionAnswer({ authedUser, qid, answer })
            .then(dispatch(submitAnswer({ authedUser, qid, answer })))

  }        

}