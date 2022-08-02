import React, { useState } from 'react'

const Card= ({card,cardid}:any) => {
  const [flip, setFlip] = useState(false)
  return (
    <>
      <div className={`card ${flip ? 'flip' : ''}`}onClick={() => setFlip(!flip)}>
        <div className='front'>
        <h1>{cardid}</h1>
        <h2>{card.question}</h2>
        <p>{card.description}</p>
        </div>
        <div className='back'>
        <p>{card.answer}</p>
        </div>
       </div>
    </>
  )
}

export default Card
