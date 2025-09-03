type ButtonProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
