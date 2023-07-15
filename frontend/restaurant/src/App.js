
import './App.css';
import './RootStyles.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useLocalStorage from './UseLocalStorage';
import AppUser from './components/app/AppUser';
import AppN from './components/app/AppN';

function App() {
  const [user, setUser] = useLocalStorage('user')

  return (
    <div className="App">
      <div className='container'>
      {
        user?.user 
        ? (
          <AppUser user={user} />
        ) : (
          
          <AppN />
        )
      }
        
      </div>
    </div>
  );
}

export default App;
