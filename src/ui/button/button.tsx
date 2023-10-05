import s from './button.module.scss'

import {ComponentPropsWithoutRef, ReactNode} from "react";

export type ButtonProps = {
    children?: ReactNode
    variant?: 'primary' | 'secondary'
    className?: string
    disabled?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button = ({children, variant, className, disabled, ...rest}: ButtonProps) => {
    return (
        <button className={`${s[variant!]} ${className}`} {...rest}>
            {children}
        </button>
    )
}