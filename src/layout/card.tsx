import React, { useState } from 'react'
import { useMutation } from "@apollo/client";
import { DELETE_CARD } from '../lib/cardMutation'


const Card= ({card,cardid}:any) => {
  const [flip, setFlip] = useState(false)
  const [id,setId] = useState(card.id)

  const [deleteCard, { error, data }] = useMutation(DELETE_CARD, {
    variables: {id:id}
  });

  const DeleteCard = () => {
    deleteCard()
    console.log(id)
    alert(error)
  }
  return (
    <>
      <div className={`card ${flip ? 'flip' : ''}`}onClick={() => setFlip(!flip)}>
        <div className='front'>
        <div>
        <h3>{cardid}</h3>
        <h3>{card.question}</h3>
        <p>{card.description}</p>
        </div>
        <div className=''>
        <button className='button' onClick={() => DeleteCard()} >DELETE</button>
        </div>
        </div>
        <div className='back'>
        <p>{card.answer}</p>
        </div>
       </div>
    </>
  )
}

export default Card
