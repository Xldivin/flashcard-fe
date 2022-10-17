import React, { useState } from "react";
import Cardlist from "./layout/cardlist";
import "./App.css"
import { Link } from "react-router-dom"
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

interface IState {
  card:{
  id:number,
  question:string,
  answer:string,
  description:string
  }[]
}

const Driverlayout=({})=> {
  const navigate = useNavigate();
	return (
		<div className="">
			<main className="">
      <div className="log">
        <button className="link1">
        <Link to="/addcard" className="button-add">
        Add Card
        </Link>
        </button>
        <button className="link" onClick={()=>{
          localStorage.removeItem("token");
          navigate(`/`);
        }}>
        Logout
        </button>
      </div>
			<h3 className="title">Flash-Card-App</h3>
      <Cardlist/>
			</main>
		</div>
	);
}
export default Driverlayout;