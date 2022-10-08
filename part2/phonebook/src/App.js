import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ search, setSearch }) => {
  const onChange = (event) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };

  return (
    <form>
      <div>
        filter shown with:
        <input type="text" name="filter" value={search} onChange={onChange} />
      </div>
    </form>
  );
};

const Persons = ({ persons, search }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toUpperCase().includes(search.toUpperCase())
        )
        .map((el, index) => {
          return (
            <div key={index}>
              {el.name} {el.number}
            </div>
          );
        })}
    </>
  );
};

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const onChangeName = (event) => {
    const target = event.target.value;
    setNewName(target);
  };

  const onChangeNumber = (event) => {
    const target = event.target.value;
    setNewNumber(target);
  };

  const onSubmit = (event) => {
    if (event) event.preventDefault();
    const namesArr = persons.map((e) => e.name);
    const haveMatch = namesArr.includes(newName);

    const regex2 = /^[\+]?\d\d\d[-\s\.]?\d\d\d\d\d\d$/gm;
    const regex1 = /^[\+]?[0-9]{2,3}[-\s\.]?[0-9]{2,6}[-\s\.]?[0-9]{6,7}$/im;
    const regRes1 = regex1.test(newNumber);
    const regRes2 = regex2.test(newNumber);

    if (newName.length === 0) {
      alert("You forgot to enter your name!");
    } else if (haveMatch) {
      alert(`${newName} is already added to phonebook`);
    } else if (newNumber.length === 0) {
      alert("You forgot to enter your phone number!");
    } else if (!regRes1 && !regRes2) {
      alert(`${newNumber} is not valid phone number!`);
    } else {
      const newNameEntry = { name: newName, number: newNumber };
      setPersons(persons.concat(newNameEntry));
    }

    setNewName("");
    setNewNumber("");
  };
  console.log(persons);
  return (
    <>
      <form onSubmit={onSubmit} noValidate>
        <div>
          name:{" "}
          <input
            type="text"
            name="name"
            onChange={onChangeName}
            value={newName || ""}
            required
          />
          <br />
          number:{" "}
          <input
            type="text"
            name="number"
            onChange={onChangeNumber}
            value={newNumber || ""}
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

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const urlDB = "http://127.0.0.1:3001/persons";

  useEffect(() => {
    axios.get(urlDB).then((res) => {
      const init = res.data;
      console.log(init);
      setPersons(init);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} setSearch={setSearch} />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <h3>Numbers</h3>

      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
