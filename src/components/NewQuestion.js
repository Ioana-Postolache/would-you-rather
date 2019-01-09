import React, {Component} from 'react'

class NewQuestion extends Component{
  
  state={
    text1: '',
    text2:''
  }
  
  const handleSubmit = (event)=>{
    event.preventDefault()
  }

 const handleChange = (event)=>{
 }
  
  render(){
    return(
      <div>
        <h3>Would you rather...</h3>
        <form className='new-question' onSubmith={this.handleSubmit}>
           <textarea
             id='textarea1'
             placeholder='option one'
             value={text}
             onChange={this.handleChange}
             className='textarea'
            />
           <textarea
             id=textarea2
             placeholder='option two'
             value={text}
             onChange={this.handleChange}
             className='textarea'
           />
          <button
             className='btn'
             type='submit'
             disabled={text1==='' || text2=''}
           >
            Submit
          </button>
        </form>      
      </div>
    )
  }
}