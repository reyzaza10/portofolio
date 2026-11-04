type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
