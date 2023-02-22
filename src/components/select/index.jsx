import styles from './select.module.scss';

const Select = ({ id, name, placeholder, options, onChange, value, required }) => {
  return (
    <select
      id={id}
      name={name}
      className={styles.select}
      onChange={onChange}
      value={value}
      required={required}
    >
      <option value="">{placeholder}</option>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
