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
  return (
    <div className="row">
      <div className="person-container col-md-9 ps-5 row row-cols-md-3">
        {allPerson.map((person) => (
          <Person key={person.id} person={person}></Person>
        ))}
      </div>

      <div className="personCart-container col-md-3 text-center">
        <PersonCart></PersonCart>
      </div>
    </div>
  );
};

export default People;
