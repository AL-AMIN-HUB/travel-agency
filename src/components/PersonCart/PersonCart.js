import React from "react";

const PersonCart = (props) => {
  const { person } = props;
  // handle total cost
  let total = 0;
  for (const cost of person) {
    total = total + cost.salary;
  }
  return (
    <div className="">
      <h4 className="text-white">${total}</h4>
      <p className="text-white text-start fw-bold fs-4">
        {person.map((man) => (
          <Name name={man.name}></Name>
        ))}
      </p>
    </div>
  );
};

// member name added after button click
const Name = (props) => {
  return (
    <ul className="border-bottom">
      <li>{props.name}</li>{" "}
    </ul>
  );
};

export default PersonCart;
