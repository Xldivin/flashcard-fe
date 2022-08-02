import { ADD_CARD } from '../lib/cardMutation'
import { useMutation } from "@apollo/client";
import React, { useState } from 'react';

function AddCard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [description, setDescription] = useState("");
  
  const [saveCard, { error, data }] = useMutation(ADD_CARD, {
    variables: {description, question, answer}
  });
  const handleSubmit =(e:any) =>{
    e.preventDefault();
    if (question === '' || description === '' || answer === '') {
      return alert('Please fill in all fields')
    }
    saveCard()
    setQuestion('')
    setDescription('')
    setAnswer('')
  }
  return (
    <div>
      {error ? <p>Oh no! {error.message}</p> : null}
      {data && data.card ? <p>Saved!</p> : null}
            <form className='add-form' onSubmit={handleSubmit}>
            <h3 className='title-card'>Add Cards</h3>
            <input
            className='input7'
            placeholder='Add Question'
            name='question'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            />
            <br />
            <br />
            <input
            className='input8'
            placeholder='Add Answer'
            name='answer'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            />
            <br />
            <br />
            <input
            className='input9'
            placeholder='Add Description'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />
            <br />
            <button className='button-card'type='submit'>Add Card</button>
        </form>
    </div>
  )
}

export default AddCard