import React, { useState } from "react";
import Cardlist from "./layout/cardlist";
import "./App.css"
import { Link } from "react-router-dom"
import { AiOutlineLogout } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr'

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
      <div className="log">
        <Link to="/signup" className="link1">
        Add Card
        </Link>
        <Link to="/signup" className="link">
        Logout <AiOutlineLogout/>
        </Link>
      </div>
			<h3 className="title">Flash-Card-App</h3>
      <Cardlist card={card}/>
			</main>
		</div>
	);
}
export default Driverlayout;