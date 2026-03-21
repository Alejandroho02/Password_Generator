import { forwardRef, type InputHTMLAttributes } from "react";
import "./input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", error, ...props }, ref) => {
    return (
      <div className="section_input">
        {label && <label className="label_style">{label}</label>}

        <input
          ref={ref}
          className={`input_style ${error ? "input_error" : ""}`}
          type={type}
          {...props}
        />

        {error && <span className="input_error_message">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";