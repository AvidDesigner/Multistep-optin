import React, { useEffect } from 'react';
import UserForm from './components/UserForm';
import './css/App.css';
import './css/Responsive.css';

function App() {
  useEffect(() => {
    var canHover = !(matchMedia('(hover: none)').matches);
    if (canHover) {
      document.body.classList.add('can-hover');
    }
  }, [])
  return (
    <div className="App">
      <UserForm/>
    </div>
  );
}

export default App;
