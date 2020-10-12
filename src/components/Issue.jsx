import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Issue = (props) => {
  const { issue } = props;
  return (
    <Router>
    <li>
      Title: {issue.number}
      <a href={issue.url} target="_blank">
       Link:  {issue.url}
      </a>
    </li>
    </Router>
  );
};

export default Issue;
