'use client'

import {ChangeEvent, ComponentPropsWithoutRef, forwardRef} from "react";

import s from './input.module.scss'
import {Button} from "@/ui/button/button";

export type InputProps = {
    onChangeValue?: (value: string) => void;
    label?: string;
    className?: string;
    onButtonClick?: () => void;
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({
         onChangeValue,
         value,
         onChange,
         label,
         className      ,
         name,
         maxLength,
         children,
         ...restProps}, ref) => {
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e)
            onChangeValue?.(e.currentTarget.value)
        }

        return (
            <div className={s.inputWrapper}>
                <label className={s.label}>{label}</label>
                <div className={s.inputContainer}>
                    <input maxLength={maxLength} name={name} className={`${s.input} ${className}`} placeholder={restProps.placeholder} type={'text'} onChange={onChangeHandler} ref={ref} value={value} />
                    {children && <Button>{children}</Button>}
                </div>
            </div>
        )
    }
)

Input.displayName = "Input"
