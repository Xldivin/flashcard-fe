import React from 'react'
import Card from "./card"

interface IProps {
    card:{
    id:number,
    question:string,
    answer:string,
    description:string
    }[]
}

const Cardlist:React.FC<IProps> = ({card}) => {
  return (
    <>
         <div className="card-grid">
        {
          //@ts-ignore
          card.map((car) => {
            return <Card car={car} key={car.id} />;
          })
        }
      </div>
    </>
  )
}

export default Cardlist