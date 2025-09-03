type IconProps = React.ComponentPropsWithoutRef<"img">;

export default function Icon({ ...rest }: IconProps) {
  return (
    <span>
      <img {...rest} />
    </span>
  );
}
