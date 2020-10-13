import React, { Component } from "react";
import Issue from "./Issue";
import { Route, Link } from "react-router-dom";

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
      console.log("Issue Array is: ", data);
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
        {!!issues.length ? (
          <>
            <h1>Github Issue List</h1>
            <Route exact path="/">
                <ul>
              {issues.map((issue) => {
                return (
                  <li key={issue.id}>
                    {issue.title}
                    <Link to={`/issue/${issue.number}`}>View Details</Link>
                  </li>
                );
              })}
              </ul>
            </Route>
            <Route path={`/issue/:issue_number`}>
                <Link to='/'>Return to List!</Link>
                <Issue issues={issues} />
            </Route>
          </>
        ) : (
          <p>Fetching issues...</p>
        )}
      </>
    );
  }
}

export default IssueList;
