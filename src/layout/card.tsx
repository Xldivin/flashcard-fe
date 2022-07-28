import React, { useState } from 'react'

interface IProps {
    card:{
    id:number,
    question:string,
    answer:string,
    description:string
    }[]
}

const Card:React.FC<IProps> = ({card}) => {
  const [flip, setFlip] = useState(false)
  return (
    <div className={`${flip ? 'flip':''}`} onClick={() => setFlip(!flip)}>
      {card.map(car=>{
        return(
            <div className='card'>
                <div className='front'>
                <p>{car.id}</p>
                <h2>{car.question}</h2>
                <p>{car.description}</p>
                <div className='buttons'>
                <button className='delete'>delete</button>
                <button className='update'>update</button>
                </div>
                </div>
               <div className='back'>
               <p>{car.answer}</p>
               </div>
            </div>
        )
      })}
    </div>
  )
}

export default Card
