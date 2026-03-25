import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './SocialIcons';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce marketplace built with React, Node.js, and Stripe integration.',
        tech: ['React', 'Tailwind', 'Node.js', 'Stripe'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',
        github: '#',
        live: '#'
    },
    {
        title: 'AI Dashboard',
        description: 'A sophisticated dashboard for AI monitoring and analytics with interactive charts.',
        tech: ['Next.js', 'Typescript', 'Framer Motion', 'Chart.js'],
        image: 'https://images.unsplash.com/photo-1551288049-bb1c00342153?auto=format&fit=crop&q=80&w=1600',
        github: '#',
        live: '#'
    },
    {
        title: 'Modern Portfolio',
        description: 'A clean, high-performance portfolio website with smooth animations and dark theme.',
        tech: ['Vite', 'React', 'Tailwind CSS', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600',
        github: '#',
        live: '#'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management tool with real-time updates and drag-and-drop features.',
        tech: ['React', 'Firebase', 'Tailwind', 'React-DnD'],
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1600',
        github: '#',
        live: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-4">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600">SELECTED WORK</p>
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
