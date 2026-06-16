import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button className={cn('btn', `btn-${variant}`, className)} {...props}>
      {children}
    </button>
  );
}
