type LabelProps = {
  content: string;
};

export default function Label({ content }: LabelProps) {
  return <div>{content}</div>;
}
