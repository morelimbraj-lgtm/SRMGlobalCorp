import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  background?: 'white' | 'subtle' | 'dark';
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, background = 'white', children, className }: SectionProps) => {
  const bgStyles = {
    white: 'bg-neutral-50',
    subtle: 'bg-neutral-100',
    dark: 'bg-primary text-neutral-50',
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-12 md:py-24", // Enforcing >= 48px vertical padding
        bgStyles[background],
        className
      )}
    >
      {children}
    </section>
  );
};
