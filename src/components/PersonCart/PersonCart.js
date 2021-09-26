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
      <div className=" text-start fw-bold fs-4">
        {person.map((man) => (
          <Name key={man.salary} name={man.name} img={man.profileThumb} profession={man.profession}></Name>
        ))}
      </div>
    </div>
  );
};

// member name added after button click
const Name = (props) => {
  return (
    <div className="card mb-3 d-flex align-items-center justify-content-center py-2">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title mt-3">{props.name}</h4>
            <h5 className="card-title mt-3 lead">{props.profession}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCart;
