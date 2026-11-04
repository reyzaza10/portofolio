import { FadeIn, Stagger, StaggerItem } from '@/components/ui/Motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillLevelBadge } from '@/components/ui/Badge';
import { skills, type SkillCategory } from '@/data/skills';

const categories: SkillCategory[] = ['Technical Skills', 'Tools & Technologies', 'Soft Skills'];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-surface-light dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Skills"
            subtitle="Kemampuan teknis dan non-teknis yang terus saya kembangkan."
          />
        </FadeIn>

        <div className="space-y-10">
          {categories.map((cat) => {
            const categorySkills = skills.filter((s) => s.category === cat);
            return (
              <div key={cat}>
                <FadeIn>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                    {cat}
                  </h3>
                </FadeIn>
                <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {categorySkills.map((skill) => (
                    <StaggerItem key={skill.id}>
                      <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-medium text-gray-900 dark:text-white text-sm">{skill.name}</span>
                          <SkillLevelBadge level={skill.level} />
                        </div>
                        {skill.description && (
                          <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
