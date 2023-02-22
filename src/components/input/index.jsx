import styles from './input.module.scss';

const Input = ({
  id,
  name,
  type,
  placeholder,
  pattern,
  required,
  onBlur,
  onChange,
  value,
}) => {
  return (
    <input
      className={styles.input}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
