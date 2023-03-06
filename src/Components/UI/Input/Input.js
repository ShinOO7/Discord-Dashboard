const Input = (props) => {
  return (
    <form className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} onChange={props.change} />
    </form>
  );
};

export default Input;
