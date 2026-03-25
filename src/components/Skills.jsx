import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React', level: '90%' },
    { name: 'JavaScript', level: '95%' },
    { name: 'TypeScript', level: '85%' },
    { name: 'Next.js', level: '80%' },
    { name: 'Tailwind CSS', level: '95%' },
    { name: 'Framer Motion', level: '85%' },
    { name: 'Node.js', level: '75%' },
    { name: 'Firebase', level: '70%' },
    { name: 'Git', level: '90%' },
    { name: 'Figma', level: '75%' },
    { name: 'Redux', level: '80%' },
    { name: 'GraphQL', level: '65%' }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-4">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600">TECHNICAL STACK</p>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-[1.1] text-black">
                        MY SKILLS <br />
                        <span className="text-black/40">& EXPERTISE</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="p-6 brutalist-card flex flex-col items-center justify-center gap-4 hover:bg-brutalist-yellow group"
                        >
                            <div className="text-sm font-black tracking-widest text-black uppercase transition-colors">
                                {skill.name}
                            </div>
                            <div className="w-full h-1 bg-black/10">
                                <div
                                    className="h-full bg-black transition-all duration-1000"
                                    style={{ width: skill.level }}
                                />
                            </div>
                            <div className="text-[10px] font-black tracking-tighter text-black/40 group-hover:text-black">
                                {skill.level}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
