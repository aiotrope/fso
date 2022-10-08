import { useState, useEffect, useRef } from "react";
import personsService from "./services/persons"; // services
import "./styles.css";

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

const DeleteButton = ({ id, setPersons, targetName }) => {
  const [val, setVal] = useState(""); // for triggering update of state only

  // for triggering update of state only
  const previousValue = useRef("");

  useEffect(() => {
    // get all name/number entries
    personsService
      .getAll()
      .then((res) => {
        const init = res.data;
        //console.log(init);
        setPersons(init);
        previousValue.current = val;
      })
      .catch((e) => console.log(e.message));
  }, [val]);

  const onClick = (event) => {
    const target = event.target.value;
    //console.log(target);

    const confirm = window.confirm(`Delete ${targetName}?`);
    console.log(confirm);
    if (confirm)
      personsService
        .omit(target)
        .then((returedPerson) => {
          //setCount((c) => c + 1);
          setVal(returedPerson.data);
          console.log(returedPerson.data);
        })
        .catch((e) => {
          console.log(e.message);
          alert(`Problem deleting resource: ${e.message}`);
        });
  };

  return (
    <>
      <button value={id} onClick={onClick} className="button">
        delete
      </button>
    </>
  );
};

const Persons = ({ persons, search, setPersons }) => {
  useEffect(() => {
    // get all name/number entries
    personsService
      .getAll()
      .then((res) => {
        const init = res.data;
        console.log(init);
        setPersons(init);
      })
      .catch((e) => console.log(e.message));
  }, []);
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

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setSuccessMsg,
  setErrorMsg,
}) => {
  const onChangeName = (event) => {
    event.persist();
    const target = event.target.value;
    setNewName(target);
  };

  const onChangeNumber = (event) => {
    event.persist();
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
      const targetId1 = persons
        .filter((p) => p.name === newName)
        .map((p) => p.id);
      const targetId = targetId1.toString();
      //const personID = persons.map((p) => p.id === targetId);
      const updatedEntry = { name: newName, number: newNumber, id: targetId };
      // put request
      personsService
        .update(targetId, updatedEntry)
        .then((response) => {
          //console.log(returnedPerson);
          setPersons(persons.concat(response.data));
          console.log(response.data);
          // handle if resource not yet deleted
          if (response.status === 200) {
            window.confirm(
              `${newName} is already added to phonebook, replace the old number with a new one?`
            );

            setSuccessMsg(`${newName}'s updated phone number: ${newNumber}`);
            setTimeout(() => {
              setSuccessMsg(null);
            }, 5000);
          }
        })
        .catch((err) => {
          // handle if resource already deleted
          if (err.response.status === 404) {
            setErrorMsg(
              `Information of ${newName} has already been removed from server`
            );
            setTimeout(() => {
              setErrorMsg(null);
            }, 5000);
          }
          console.log(err);
          setPersons(persons.filter((p) => p.id !== targetId));
        });
    } else if (newNumber.length === 0) {
      alert("You forgot to enter your phone number!");
    } else if (!regRes1 && !regRes2) {
      alert(`${newNumber} is not valid phone number!`);
    } else {
      // post new entries on the backend
      const newEntry = { name: newName, number: newNumber };

      personsService
        .create(newEntry)
        .then((response) => {
          console.log(response.status);
          setPersons(persons.concat(newEntry));
          if (response.status === 201) {
            setSuccessMsg(`Added ${newName}`);
            setTimeout(() => {
              setSuccessMsg(null);
            }, 5000);
          }
        })
        .catch((err) => {
          alert(`Problem creating resource ${err.message}`);
          console.log(err.message);
        });
    }

    setNewName("");
    setNewNumber("");
  };

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
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>

      {successMsg && <div className="success">{successMsg}</div>}
      {errorMsg && <div className="error">{errorMsg}</div>}

      <Filter search={search} setSearch={setSearch} />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        search={search}
        setSuccessMsg={setSuccessMsg}
        setErrorMsg={setErrorMsg}
      />
      <h3>Numbers</h3>

      <Persons persons={persons} search={search} setPersons={setPersons} />
    </div>
  );
};

export default App;
