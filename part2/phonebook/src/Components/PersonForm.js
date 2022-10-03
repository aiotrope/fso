import { useState } from "react";

const PersonForm = (props) => {
  // props that accept changes and pass to App.js
  const { updatePersonsCollection } = props;
  // initial state of object eventually be inserted to array as newEntry in App.js
  const initialEntryState = { name: "", phonenumber: "" };
  const [newEntry, setNewEntry] = useState(initialEntryState);
  // destructure and combine the newName and newNumber variable before as one newEntry
  const { name, phonenumber } = newEntry;
  // array data for matching and comparison only
  const [tempArr, setTempArr] = useState([]);

  const onSubmit = (event) => {
    if (event) event.preventDefault();

    // extract values of name property only as an array
    const copy = [...tempArr];
    const namesArr = copy.map((e) => e.name);
    // check for match entry compare to name fron newEntry
    const haveMatch = namesArr.includes(name);

    const regex2 = /^[\+]?\d\d\d[-\s\.]?\d\d\d\d\d\d$/gm; // regex for testing phonenumber e.g: 123-123456 optional + @ start
    const regex1 = /^[\+]?[0-9]{2,3}[-\s\.]?[0-9]{2,6}[-\s\.]?[0-9]{6,7}$/im; // regex for testing phonenumber e.g: 12-12-1234567 + optional + @ start
    const regRes1 = regex1.test(phonenumber);
    const regRes2 = regex2.test(phonenumber);

    if (name.length === 0) {
      alert("You forgot to enter your name!");
    } else if (haveMatch || name === "Arto Hellas") {
      alert(`${name} is already added to phonebook`);
    } else if (phonenumber.length === 0) {
      alert("You forgot to enter your phone number!");
    } else if (!regRes1 && !regRes2) {
      alert(`${phonenumber} is not valid phone number!`);
    } else {
      // if pass update newEntry
      updatePersonsCollection(newEntry);
      setTempArr((tempArr) => [...tempArr, newEntry]);
    }

    // reset form
    setNewEntry("");
  };

  const onChange = (event) => {
    // insert newEntry to object newEntry
    event.persist();
    setNewEntry({ ...newEntry, [event.target.name]: event.target.value });
  };

  //console.log(copy)
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
            name="phonenumber"
            onChange={onChange}
            value={phonenumber || ""}
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

export default PersonForm;
