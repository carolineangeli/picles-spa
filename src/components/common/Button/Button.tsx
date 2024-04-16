import { ButtonHTMLAttributes } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button({ children, ...rest }: IButton) {
    return <button {...rest}>{children}</button>
}