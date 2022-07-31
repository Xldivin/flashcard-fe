import React, { useState } from 'react'

const Card= ({car}:any) => {
  const [flip, setFlip] = useState(false)
  return (
    <>
      <div className={`card ${flip ? 'flip' : ''}`}onClick={() => setFlip(!flip)}>
        <div className='front'>
        <p>{car.id}</p>
        <h2>{car.question}</h2>
        <p>{car.description}</p>
        <div className='buttons'>
        <button className='delete'>
        delete
        </button>
        <button className='update'>
        update
        </button>
        </div>
        </div>
        <div className='back'>
        <p>{car.answer}</p>
        </div>
       </div>
    </>
  )
}

export default Card
