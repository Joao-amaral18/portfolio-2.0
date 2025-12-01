import { motion } from 'framer-motion';
import { Code, Database, Server, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 bg-gruv-bg-medium/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        {t('about.title')} <span className="text-gruv-orange">{t('about.me')}</span>
                    </h2>

                    <div className="bg-gruv-bg-medium/50 p-8 rounded-2xl border border-gruv-bg-soft shadow-xl mb-12">
                        <p className="text-lg text-gruv-gray leading-relaxed mb-6">
                            {t('about.p1')}
                        </p>
                        <p className="text-lg text-gruv-gray leading-relaxed">
                            {t('about.p2')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {[
                            { icon: <Code size={32} />, title: t('about.backend'), desc: t('about.desc.backend') },
                            { icon: <Database size={32} />, title: t('about.database'), desc: t('about.desc.database') },
                            { icon: <Server size={32} />, title: t('about.devops'), desc: t('about.desc.devops') },
                            { icon: <Brain size={32} />, title: t('about.ai'), desc: t('about.desc.ai') },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="p-6 bg-gruv-bg-medium/30 rounded-xl border border-gruv-bg-soft/50 hover:border-gruv-orange/50 hover:bg-gruv-bg-medium/80 transition-all group"
                            >
                                <div className="text-gruv-orange mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gruv-gray text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tech Stack Marquee */}
                    <div className="relative flex overflow-hidden py-10 group">
                        <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-gruv-bg-hard/30 via-transparent to-gruv-bg-hard/30"></div>

                        <motion.div
                            className="flex gap-8 whitespace-nowrap"
                            animate={{ x: [0, -1035] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 20
                            }}
                        >
                            {[...techStack, ...techStack].map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 bg-gruv-bg-medium/50 border border-gruv-bg-soft/50 rounded-full text-gruv-gray text-sm font-medium hover:border-gruv-orange/30 hover:bg-gruv-orange/10 transition-colors"
                                >
                                    <span className="text-gruv-orange">{tech.icon}</span>
                                    {tech.name}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const techStack = [
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Next.js", icon: "▲" },
    { name: "GraphQL", icon: "◈" },
    { name: "Framer Motion", icon: "🎬" },
    { name: "Git", icon: "📦" },
];

export default About;
