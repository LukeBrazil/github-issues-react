import React from 'react';

// components
import IssueList from './components/IssueList';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className='app-header'>Github Issues List</header>
      <IssueList />
    </div>
  );
}

export default App;
