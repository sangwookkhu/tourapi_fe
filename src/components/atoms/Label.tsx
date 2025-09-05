type LabelProps = {
  content: string;
  className?: string;
};

export default function Label({ content, className }: LabelProps) {
  return <div className={className}>{content}</div>;
}