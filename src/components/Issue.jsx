import React from 'react';
import IssueList from './IssueList';

const Issue = (props) => {
    const { issues } = props;
    return (
        <div>
            <p><IssueList issues={issues}>{issues.title}</IssueList></p>
        </div>
    )
}

export default Issue;
