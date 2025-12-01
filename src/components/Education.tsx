import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
    const { t } = useLanguage();

    return (
        <section id="education" className="py-20 bg-gruv-bg-hard">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        {t('edu.title')} <span className="text-gruv-orange">{t('edu.certifications')}</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Education Column */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <GraduationCap className="text-gruv-orange" size={28} />
                                <h3 className="text-2xl font-bold">{t('edu.education')}</h3>
                            </div>

                            <div className="space-y-8">
                                {[
                                    {
                                        school: "PUC Minas",
                                        degree: t('edu.degree1'),
                                        period: t('edu.period1')
                                    },
                                    {
                                        school: "Multivix",
                                        degree: t('edu.degree2'),
                                        period: "2022 – 2024"
                                    },
                                    {
                                        school: "IFES",
                                        degree: t('edu.degree3'),
                                        period: "2017 – 2019"
                                    }
                                ].map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-gruv-bg-medium/30 p-6 rounded-xl border border-gruv-bg-soft/50 hover:border-gruv-orange/50 transition-colors"
                                    >
                                        <h4 className="text-lg font-bold text-gruv-fg mb-1">{edu.school}</h4>
                                        <p className="text-gruv-orange mb-2">{edu.degree}</p>
                                        <p className="text-sm text-gruv-gray">{edu.period}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications Column */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <Award className="text-gruv-orange" size={28} />
                                <h3 className="text-2xl font-bold">{t('edu.certifications')}</h3>
                            </div>

                            <div className="space-y-4">
                                {[
                                    "Azure Fundamentals (AZ-900)",
                                    "Azure AI Fundamentals (AI-900)",
                                    "Scrum Fundamentals Certified (SFC)",
                                    "EFSET English Certificate (C2 Proficient)"
                                ].map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3 p-4 bg-gruv-bg-medium/30 rounded-lg border border-gruv-bg-soft/50 hover:border-gruv-orange/50 transition-colors group"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-gruv-orange group-hover:scale-150 transition-transform" />
                                        <span className="text-gruv-gray group-hover:text-gruv-fg transition-colors">{cert}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
