import { useState } from 'react';
import './App.css';
import DrawerAppBar from './components/navBar/NavBar';
// import Chat from './components/users/UsersChat';
import MyChats from './components/users/UsersChat';
// import MessagesChat from './components/users/MsgChat';
// import ChatMessage from './components/users/MsgChat';
// import ChatPage from './components/users/test';
// import Users from './components/users/UsersChat'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/chatpages/HomeChat';
function App() {

  return (
    <>
    {/* <DrawerAppBar/>
    <MyChats/> */}

    <div className='App'>
    <DrawerAppBar/>
      <Homepage/>
    </div>

   {/* <MessagesChat/> */}
    
    {/* <ChatPage/> */}
    </>
  )
}

export default App
