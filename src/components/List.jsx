import React from "react";

import "./styles/List.css";

const List = (props) => {
  const listHeading = props.heading;
  const listElements = props.elements;

  return (
    <div className="list">
      <h3>{listHeading}</h3>
      <ul>
        {listElements.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
