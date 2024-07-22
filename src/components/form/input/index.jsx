import cn from "classnames";
import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef((props, ref) => {
  const {
    parentInlineStyle,
    errorMessage,
    showError,
    children,
    onKeyDown,
    parentClass,
    inputExraClass,
    disabled,
    ...restInputProps
  } = props;
  return (
    <div
      className={cn(styles.inputContainer, parentClass)}
      style={parentInlineStyle}
    >
      <div
        className={cn(
          styles.inputWrapper,
          inputExraClass,
          disabled && styles.disabled
        )}
      >
        <input
          className={styles.input}
          ref={ref}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              e.preventDefault();
            }
            onKeyDown && onKeyDown(e);
          }}
          onWheel={(e) => {
            e.target.blur();
          }}
          disabled={disabled}
          {...restInputProps}
        />
        {children}
      </div>
      {showError && <p className="errorMessage">{errorMessage}</p>}
    </div>
  );
});
