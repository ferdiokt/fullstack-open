import Button from "./Button";

const Content = ({ persons, onDelete }) => {
  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}{" "}
          <Button
            text="delete"
            type="submit"
            handleClick={() => onDelete(person.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Content;
