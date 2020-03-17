import React, { Component } from "react";

const Input = props => {
  const { issue, priority, date, submit, change } = props;
  return (
    <form>
      <label htmlFor="issue">
        <input
          type="text"
          name="issue"
          value={issue}
          onChange={change}
          className="issue"
        />
      </label>
      <label htmlFor="priority" style={{ position: "relative" }}>
        <label htmlFor="checkbox" className="checkboxLabel">
          <input
            className="priority"
            type="checkbox"
            name="priority"
            id=""
            checked={priority}
            onChange={change}
          />
          <span className="checkboxCustom"></span>
        </label>
        <span>Priority</span>
      </label>
      <label htmlFor="date" className="dateLabel">
        Deadline:{" "}
        <input type="date" name="date" value={date} onChange={change} />
      </label>
      <label htmlFor="button">
        <button onClick={submit}>
          <p>Dodaj</p>
        </button>
      </label>
    </form>
  );
};

export default Input;
