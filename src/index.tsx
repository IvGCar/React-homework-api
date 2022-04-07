import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserInfo from './components/UserInfo';
import './index.css';
import App from './App';
import UserContext from './context/UserContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

const user = {
  name:{
    first:'Aerith',
    last:'Gainsborough'
  },
  subscriptionType:'Anime Conoseur'
}

root.render(
  <BrowserRouter>
    <UserContext.Provider value={user}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user" element={<UserInfo />}/>
    </Routes>

    </UserContext.Provider>
  </BrowserRouter>
);





