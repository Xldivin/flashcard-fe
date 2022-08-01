import Card from "./card"
import { useQuery } from "@apollo/client"
import { GET_CARDS } from "../lib/querries"

const Cardlist = () => {

  const { data,loading } = useQuery(GET_CARDS)
  if(loading){
    return(<p>loading...</p>)
  }

  return (
         <div className="card-grid">
        {
          //@ts-ignore
          data.allcards.map((card) => {
            return <Card card={card} key={card.id} />;
          })
        }
      </div>
  )
}

export default Cardlist