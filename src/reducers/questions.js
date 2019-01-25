import { ADD_QUESTION, RECEIVE_QUESTIONS, SUBMIT_ANSWER } from '../actions/questions'

export default function questions (state={}, action){
  switch(action.type){
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.payload
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.payload.id]: {...action.payload}
      }
    case SUBMIT_ANSWER:
      const {qid, authedUser, answer} = action.payload
  
      if(answer === 'optionOne') {
        console.log('SUBMIT_ANSWER has been called with ',qid, authedUser, answer)
        return {
          ...state,
          [qid]:{
                  ...state[qid],
                  optionOne: {
                              ...state[qid].optionOne,
                              votes: state[qid].optionOne.votes.concat(authedUser)
                             }
                 }
         }
          
     } 
     return {
        ...state,
        [qid]:{
                ...state[qid],
                optionTwo: {
                            ...state[qid].optionTwo,
                            votes: state[qid].optionTwo.votes.concat(authedUser)
                           }
               }
       }     
   
    default:
      return state
  }
}