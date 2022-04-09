import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  let [user, setUser] = useState(true)

  const checkUser = () => {
    if (user === true) {
      setUser(false)
    } else {
      setUser(true)
    }

  }
  return (
    <div className="App">
      <Navbar user={user} checkUser={checkUser}/>
    </div>
  );
}