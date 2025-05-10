
import React from 'react';
import { cn } from '@/lib/utils';

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  container?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, container = true, size = 'lg', children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('w-full py-12 md:py-16 lg:py-20', className)}
        {...props}
      >
        {container ? (
          <div
            className={cn(
              'mx-auto px-4',
              size === 'sm' && 'max-w-3xl',
              size === 'md' && 'max-w-4xl',
              size === 'lg' && 'max-w-5xl',
              size === 'xl' && 'max-w-6xl',
              size === 'full' && 'max-w-full'
            )}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };
