import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const CodeTypewriter = () => {
    const codeString = `const developer = {
  name: "João Amaral",
  role: "Software Engineer",
  focus: ["AI", "Machine Learning"],
  location: "Vitória, Brazil",

  getSkills: function () {
    return [
      "TypeScript", "React",
      ".NET", "Azure", "Python"
    ];
  }
};

console.log(developer.focus);`;

    const [displayedCode, setDisplayedCode] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedCode(codeString.substring(0, i));
            i++;
            if (i > codeString.length) {
                clearInterval(interval);
            }
        }, 30); // Typing speed
        return () => clearInterval(interval);
    }, [codeString]);

    return (
        <pre className="font-mono text-sm md:text-base text-gruv-gray overflow-x-auto">
            <code>
                <span dangerouslySetInnerHTML={{
                    __html: displayedCode
                        .replace(/"[^"]*"/g, '<span class="text-gruv-green">$&</span>')
                        .replace(/\[|\]|\{|\}/g, '<span class="text-gruv-yellow">$&</span>')
                        .replace(/console\.log/g, '<span class="text-gruv-aqua">console.log</span>')
                }} />
                <span className="animate-pulse inline-block w-2 h-4 bg-gruv-orange align-middle ml-1"></span>
            </code>
        </pre>
    );
};

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gruv-bg-hard">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gruv-blue/10 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gruv-purple/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-gruv-aqua/5 blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium tracking-wider text-gruv-orange uppercase bg-gruv-orange/10 rounded-full border border-gruv-orange/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gruv-orange opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gruv-orange"></span>
                        </span>
                        {t('hero.available')}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                        {t('hero.greeting')} <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-gruv-orange via-gruv-yellow to-gruv-green animate-gradient-x">
                            João Amaral
                        </span>
                    </h1>

                    <p className="text-lg text-gruv-gray mb-8 max-w-lg leading-relaxed">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-gruv-orange hover:bg-gruv-orange/90 text-gruv-bg-hard rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-gruv-orange/25 hover:shadow-gruv-orange/40 hover:-translate-y-0.5"
                        >
                            {t('hero.contact')} <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Code Editor Window */}
                    <div className="relative rounded-xl bg-gruv-bg-hard/90 border border-gruv-bg-medium shadow-2xl backdrop-blur-sm overflow-hidden group hover:border-gruv-gray/20 transition-colors duration-300">
                        {/* Window Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-gruv-bg-medium/50 border-b border-gruv-bg-medium">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-gruv-red/80" />
                                <div className="w-3 h-3 rounded-full bg-gruv-yellow/80" />
                                <div className="w-3 h-3 rounded-full bg-gruv-green/80" />
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gruv-gray font-mono">
                                <Terminal size={12} />
                                developer_profile.js
                            </div>
                            <div className="w-12" /> {/* Spacer for centering */}
                        </div>

                        {/* Code Content */}
                        <div className="p-6">
                            <CodeTypewriter />
                        </div>

                        {/* Status Bar */}
                        <div className="px-4 py-2 bg-gruv-bg-medium/50 border-t border-gruv-bg-medium flex justify-between text-xs text-gruv-gray font-mono">
                            <div className="flex gap-4">
                                <span>main*</span>
                                <span>JavaScript</span>
                            </div>
                            <div>UTF-8</div>
                        </div>
                    </div>

                    {/* Decorative Elements behind editor */}
                    <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-linear-to-br from-gruv-blue/10 to-gruv-purple/10 rounded-xl blur-xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
