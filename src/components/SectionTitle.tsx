import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  icon?: ElementType;
}

export function SectionTitle({ as: Tag = 'h2', icon: Icon, className, children, ...props }: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "text-3xl md:text-4xl font-bold text-primary mb-8 md:mb-12 text-center flex items-center justify-center gap-3",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="h-8 w-8 md:h-10 md:w-10 text-accent" />}
      {children}
    </Tag>
  );
}
