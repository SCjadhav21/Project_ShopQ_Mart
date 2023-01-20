import React from "react";
export const TodoItem = (props) => {
    return (<div>
      {props.title} - {props.status ? "True" : "False"}
    </div>);
};
