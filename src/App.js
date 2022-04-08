import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  let [user, setUser] = useState(true)

  const ifTeacher = (isUser) => {
    console.log('teacher user: ', isUser);
    setUser(isUser)
  }

  const ifStudent = (isUser) => {
    console.log('student user: ', isUser)
    setUser(isUser)
  }

  return (
    <div className="App">
      <Navbar user={user} ifTeacher={ifTeacher} ifStudent={ifStudent}/>
    </div>
  );
}