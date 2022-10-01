import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  
  
  const onSubmit = (event) => {
    // prevent page reload that can cause the loss of data upon submission
    event.preventDefault();
    // insert data on the persons array with newName as data entry
    setPersons((tempPersons) => [...tempPersons, {name: newName}]);
    // reset form after submission
    
    setNewName("")
    //event.target.reset();
  };

  /* function that handles the changes of name input 
  * targeting the changes of name input value based on new entry as object
  */
  const onChange = (event) => {
    setNewName(() => (event.target.value));
  };
  console.log(newName);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          name:{" "}
          <input onChange={onChange} value={newName} type="text" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => {
        return <div key={index}>{person.name}</div>;
      })}
    </div>
  );
};

export default App;
