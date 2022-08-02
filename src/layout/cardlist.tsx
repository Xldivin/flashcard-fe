import Card from "./card"
import { useQuery } from "@apollo/client"
import { GET_CARDS } from "../lib/querries"

const Cardlist = () => {

  const { data,loading } = useQuery(GET_CARDS)
  if(loading){
    return(<p>loading...</p>)
  }
  let cardid = 0;
  return (
         <div className="card-grid">
        {
          //@ts-ignore
          data.allcards.map((card) => {
            cardid= cardid+1
            return <Card card={card} key={card.id} cardid={cardid}/>;
          })
        }
      </div>
  )
}

export default Cardlist