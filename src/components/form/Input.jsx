import React, {useState} from 'react'
import '../../styles/components/form/input.scss'

const Input = ({ name = "Input", defaultValue = "", placeholder = "Placeholder", type = "text"}) => {
    const [value, setValue] = useState( defaultValue );
  return (
    <div className="input-container">
        <input
            id = { name }
            name = { name }
            className='form-input'
            type={ type }
            placeholder= { placeholder }
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
        />
        <label for = { name } className='form-label'>{ name }*</label>
      </div>
  )
}

export default Input