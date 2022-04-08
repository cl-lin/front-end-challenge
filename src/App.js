import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  let [user, setUser] = useState(true)

  const ifTeacher = (isUser) => {
    console.log('isUser', isUser);
    setUser(isUser)
  }

  return (
    <div className="App">
      <Navbar user={user} ifTeacher={ifTeacher}/>
    </div>
  );
}