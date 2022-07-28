import React, { useState } from "react";
import Card from "./layout/card";
import "./App.css"

interface IState {
  card:{
  id:number,
  question:string,
  answer:string,
  description:string
  }[]
}

const Driverlayout=({})=> {
  const flashcard =[
    {
      id:1,
      question: "what is 2+2",
      answer:"the answer is four",
      description: "mathematics",
    },
    {
      id:2,
      question: "what is 2+2",
      answer:"the answer is four",
      description: "mathematics",
    },
    
  ]
  const [card, setflashcards] = useState<IState["card"]>(flashcard)
	return (
		<div className="">
			<main className="">
			<h3 className="title">Flash-Card-App</h3>
      <Card card={card}/>
			</main>
		</div>
	);
}
export default Driverlayout;