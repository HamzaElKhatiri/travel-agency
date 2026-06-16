import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: 'dark' | 'light' | 'glass';
};

export default function Card({ children, className, tone = 'dark', ...props }: CardProps) {
  return (
    <article className={cn('card', `card-${tone}`, className)} {...props}>
      {children}
    </article>
  );
}
