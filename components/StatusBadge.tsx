type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return <span className="statusBadge">{status.replaceAll("_", " ")}</span>;
}

