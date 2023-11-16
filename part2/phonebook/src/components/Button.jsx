const Button = ({ text, type, handleClick }) => {
  return (
    <button type={type} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
