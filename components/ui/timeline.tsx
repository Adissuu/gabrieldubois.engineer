import * as React from 'react';
import { cn } from '../../utils/cn';
import { Badge } from './badge';

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
Timeline.displayName = 'Timeline';

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.LiHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('relative pb-8 pl-8', className)}
    {...props}
  />
));
TimelineItem.displayName = 'TimelineItem';

const TimelineHeader = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-foreground group-last:before:hidden',
      className
    )}
    {...props}
  />
));
TimelineHeader.displayName = 'TimelineHeader';

import Link from 'next/link';

const TimelineTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { href?: string }
>(({ className, children, href, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-xl font-bold text-primary', className)}
    {...props}
  >
    {href ? (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block group"
      >
        {/* Text */}
        <span className="relative">{children}</span>
        {/* Underline */}
        <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
      </Link>
    ) : (
      <span>{children}</span>
    )}
  </div>
));
TimelineTitle.displayName = 'TimelineTitle';

const TimelineTime = ({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof Badge>) => {
  return (
    <Badge
      className={cn(
        'left-0 mb-3 inline-flex h-6 w-44 translate-y-0.5 items-center justify-center text-xs font-semibold uppercase bg-[#a2a7fb] hover:bg-opacity-40',
        className
      )}
      variant={variant}
      {...props}
    >
      {props.children}
    </Badge>
  );
};
TimelineTime.displayName = 'TimelineTime';

const TimelineDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-muted-foreground text-justify', className)}
    {...props}
  />
));
TimelineDescription.displayName = 'TimelineDescription';

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTime,
  TimelineTitle,
  TimelineDescription,
};