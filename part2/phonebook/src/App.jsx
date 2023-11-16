import { useState, useEffect } from "react";
import personService from "./services/personService";

import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import PersonForm from "./components/PersonForm";
import Content from "./components/Content";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [notifMessage, setNotifMessage] = useState(null);

  useEffect(() => {
    personService.getPerson().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const nameCheck = persons.find(
      (person) => person.name.toLowerCase() === nameObject.name.toLowerCase()
    );

    const existingName = { ...nameCheck, number: newNumber };

    if (nameCheck && nameCheck.number === newNumber) {
      alert(`${newName} is already added to phonebook`);
    } else if (nameCheck && nameCheck.number !== newNumber) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService
          .updatePerson(existingName.id, existingName)
          .then(() => {
            setPersons(
              persons.map((person) =>
                person.id !== existingName.id ? person : existingName
              )
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setNotifMessage(
              `Information of ${existingName.name} has already been removed from server, reload the page`
            );
            setTimeout(() => {
              setNotifMessage(null);
            }, 5000);
          });
      }
    } else {
      personService.createPerson(nameObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setNotifMessage(`Added ${returnedPerson.name} to the phonebook`);
        setTimeout(() => {
          setNotifMessage(null);
        }, 5000);
      });
    }
  };

  const deletePerson = (id) => {
    const person = persons.find((name) => name.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          setNotifMessage(
            `Information of ${person.name} has already been removed from server, reload the page`
          );
          setTimeout(() => {
            setNotifMessage(null);
          }, 5000);
        });
    }
  };

  const showFiltered = persons.map((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )
    ? persons.filter((person) => person.name.toLowerCase().includes(filterName))
    : persons;

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <div>
      <Notification message={notifMessage} />
      <Header text="Phonebook" />
      <SearchFilter
        text="filter shown with:"
        value={filterName}
        handleChange={handleFilterChange}
      />
      <Header text="Add a new" />
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Header text="Numbers" />
      <Content persons={showFiltered} onDelete={deletePerson} />
    </div>
  );
};

export default App;
