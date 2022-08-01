import React, { useState } from "react";
import Cardlist from "./layout/cardlist";
import "./App.css"
import { Link } from "react-router-dom"
import { AiOutlineLogout } from 'react-icons/ai';

interface IState {
  card:{
  id:number,
  question:string,
  answer:string,
  description:string
  }[]
}

const Driverlayout=({})=> {
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
      <Cardlist/>
			</main>
		</div>
	);
}
export default Driverlayout;