import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();

    const skillCategories = [
        {
            title: t('skills.ml'),
            skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Jupyter Notebooks", "Data Analysis"]
        },
        {
            title: t('skills.backend'),
            skills: [".NET 6/8", "ASP.NET Core", "C#", "REST APIs", "Node.js", "TypeScript"]
        },
        {
            title: t('skills.frontend'),
            skills: ["React", "Angular", "TailwindCSS", "HTML/CSS"]
        },
        {
            title: t('skills.database'),
            skills: ["SQL Server", "T-SQL", "Entity Framework", "Dapper"]
        },
        {
            title: t('skills.cloud'),
            skills: ["Azure", "Azure DevOps", "CI/CD", "Git"]
        },
        {
            title: t('skills.principles'),
            skills: ["SOLID", "Clean Architecture", "DDD", "Scrum"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gruv-bg-medium/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        {t('skills.title')} <span className="text-gruv-orange">{t('skills.skills')}</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gruv-bg-medium/50 rounded-2xl p-6 border border-gruv-bg-soft hover:border-gruv-orange/30 transition-all hover:-translate-y-1 shadow-lg hover:shadow-gruv-orange/10"
                            >
                                <h3 className="text-xl font-bold mb-6 text-gruv-fg border-b border-gruv-bg-soft pb-3">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gruv-orange/10 text-gruv-orange text-sm font-medium rounded-full border border-gruv-orange/20 hover:bg-gruv-orange/20 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
