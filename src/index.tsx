import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
import Signup from './routes/signup';
import Firstpage from './routes/Firstpage';
import Login from './routes/login';
import AddCard from './routes/AddCard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/'element={<Firstpage />} />
  <Route path="/cards" element={<App />} />
  <Route path='/signup'element={<Signup />} />
  <Route path='/login'element={<Login />} />
  <Route path='/addcard'element={<AddCard />} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
