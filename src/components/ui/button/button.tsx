import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-background shadow hover:bg-background/20 hover:opacity-90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-primary shadow-sm hover:bg-transparent hover:text-foreground',
        secondary: 'bg-secondary text-text-charcoal shadow-sm hover:bg-background/80',
        ghost: 'hover:bg-foreground hover:text-foreground',
        link: 'text-text-charcoal underline-offset-4 hover:opacity-60 ',
      },
      size: {
        default: 'h-9 px-5 py-6 font-normal',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
        icon: 'h-9 w-9',
      },
      rounded: {
        default: 'rounded-md',
        small: 'rounded-lg',
        large: 'rounded-2xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, rounded, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? 'span' : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, className, rounded }))} ref={ref} {...props} />;
});
BaseButton.displayName = 'BaseButton';

export { BaseButton, buttonVariants };
