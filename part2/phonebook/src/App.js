import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phonenumber: "" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const onSubmit = (event) => {
    // get only the values of property name in array of objects
    const copy = [...persons];
    const nameArr = copy.map((el) => el.name);
    const personObj = { name: newName, phonenumber: newNumber };

    /* input validations
     */
    // check for empty field
    if (newName.length === 0) {
      alert("You forgot to enter your name!");
      event.preventDefault.reset();
    } else if (newNumber.length === 0) {
      alert("You forgot to enter your phone number!");
      event.preventDefault.reset();
    }

    // check for match entry
    const haveMatch = nameArr.includes(newName);
    const result = haveMatch
      ? alert(`${newName} is already added to phonebook`)
      : setPersons((tempPersons) => [...tempPersons, personObj]); // add only if there is no match for name

    /* phone number
     */
    //const regex2 = /^[\+]?[0-9]{3}[-\s\.]?[0-9]{6}$/g;
    const regex2 = /^\d\d\d[-\s\.]?\d\d\d\d\d\d$/gm
    const regex1 = /^[\+]?[0-9]{2,3}[-\s\.]?[0-9]{2,6}[-\s\.]?[0-9]{6,7}$/im;
    const regex3 = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g
    const regRes1 = regex1.test(newNumber);
    const regRes2 = regex2.test(newNumber);
    const regRes3 = regex3.test(newNumber);
    console.log(regRes1)
    if (!(regRes1) && !(regRes2)){
      alert(`${newNumber} is not valid phone number!`);
      event.preventDefault.reset();
      
    }
    console.log(regRes1, regRes2)
    
    
    // reset form
    setNewName("");
    setNewNumber("");
    // prevent page refresh upon submission
    event.preventDefault()
    ///return [result, validPhoneNum];
  };

  // handle changes on name
  const onChangeName = (event) => {
    setNewName(() => event.target.value);
  };

  // handle changes on phonenumber
  const onChangeNumber = (event) => {
    setNewNumber(() => event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          name: <input onChange={onChangeName} value={newName} type="text" />
          <br />
          number:{" "}
          <input onChange={onChangeNumber} value={newNumber} type="text" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => {
        return (
          <div key={index}>
            {person.name} {person.phonenumber}
          </div>
        );
      })}
    </div>
  );
};

export default App;
