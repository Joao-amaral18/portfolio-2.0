import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const { t, language, setLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section logic
            const sections = ['about', 'experience', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.about'), href: '#about', id: 'about' },
        { name: t('nav.experience'), href: '#experience', id: 'experience' },
        { name: t('nav.skills'), href: '#skills', id: 'skills' },
        { name: t('nav.contact'), href: '#contact', id: 'contact' },
    ];

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'pt' : 'en');
    };

    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 100; // Adjust for navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsOpen(false);
        }
    };

    return (
        <nav
            className={`fixed z-50 transition-all duration-500 ease-in-out
                ${isOpen
                    ? 'top-0 left-0 w-full h-screen bg-gruv-bg-hard flex flex-col'
                    : `top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-fit rounded-full ${scrolled ? 'liquid-glass' : 'bg-gruv-bg-medium/50 backdrop-blur-xl border border-gruv-fg/10 shadow-2xl shadow-black/20'}`
                }`}
        >
            <div className={`px-6 md:px-8 py-4 flex justify-between items-center ${isOpen ? 'w-full' : ''}`}>
                <a href="#" className="text-xl font-bold bg-linear-to-r from-gruv-blue to-gruv-purple bg-clip-text text-transparent shrink-0 relative h-7 flex items-center overflow-hidden">
                    <motion.div layout className="flex items-center">
                        <motion.span layout>J</motion.span>
                        <AnimatePresence mode="wait">
                            {!scrolled && (
                                <motion.span
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden whitespace-nowrap"
                                >
                                    oão
                                </motion.span>
                            )}
                        </AnimatePresence>
                        <motion.span layout className="mx-px"> </motion.span>
                        <motion.span layout>A</motion.span>
                        <AnimatePresence mode="wait">
                            {!scrolled && (
                                <motion.span
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden whitespace-nowrap"
                                >
                                    maral
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2 ml-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollToSection(e, link.href)}
                            className={`px-4 py-2 rounded-full transition-all text-sm font-medium relative ${activeSection === link.id
                                    ? 'text-gruv-bg-hard'
                                    : 'text-gruv-gray hover:text-gruv-fg hover:bg-gruv-fg/5'
                                }`}
                        >
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="activePill"
                                    className="absolute inset-0 liquid-pill rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-5 pl-6 border-l border-gruv-fg/10 ml-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-gruv-gray hover:text-gruv-fg transition-colors flex items-center gap-2 text-xs font-bold tracking-wider"
                        >
                            <Globe size={16} />
                            {language.toUpperCase()}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gruv-gray hover:text-gruv-fg p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden flex flex-col items-center justify-center flex-1 space-y-8 pb-20"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-2xl font-medium ${activeSection === link.id ? 'text-gruv-orange' : 'text-gruv-gray hover:text-gruv-orange'}`}
                                onClick={(e) => handleScrollToSection(e, link.href)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex gap-8 mt-8 items-center">
                            <button onClick={toggleLanguage} className="text-gruv-gray flex items-center gap-2 font-medium"><Globe size={24} /> {language.toUpperCase()}</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
