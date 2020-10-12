import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
