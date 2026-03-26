import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Languages',
        color: 'hover:bg-brutalist-yellow',
        skills: ['Python', 'JavaScript', 'C', 'Java', 'HTML', 'CSS']
    },
    {
        title: 'Frameworks & Libraries',
        color: 'hover:bg-brutalist-cyan',
        skills: ['FastAPI', 'React.js', 'Node.js', 'PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn']
    },
    {
        title: 'Tools & Platforms',
        color: 'hover:bg-brutalist-yellow',
        skills: ['Docker', 'Firebase', 'Figma', 'PostgreSQL', 'Git', 'Tableau', 'Jupyter', 'Postman']
    },
    {
        title: 'AI & Intelligent Tools',
        color: 'hover:bg-brutalist-pink hover:text-white',
        skills: ['Claude (Anthropic)', 'Cursor / Stitch', 'UIverse', 'GitHub Copilot', 'Gemini', 'Midjourney', 'LangChain', 'Prompt Engineering']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="space-y-4">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-brutalist-pink">TECHNICAL STACK</p>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-[1.1] text-black">
                        MY SKILLS <br />
                        <span className="text-black/40">&amp; EXPERTISE</span>
                    </h2>
                </div>

                <div className="space-y-20">
                    {skillCategories.map((cat, i) => (
                        <div key={cat.title} className="space-y-10">
                            <h3 className={`text-2xl font-display font-black border-l-8 pl-6 uppercase tracking-widest ${i === 3 ? 'border-brutalist-pink' : 'border-brutalist-yellow'
                                }`}>
                                {cat.title}
                                {i === 3 && (
                                    <span className="ml-4 text-xs font-black tracking-widest px-2 py-1 bg-brutalist-pink text-white border-2 border-black shadow-[2px_2px_0_0_#000] align-middle">
                                        NEW
                                    </span>
                                )}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {cat.skills.map((skill, j) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: j * 0.04 }}
                                        className={`p-6 brutalist-card flex flex-col items-center justify-center gap-4 transition-all cursor-default ${cat.color}`}
                                    >
                                        <div className="text-xs font-black tracking-widest text-black uppercase text-center leading-snug">
                                            {skill}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
