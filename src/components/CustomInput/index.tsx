const CustomInput = ({
  type,
  name,
  placeholder,
  classname,
}: {
  type?: string;
  name?: string;
  placeholder?: string;
  classname?: string;
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
      />
    </div>
  );
};

export default CustomInput;
