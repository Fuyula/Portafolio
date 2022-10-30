import React from 'react'
import Input from './Input'
import '../../styles/components/form/form.scss'
import Textarea from './Textarea'

const Form = () => {
  return (
    <form className='contact-form' action="https://public.herotofu.com/v1/b3779f10-58a6-11ed-b82c-5d75eaa7ccff" method="post">
        <Input name="Nombre" placeholder='John Doe'/>
        <Input name="Email" placeholder='john@doe.mail' type='email'/>
        <Textarea name="Mensaje" placeholder='Hola, mucho gusto...'/>
        <button className='submit-button pulse'>Enviar</button>
    </form>
  )
}

export default Form