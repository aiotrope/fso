import "../styles.css";
import { useState } from "react";

import personsService from "./services/persons";
import persons from "./services/persons";

const DeleteButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const targetObj = props.persons.find((n) => n.id === props.id);
  const { updatePersonsCollection } = props;

  //console.log(person)
  const onClick = (event) => {
    //if (event) event.preventDefault();
    const target = event.target.value;
    //console.log(target);
    setIsClicked(true);
    const confirm = window.confirm(`Delete ${props.targetName}?`);
    console.log(confirm);
    if (confirm)
      personsService
        .omit(target)
        .then((returedPerson) => {
          updatePersonsCollection(returedPerson);
          //console.log(returnedPerson.data); {}
          /* setPersons(
            persons.map((person) => (person.id !== id ? person : ""))
          );  */
          //setPersons([...persons, returedPerson]);
        })
        .catch((e) => {
          //setPersons(persons.filter((person) => person.id !== id));
          console.log(e);
        });
  };

  return (
    <>
      <button value={props.id} onClick={onClick} className="button">
        delete
      </button>
    </>
  );
};

export const Persons = ({
  persons,
  search,
  setPersons,
  updatePersonsCollection,
}) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toUpperCase().includes(search.toUpperCase())
        )
        .map((el, index) => {
          return (
            <div key={index}>
              {el.name} {el.number}{" "}
              <DeleteButton
                id={el.id}
                targetName={el.name}
                persons={persons}
                setPersons={setPersons}
                
              />
            </div>
          );
        })}
    </>
  );
};
