import type React from "react";
import type { HtmlHTMLAttributes } from "react";
import './button.css';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode;


}

export const Button = ({children, ...props}: ButtonProps) => {

    return(
        <button className='button-custom' {...props}>
            {children}
        </button>
    );
}