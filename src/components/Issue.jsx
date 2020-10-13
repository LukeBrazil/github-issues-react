import React from "react";
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


const Issue = (props) => {
  const { issues } = props;
  const { issue_number } = useParams();
  const issue = issues.find((issue) => {return issue.number === Number(issue_number) ? issue : null;})
  return (
    <>
      <h2>{issue.title}</h2>
      <ReactMarkdown source={issue.body} escapeHtml={false} />
    </>
  );
};

export default Issue;
