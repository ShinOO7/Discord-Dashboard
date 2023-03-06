const InputList = (props) => {
  return (
    <form className={props.className}>
      <input list={props.list} placeholder="Select" />
      <datalist id={props.list}>
        {props.options.map((option, index) => {
          return (
            <option key={`${option}-${index}`} value={`${option}`}></option>
          );
        })}
      </datalist>
    </form>
  );
};

export default InputList;
