import React from 'react'
import { useState } from 'react'
const SearchHeader = ({search}) => {
  const [valueInput, setValueInput] = useState('')
    
  const handleFormSubmit=(event)=>{
    
        event.preventDefault()
        search(valueInput)
    }

    const handleChange=(event)=>{
      setValueInput(event.target.value)
    }
  return(
    <div className='searchDiv'>
      <form onSubmit={handleFormSubmit}>
        <label>Ne Ariyorsunuz?</label>
        <input  type="text" value={valueInput} onChange={handleChange} />
        <div>{valueInput}</div>
      </form>  
    </div>
  )
}

export default SearchHeader