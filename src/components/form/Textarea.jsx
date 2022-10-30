import React, { useState } from 'react';
import '../../styles/components/form/textarea.scss'

const Textarea = ({ name="Nombre", defaultValue = "", placeholder = "Placeholder"}) => {
    const [textareaValue, setTextareaValue] = useState(defaultValue);
  return (
    <div className="text-area-container">
        <textarea
            id = { name }
            name = { name }
            rows={10}
            placeholder={ placeholder }
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
        />
        <label className="textarea-label" for={ name }>{ name }*</label>
      </div>
  )
}

export default Textarea