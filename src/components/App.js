import React, { Component } from "react";
import "./style/App.css";
import "./style/Input.css";
import "./style/Lists.css";
import Input from "./Input";
import ListItem from "./ListItem";
import logo from "./img/logo.png";

class App extends Component {
  state = {
    issue: "",
    priority: false,
    date: "2020-03-07",
    toDo: []
  };
  componentDidMount() {
    const date = new Date();
    const today = `${date.getFullYear()}-${
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    }-${date.getDay() < 10 ? "0" + date.getMonth() : date.getMonth()}`;
    this.setState({
      date: today
    });
  }
  clearState = issue => {
    if (this.state.issue) {
      this.setState(prevState => ({
        issue: "",
        priority: false,
        date: "2020-03-07",
        toDo: prevState.toDo.concat(issue)
      }));
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const issue = {
      id: this.state.toDo.length,
      issue: this.state.issue,
      priority: this.state.priority,
      date: this.state.date,
      toDo: true
    };
    this.clearState(issue);
  };

  handleChange = e => {
    const type = e.target.type;
    if (type === "text") {
      this.setState({
        [e.target.name]: e.target.value
      });
    } else if (type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked
      });
    } else if (type === "date") {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  createIssueElement = e => {
    return (
      <ListItem
        key={e.id}
        id={e.id}
        issue={e.issue}
        priority={e.priority}
        date={e.date}
        toDo={e.toDo}
        change={this.handleChangeElement}
        removeElement={this.handleDeleteElement}
      />
    );
  };
  showIssues = () => {
    const issues = this.state.toDo
      .filter(e => e.toDo === true)
      .map(e => this.createIssueElement(e));
    return issues;
  };

  showDoneIssues = () => {
    const issues = this.state.toDo
      .filter(e => e.toDo === false)
      .map(e => this.createIssueElement(e));
    return issues;
  };

  handleChangeElement = e => {
    const listId = e.target.id;
    const kapa = function(e) {
      if (e.id == listId) {
        return {
          id: e.id,
          issue: e.issue,
          priority: e.priority,
          date: e.date,
          toDo: !e.toDo
        };
      } else {
        return e;
      }
    };
    const items = this.state.toDo.map(kapa);
    this.setState({
      toDo: items
    });
  };

  handleDeleteElement = e => {
    const listId = e.target.id;
    const kapa = function(e) {
      if (e.id == listId) {
        return {
          id: e.id,
          issue: e.issue,
          priority: e.priority,
          date: e.date,
          toDo: "huj"
        };
      } else {
        return e;
      }
    };
    const items = this.state.toDo.map(kapa);
    this.setState({
      toDo: items
    });
  };
  render() {
    return (
      <>
        <header>
          <img src={logo} alt="" />
          <span>ToDo list</span>
        </header>
        <Input
          issue={this.state.issue}
          priority={this.state.priority}
          date={this.state.date}
          submit={this.handleSubmit}
          change={this.handleChange}
        />
        <div className="lists">
          <ul>
            <h2>ToDo Issues</h2>
            {this.showIssues()}
          </ul>
          <ul>
            <h2>Done Issues</h2>
            {this.showDoneIssues()}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
