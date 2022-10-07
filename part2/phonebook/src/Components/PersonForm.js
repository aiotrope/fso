import { useState } from "react";
//import personsService from "./services/persons";

export const PersonForm = (props) => {
  // props that accept changes and pass to App.js
  const { updatePersonsCollection } = props;
  // initial state of object eventually be inserted to array as newEntry in App.js
  const initialEntryState = { name: "", number: "" };
  const [newEntry, setNewEntry] = useState(initialEntryState);
  // destructure and combine the newName and newNumber variable before as one newEntry
  const { name, number } = newEntry;

  // persons props from base component
  const persons = props.persons;

  const onSubmit = (event) => {
    if (event) event.preventDefault();
    /* Validation rules
     *check for match entry compare to name fron newEntry
     */
    const namesArr = persons.map((e) => e.name);

    const haveMatch = namesArr.includes(name);

    const regex2 = /^[\+]?\d\d\d[-\s\.]?\d\d\d\d\d\d$/gm; // regex for testing phonenumber e.g: 123-123456 optional + @ start
    const regex1 = /^[\+]?[0-9]{2,3}[-\s\.]?[0-9]{2,6}[-\s\.]?[0-9]{6,7}$/im; // regex for testing phonenumber e.g: 12-12-1234567 + optional + @ start
    const regRes1 = regex1.test(number);
    const regRes2 = regex2.test(number);

    if (name.length === 0) {
      alert("You forgot to enter your name!");
    } else if (haveMatch || name === "Arto Hellas") {
      alert(`${name} is already added to phonebook`);
    } else if (number.length === 0) {
      alert("You forgot to enter your phone number!");
    } else if (!regRes1 && !regRes2) {
      alert(`${number} is not valid phone number!`);
    } else {
      // if pass update newEntry
      updatePersonsCollection(newEntry);
    }

    // reset form
    setNewEntry("");
  };

  const onChange = (event) => {
    // insert newEntry to object newEntry
    event.persist();
    setNewEntry({ ...newEntry, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={onSubmit} noValidate>
        <div>
          name:{" "}
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={name || ""}
            required
          />
          <br />
          number:{" "}
          <input
            type="text"
            name="number"
            onChange={onChange}
            value={number || ""}
            required
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};
