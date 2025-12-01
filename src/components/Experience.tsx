import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { t, language } = useLanguage();

    const experiences = {
        en: [
            {
                title: "Fullstack Developer",
                company: "Unimed Vitória",
                period: "October 2025 – Present",
                description: [
                    "Development of full-stack web applications.",
                    "Contributing to the modernization of healthcare systems.",
                    "Working with .NET and modern frontend frameworks."
                ]
            },
            {
                title: "Freelance Software Developer",
                company: "Remote",
                period: "June 2025 – December 2025",
                description: [
                    "Development of on-demand solutions in .NET and Angular.",
                    "Study and application of ML models for recommendation prototyping and data analysis in side projects."
                ]
            },
            {
                title: "Back End Developer",
                company: "Code n’App",
                period: "December 2022 – June 2025",
                description: [
                    "Development and maintenance of applications with .NET 6/8 and ASP.NET Core.",
                    "Implementation of RESTful APIs focusing on scalability.",
                    "Database optimization (procedures, views, functions).",
                    "Application of Clean Architecture and DDD, creating a solid base for future ML integrations.",
                    "Reduced average API response time by up to 25%."
                ]
            },
            {
                title: "IT Technician",
                company: "Multivix",
                period: "September 2021 – November 2022",
                description: [
                    "User support and interim management during the night shift.",
                    "Implementation of infrastructure improvements and TOTVS usage."
                ]
            },
            {
                title: "Web Developer",
                company: "Vale",
                period: "October 2019 – June 2021",
                description: [
                    "Development and maintenance of internal systems.",
                    "Automation of port planning and control routines, with 15% efficiency gains.",
                    "First experiences with data analysis to optimize internal processes."
                ]
            }
        ],
        pt: [
            {
                title: "Desenvolvedor Fullstack",
                company: "Unimed Vitória",
                period: "Outubro 2025 – Presente",
                description: [
                    "Desenvolvimento de aplicações web full-stack.",
                    "Contribuindo para a modernização de sistemas de saúde.",
                    "Trabalhando com .NET e frameworks frontend modernos."
                ]
            },
            {
                title: "Desenvolvedor de Software Freelancer",
                company: "Remoto",
                period: "Junho 2025 – Dezembro 2025",
                description: [
                    "Desenvolvimento de soluções sob demanda em .NET e Angular.",
                    "Estudo e aplicação de modelos de ML para prototipagem de recomendação e análise de dados em projetos paralelos."
                ]
            },
            {
                title: "Desenvolvedor Back End",
                company: "Code n’App",
                period: "Dezembro 2022 – Junho 2025",
                description: [
                    "Desenvolvimento e manutenção de aplicações com .NET 6/8 e ASP.NET Core.",
                    "Implementação de APIs RESTful com foco em escalabilidade.",
                    "Otimização de banco de dados (procedures, views, functions).",
                    "Aplicação de Clean Architecture e DDD, criando uma base sólida para futuras integrações de ML.",
                    "Redução do tempo médio de resposta da API em até 25%."
                ]
            },
            {
                title: "Técnico de TI",
                company: "Multivix",
                period: "Setembro 2021 – Novembro 2022",
                description: [
                    "Suporte ao usuário e gestão interina durante o turno noturno.",
                    "Implementação de melhorias de infraestrutura e uso do TOTVS."
                ]
            },
            {
                title: "Desenvolvedor Web",
                company: "Vale",
                period: "Outubro 2019 – Junho 2021",
                description: [
                    "Desenvolvimento e manutenção de sistemas internos.",
                    "Automação de rotinas de planejamento e controle portuário, com ganhos de eficiência de 15%.",
                    "Primeiras experiências com análise de dados para otimizar processos internos."
                ]
            }
        ]
    };

    return (
        <section id="experience" className="py-20 bg-gruv-bg-hard">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        {t('exp.title')} <span className="text-gruv-orange">{t('exp.experience')}</span>
                    </h2>

                    <div className="space-y-12">
                        {experiences[language].map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-gruv-bg-soft last:border-0"
                            >
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gruv-orange shadow-lg shadow-gruv-orange/50" />

                                <div className="bg-gruv-bg-medium/50 p-6 rounded-xl border border-gruv-bg-soft hover:border-gruv-orange/30 transition-colors">
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gruv-fg">{exp.title}</h3>
                                            <div className="text-gruv-orange font-medium">{exp.company}</div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gruv-gray bg-gruv-bg-hard/50 px-3 py-1 rounded-full border border-gruv-bg-soft">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gruv-gray flex items-start gap-2">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gruv-blue shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
