type EmptyStateProps = {
  title: string;
  description?: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="py-16 text-center">
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <span className="text-gray-400 text-xl">—</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 font-medium">{title}</p>
      {description && (
        <p className="mt-1 text-gray-400 dark:text-gray-500 text-sm max-w-xs mx-auto">{description}</p>
      )}
    </div>
  );
}
