interface EmptyStateProps {
  title: string;
}

const EmptyState = ({ title }: EmptyStateProps) => {
  return <div>{title}</div>;
};

export default EmptyState;
