import React, { useState } from 'react'
import DeleteCardButton from './delete-card'
import UpdateCardButton from './update-card'

const Card= ({card}:any) => {
  const [flip, setFlip] = useState(false)
  return (
    <>
      <div className={`card ${flip ? 'flip' : ''}`}onClick={() => setFlip(!flip)}>
        <div className='front'>
        <p>{card.id}</p>
        <h2>{card.question}</h2>
        <p>{card.description}</p>
        <div className='buttons'>
          <DeleteCardButton cardId={card.id} />
          <UpdateCardButton cardId={card.id} />
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
