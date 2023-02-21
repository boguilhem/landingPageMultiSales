import styles from './button.module.scss';

/* 
Props:

title: String
kind: "primary" | "secondary"
*/

const Button = ({ title, kind }) => {
  const generateClassByKind = () => {
    if (kind === 'secondary') return styles.secondary;
    return styles.primary;
  };

  return <button className={`${styles.button} ${generateClassByKind()}`}>{title}</button>;
};

export default Button;
