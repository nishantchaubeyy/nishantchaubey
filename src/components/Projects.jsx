import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './SocialIcons';

const projects = [
    {
        title: 'OceraAi',
        description: 'AI-driven data platform focusing on Oceanographic, Fisheries, and Molecular Biodiversity insights. Built for SIH 2025 Hackathon.',
        tech: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL'],
        image: 'oceanographic_platform_mockup_1774519055188.png',
        github: 'https://github.com/nishantchaubeyy/OceraAi',
        live: 'https://nishantchaubeyy.github.io/OceraAi/'
    },
    {
        title: 'The US Residency',
        description: 'Complete hotel website and OTA integration with Google Hotel Center API, emphasizing mobile-first user experience and high-speed performance.',
        tech: ['React.js', 'Firebase', 'SEO', 'Google API'],
        image: 'hotel_portfolio_mockup_1774519071588.png',
        github: 'https://github.com/theusresidency/usresidency.github.io',
        live: 'https://theusresidency.github.io/usresidency.github.io/'
    },
    {
        title: 'EduSync (LMS)',
        description: 'A comprehensive education portal featuring course administration, student progress tracking, and interactive learning modules.',
        tech: ['React', 'Node.js', 'Firebase'],
        image: 'lms_mockup_1774522249160.png',
        github: 'https://github.com/nishantchaubeyy/EduSync.git',
        live: '#'
    },
    {
        title: 'Civic Twin IIIT Delhi',
        description: 'A simulation platform designed to predict public behavior and sentiment toward governance policies (e.g., CAA, Farm Laws), enabling proactive planning and crisis management.',
        tech: ['Python', 'GIS', 'React', 'D3.js'],
        image: 'civic_twin_mockup_1774522271429.png',
        github: 'https://github.com/nishantchaubeyy',
        live: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-4">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-brutalist-pink">SELECTED WORK</p>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-[1.1] text-black">
                        FEATURED <br />
                        <span className="text-black/40">PROJECTS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative brutalist-card overflow-hidden"
                        >
                            <div className="aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-b-4 border-black">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8 space-y-4 bg-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-display font-black tracking-tight text-black group-hover:text-brutalist-pink transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        <a href={project.github} className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0_0_#000]">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.live} className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0_0_#000]">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-black/70 font-medium leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 border-2 border-black text-[10px] font-black tracking-widest uppercase bg-brutalist-cyan shadow-[2px_2px_0_0_#000]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
