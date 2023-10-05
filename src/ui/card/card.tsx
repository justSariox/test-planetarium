import React, {ComponentPropsWithoutRef, ReactNode} from 'react';
import s from './card.module.scss'
type CardProps = {
    className?: string;
    children?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Card = ({className, children, ...restProps}: CardProps) =>(
        <div className={`${s.card} ${className}`} {...restProps}>
            {children}
        </div>
)