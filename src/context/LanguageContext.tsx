import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    en: {
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.contact": "Contact",
        "hero.role": "Software Engineer",
        "hero.available": "Available for work",
        "hero.greeting": "Hi, I'm",
        "hero.description": "Software Engineer transitioning to AI & Machine Learning. I build scalable applications and explore intelligent solutions.",
        "hero.contact": "Contact Me",
        "hero.download": "Download CV",
        "about.title": "About",
        "about.me": "Me",
        "about.p1": "Software Engineer with over 3 years of experience in developing scalable applications, optimizing systems and databases, and building robust APIs. Currently transitioning into Artificial Intelligence and Machine Learning.",
        "about.p2": "Consolidated experience with Azure, CI/CD, and clean architectures, seeking to apply these fundamentals to create high-impact AI-based solutions.",
        "about.backend": "Backend Dev",
        "about.database": "Database",
        "about.devops": "DevOps",
        "about.ai": "AI & ML",
        "about.desc.backend": ".NET 6/8, C#, Node.js",
        "about.desc.database": "SQL Server, Optimization",
        "about.desc.devops": "Azure, CI/CD, Git",
        "about.desc.ai": "Python, TensorFlow, Scikit-learn",
        "exp.title": "Work",
        "exp.experience": "Experience",
        "skills.title": "Technical",
        "skills.skills": "Skills",
        "skills.ml": "Machine Learning & Data Science",
        "skills.backend": "Back-end Development",
        "skills.frontend": "Front-end Development",
        "skills.database": "Database",
        "skills.cloud": "Cloud & DevOps",
        "skills.principles": "Principles & Methodologies",
        "edu.title": "Education &",
        "edu.certifications": "Certifications",
        "edu.education": "Education",
        "edu.degree1": "Post-grad in Distributed Software Architecture",
        "edu.period1": "In progress (Expected Dec 2027)",
        "edu.degree2": "Technologist in Systems Analysis and Development",
        "edu.degree3": "Technical Course in Informatics",
        "cert.inprogress": "(In Progress)",
        "contact.title": "Get In",
        "contact.touch": "Touch",
        "contact.desc": "I'm currently looking for new opportunities in Software Engineering and AI. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        "contact.sayHello": "Say Hello",
        "footer.rights": "All rights reserved."
    },
    pt: {
        "nav.about": "Sobre",
        "nav.experience": "Experiência",
        "nav.skills": "Habilidades",
        "nav.contact": "Contato",
        "hero.role": "Engenheiro de Software",
        "hero.available": "Disponível para trabalho",
        "hero.greeting": "Olá, eu sou",
        "hero.description": "Engenheiro de Software em transição para IA e Machine Learning. Construo aplicações escaláveis e exploro soluções inteligentes.",
        "hero.contact": "Entre em contato",
        "hero.download": "Baixar CV",
        "about.title": "Sobre",
        "about.me": "Mim",
        "about.p1": "Engenheiro de Software com mais de 3 anos de experiência em desenvolvimento de aplicações escaláveis, otimização de sistemas e bancos de dados, e construção de APIs robustas. Atualmente em transição para a área de Inteligência Artificial e Machine Learning.",
        "about.p2": "Experiência consolidada com Azure, CI/CD e arquiteturas limpas, buscando aplicar esses fundamentos para criar soluções baseadas em IA de alto impacto.",
        "about.backend": "Backend Dev",
        "about.database": "Banco de Dados",
        "about.devops": "DevOps",
        "about.ai": "IA & ML",
        "about.desc.backend": ".NET 6/8, C#, Node.js",
        "about.desc.database": "SQL Server, Otimização",
        "about.desc.devops": "Azure, CI/CD, Git",
        "about.desc.ai": "Python, TensorFlow, Scikit-learn",
        "exp.title": "Experiência",
        "exp.experience": "Profissional",
        "skills.title": "Habilidades",
        "skills.skills": "Técnicas",
        "skills.ml": "Machine Learning & Data Science",
        "skills.backend": "Desenvolvimento Back-end",
        "skills.frontend": "Desenvolvimento Front-end",
        "skills.database": "Banco de Dados",
        "skills.cloud": "Cloud & DevOps",
        "skills.principles": "Princípios & Metodologias",
        "edu.title": "Educação &",
        "edu.certifications": "Certificações",
        "edu.education": "Educação",
        "edu.degree1": "Pós-graduação em Arquitetura de Software Distribuído",
        "edu.period1": "Em andamento (Previsto Dez 2027)",
        "edu.degree2": "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        "edu.degree3": "Curso Técnico em Informática",
        "cert.inprogress": "(Em andamento)",
        "contact.title": "Entre em",
        "contact.touch": "Contato",
        "contact.desc": "Estou atualmente em busca de novas oportunidades em Engenharia de Software e IA. Se você tiver alguma dúvida ou apenas quiser dizer oi, farei o possível para responder!",
        "contact.sayHello": "Diga Olá",
        "footer.rights": "Todos os direitos reservados."
    }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
