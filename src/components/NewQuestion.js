import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component{
  
  state={
    text1: '',
    text2: ''
  }
  
  handleSubmit = (event)=>{
    event.preventDefault()
    const {text1, text2} = this.state
    const {dispatch} = this.props
    
    dispatch(handleAddQuestion(text1, text2))
    
    this.setState({
      text1: '',
      text2: ''
    })
  }

  handleChange = (event)=>{
    const text = event.target.value
    const option = event.target.name
    if(option==='textarea1'){
      this.setState({
         text1: text
      })
    } else {
      this.setState({
         text2: text
      })
    }
 }
  
  render(){
    const {text1, text2} = this.state
    return(
      <div>
        <h3>Would you rather...</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
           <textarea
             name='textarea1'
             placeholder='option one'
             value={text1}
             onChange={this.handleChange}
             className='textarea'
            />
           <textarea
             name='textarea2'
             placeholder='option two'
             value={text2}
             onChange={this.handleChange}
             className='textarea'
           />
          <button
             className='btn'
             type='submit'
             disabled={text1===''  || text2===''}
           >
            Submit
          </button>
        </form>      
      </div>
    )
  }
}

export default connect()(NewQuestion)