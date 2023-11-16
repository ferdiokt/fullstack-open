import Button from "./Button";
import Input from "./Input";

const PersonForm = ({
  onSubmit,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Input text="Name:" value={newName} handleChange={handleNameChange} />
      <Input
        text="Number:"
        value={newNumber}
        handleChange={handleNumberChange}
      />
      <div>
        <Button text="add" type="submit" handleClick={onSubmit} />
      </div>
    </form>
  );
};

export default PersonForm;
