import React, { Component } from "react";
import Issue from './Issue';

class IssueList extends Component {
  constructor(props) {
    super(props);
    this.state = { issues: [] };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://api.github.com/repos/facebook/create-react-app/issues"
      );
      const data = await response.json();
      console.log("Issue Array is: ", data)
      this.setState({
        issues: data,
      });
    } catch (error) {
      this.setState({
        issues: error.message,
      });
    }
  }

  render() {
    const { issues } = this.state;
    return ( 
        <>
            <div>
                {
                    issues.map((issue,index) => (
                        <ul>
                            <div>
                            <a href={issue.url}>{issue.url}</a>
                            <li key={issue.id}>{issue.title}</li>
                            <li>{issue.body}</li>
                            </div>
                        </ul>
                    ))
                }
            </div>
        </>    
    );
  }
}

export default IssueList;
