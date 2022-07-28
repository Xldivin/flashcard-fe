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
    {
      id:3,
      question: "what is 2+2",
      answer:"the answer is four",
      description: "mathematics",
    },
    {
      id:4,
      question: "what is 2+2",
      answer:"the answer is four",
      description: "mathematics",
    },
    {
      id:5,
      question: "what is 2+2",
      answer:"the answer is four",
      description: "mathematics",
    },
    {
      id:6,
      question: "what is 2+2",
      answer:"the answer is four",
      description: "mathematics",
    },
    {
      id:7,
      question: "what is 2+2",
      answer:"the answer is four",
      description: "mathematics",
    },
    {
      id:8,
      question: "what is 2+2",
      answer:"the answer is four",
      description: "mathematics",
    },
    {
      id:9,
      question: "what is 2+2",
      answer:"the answer is four",
      description: "mathematics",
    },
    {
      id:10,
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