import logo from './logo.svg';
import './App.css';
import ChatWindow from './components/ChatWindow';

import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">

      
      <Routes>

        <Route path="/chat/:id" element={<ChatWindow/>} />

        

      </Routes>
      <div className=''>

        {/* <ChatWindow/> */}

      </div>
      
    </div>
  );
}

export default App;
