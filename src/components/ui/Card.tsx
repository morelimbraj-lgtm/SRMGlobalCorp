import { cn } from "@/lib/utils";

interface CardProps {
  variant?: 'default' | 'bordered' | 'glass';
  padding?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Card = ({
  variant = 'default',
  padding = 'md',
  children,
  className,
}: CardProps) => {
  const variants = {
    default: "bg-neutral-100 border border-transparent",
    bordered: "border border-neutral-200 bg-background",
    glass: "bg-background/80 backdrop-blur-md border border-neutral-200",
  };

  const paddings = {
    sm: "p-4",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-12",
  };

  return (
    <div className={cn("rounded-sm", variants[variant], paddings[padding], className)}>
      {children}
    </div>
  );
};
