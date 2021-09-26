import React from "react";

const PersonCart = (props) => {
  const { man } = props;

  return (
    <div>
      <h4 className="text-white">{man.salary}</h4>
      <p className="text-white fw-bold fs-4"> {man.name} </p>
    </div>
  );
};

export default PersonCart;
