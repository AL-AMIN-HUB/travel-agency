import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import "./Person.css";

const Person = (props) => {
  // destructuring
  const { name, profession, age, country, profileThumb, salary } = props.person;

  // font awesome icon handle
  const memberIcon = <FontAwesomeIcon icon={faUserPlus} />;
  const addedIcon = <FontAwesomeIcon icon={faUserMinus} />;
  return (
    <div className="cols-1 cols-md-3 cols-lg-3 g-4">
      <div className="col">
        <div className="card border-0 shadow card-style">
          <div>
            <img src={profileThumb} className="card-img-top p-5 w-75 d-block mx-auto" alt="..." />
          </div>
          <div className="card-body">
            <h4 className="card-title">Name: {name} </h4>
            <p className="card-text lead fs-4">Profession: {profession}</p>
            <p className="card-text lead fs-4">Age: {age}</p>
            <p className="card-text lead fs-4">Country: {country}</p>
            <p className="card-text lead fs-4">Salary: ${salary}</p>
            {/* I have given a logic so that no button can be clicked twice */}
            {props.person.isAdded ? (
              <button className="btn btn-danger fs-4"> {addedIcon} Already added</button>
            ) : (
              <button onClick={() => props.handleMember(props.person)} className="btn btn-warning fs-4">
                {memberIcon} Add to member
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
