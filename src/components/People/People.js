import React, { useEffect, useState } from "react";
import Person from "../Person/Person";
import PersonCart from "../PersonCart/PersonCart";

const People = () => {
  const [allPerson, setAllPerson] = useState([]);
  useEffect(() => {
    fetch("./allPeopleData.JSON")
      .then((res) => res.json())
      .then((data) => setAllPerson(data));
  }, []);

  const [person, setPerson] = useState([]);
  const HandleMember = (persons) => {
    const newMember = [...person, persons];
    setPerson(newMember);
  };
  return (
    <div className="row">
      <div className="person-container col-md-9 ps-5 row row-cols-md-3">
        {allPerson.map((person) => (
          <Person key={person.id} person={person} handleMember={HandleMember}></Person>
        ))}
      </div>

      <div className="personCart-container col-md-3 text-center">
        <h3 className="text-dark fw-bolder">Tour Member: {person.length} </h3>
        <h4 className="text-warning fw-bold">Total Cost: $ </h4>

        {person.map((man) => (
          <PersonCart key={man.name} man={man}></PersonCart>
        ))}
      </div>
    </div>
  );
};

export default People;
