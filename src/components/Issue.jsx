import React from "react";
import { useParams } from 'react-router-dom';
const Issue = (props) => {
  const { issues } = props;
  const { issue_number } = useParams();
  const issue = issues.find((issue) => {return issue.number === Number(issue_number) ? issue : null;})
  return (
    <>
      <h2>{issue.title}</h2>
      <p>
        <a href={issue.url}>{issue.url}</a>
      </p>
      <p>{issue.body}</p>
      <h2>Issue Page</h2>
    </>
  );
};

export default Issue;
