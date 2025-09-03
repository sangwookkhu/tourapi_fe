type InputProps = React.ComponentPropsWithoutRef<"input">;

export default function Input({ className, ...rest }: InputProps) {
  return <input className={className} {...rest} />;
}
