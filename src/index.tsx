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
import client from './lib/apolloClient';
import { ApolloProvider } from "@apollo/client"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
var token = localStorage.getItem("token");
root.render(
  <BrowserRouter>
   <ApolloProvider client={client}>
  <Routes>
  <Route path='/'element={<Firstpage />} />
  <Route path="/cards" element={<App />} />
  <Route path='/signup'element={<Signup />} />
  <Route path='/login'element={<Login />} />
  <Route path='/addcard'element={<AddCard />} />
  </Routes>
  </ApolloProvider>
  </BrowserRouter>
);

reportWebVitals();