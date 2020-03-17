import React from "react";

const ListItem = props => {
  const { id, issue, priority, date, toDo, change, removeElement } = props;
  return (
    <li id={id} className={priority ? "priority clearfix" : "clearfix"}>
      <span>
        {priority ? (
          <p style={{ color: "rgb(235, 118, 118)", fontSize: "16px" }}>
            !!! IMPORTANT !!!
          </p>
        ) : (
          ""
        )}
        {issue}
      </span>
      <div>
        <span>
          Deadline: <p>{date}</p>
        </span>
        <button onClick={change} id={id}>
          {toDo ? "Zadanie wykonane" : "Zadanie nie wykonane"}
        </button>
        <button onClick={removeElement} id={id}>
          x
        </button>
      </div>
    </li>
  );
};

export default ListItem;
