import styles from './button.module.scss';

/* 
Props:

title: String
kind: "primary" | "secondary"
*/

const Button = ({ title, kind, onClick, type }) => {
  const generateClassByKind = () => {
    if (kind === 'secondary') return styles.secondary;
    else if (kind === 'full') return styles.full;

    return styles.primary;
  };

  return (
    <button
      className={`${styles.button} ${generateClassByKind()}`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
