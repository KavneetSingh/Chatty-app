import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Title from "./components/Title.jsx";
import LikeBtn from './components/LikeBtn.jsx';

function App() {
  return (
    // <div>
    //   <h1>Hello World!</h1>
    //   {/* <Title/> */}
    //   <LikeBtn/>
    // </div>

    // <div>
    //   hi
    // </div>

    <BrowserRouter>
    hi
      <Routes>
        
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
