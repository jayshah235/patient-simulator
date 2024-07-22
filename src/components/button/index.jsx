import styles from "./style.module.scss";
import cn from "classnames";

const Button = (props) => {
  const { label, className, ...restButtonProps } = props;
  return (
    <button className={cn(styles.button, className)} {...restButtonProps}>
      {label}
    </button>
  );
};

export default Button;
