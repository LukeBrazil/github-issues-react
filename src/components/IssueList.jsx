import React, { Component } from "react";
import Issue from './Issue';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


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
            <ul>
                {
                    issues.map((issue,index) => (
                        <Issue key={issue.id} issue={issue}/>
                    ))
                }
            </ul>
        </>    
    );
  }
}

export default IssueList;
