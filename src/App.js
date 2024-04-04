import './App.css';
import { useState } from 'react';
import User1 from './components/User1';
import User2 from './components/User2';
import { UserProvider } from './store/store';
function App() {
  return (
    <>
      <UserProvider>
        <ul>
          <li>
            <User1 />
          </li>
          <li>
            <User2 />
          </li>
        </ul>
      </UserProvider>
    </>
  );
}

export default App;
