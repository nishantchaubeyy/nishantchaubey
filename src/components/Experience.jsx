import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Star, Cloud } from 'lucide-react';

const experiences = [
    {
        title: 'Google Cloud Arcade',
        organization: 'GCP Experience',
        period: '2024 - Present',
        description: 'Gamified hands-on experience with Google Cloud Platform. Completed various skill badges in Kubernetes, BigQuery, and Cloud Architecture.',
        icon: Cloud,
        color: 'bg-brutalist-cyan'
    },
    {
        title: 'National Entrepreneurship Challenge',
        organization: 'IIT Bombay',
        period: '2024 - 2025',
        description: 'Selected as a Top 35 finalist nationwide. Developed business models, pitche strategies, and navigated through rigorous entrepreneurship modules.',
        icon: Award,
        color: 'bg-brutalist-yellow'
    },
    {
        title: 'Lead Roles (E-Cell)',
        organization: 'E-Cell DYPIU / IIT BHU',
        period: '2023 - Present',
        description: 'Leading entrepreneurship initiatives, organizing hackathons, and fostering a startup culture within the campus ecosystem.',
        icon: Star,
        color: 'bg-brutalist-pink'
    },
    {
        title: 'Generative AI 2.0',
        organization: 'Google Cloud Study Jam',
        period: '2024 - 2025',
        description: 'Deep-dived into large language models, image generation, and multi-modal AI. Mastered Vertex AI tools and GenAI Studio for building intelligent applications.',
        icon: Star,
        color: 'bg-white'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 px-6 bg-white border-y-4 border-black">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-4">
                    <p className="text-xs font-black tracking-[0.2em] uppercase text-brutalist-pink">JOURNEY & ACHIEVEMENTS</p>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-[1.1] text-black">
                        WORK <br />
                        <span className="text-black/40">&amp; EXPERIENCE</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group p-8 brutalist-card hover:bg-black hover:text-white transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`p-4 border-2 border-black ${exp.color} group-hover:scale-110 transition-transform shadow-[4px_4px_0_0_#000] group-hover:shadow-[4px_4px_0_0_#fff]`}>
                                    <exp.icon className="w-8 h-8 text-black" />
                                </div>
                                <span className="text-xs font-black tracking-widest uppercase opacity-40 group-hover:opacity-100">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-2xl font-display font-black tracking-tight">
                                    {exp.title}
                                </h3>
                                <p className="text-sm font-black tracking-widest uppercase text-brutalist-pink group-hover:text-brutalist-yellow transition-colors">
                                    {exp.organization}
                                </p>
                                <p className="text-lg leading-relaxed font-medium opacity-70 group-hover:opacity-100">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
