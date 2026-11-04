type BadgeProps = {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'info';
};

const variantClasses = {
  default: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
  success: 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400',
  warning: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400',
  info: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400',
};

export function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}

export function SkillLevelBadge({ level }: { level: string }) {
  const map: Record<string, 'default' | 'success' | 'warning' | 'info'> = {
    Beginner: 'default',
    Intermediate: 'info',
    Advanced: 'success',
  };
  return <Badge label={level} variant={map[level] ?? 'default'} />;
}
