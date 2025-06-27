import React from "react";

const Box = (props) => {
  //console.log("props ", props)

  const getBorderColor = () => {
    if (!props.result) {
      return "black";
    }

    if (props.title === "You") {
      if (props.result === "WIN") {
        return "green";
      } else if (props.result === "LOSE") {
        return "red";
      } else {
        return "black";
      }
    } else if (props.title === "Computer") {
      if (props.result === "WIN") {
        return "green";
      } else if (props.result === "LOSE") {
        return "red";
      } else {
        return "black";
      }
    }
  };

  return (
    <div className="box" style={{ border: `5px solid ${getBorderColor()}` }}>
      <h1>{props.title} </h1>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
