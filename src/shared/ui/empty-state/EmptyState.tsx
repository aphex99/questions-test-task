interface EmptyStateProps {
  title: string;
}

export const EmptyState = ({ title }: EmptyStateProps) => {
  return <div>{title}</div>;
};
