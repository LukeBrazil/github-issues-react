import React, { Component } from 'react';

 class IssueDetail extends Component {
     state = {
         issueDetails: []
     }

     async componentDidMount() {
        const { issueNumber } = this.props.match.params;
        try {
          const response = await fetch(
            `https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`
          );
          const data = await response.json();
          console.log("Issue Deatils are: ", data)
          this.setState({
            issuesDetails: data,
          });
        } catch (error) {
          this.setState({
            issues: error.message,
          });
        }
      }

    render() {
        const { issueDetails } = this.state
        return (
            <div>
                <h4>{issueDetails.title}</h4>
                <p>{issueDetails.body}</p>
            </div>
        )
    }
}

export default IssueDetail;
