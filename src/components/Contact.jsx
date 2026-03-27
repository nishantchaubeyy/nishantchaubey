import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { Github, Linkedin, Twitter } from './SocialIcons';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        console.log('Form submission started for:', formData);

        try {
            const response = await fetch('https://formsubmit.co/ajax/nishantchaubey8004@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Portfolio Message from ${formData.name}`,
                    _captcha: 'false',
                    _template: 'table',
                }),
            });

            const data = await response.json();
            console.log('FormSubmit Response:', data);

            if (data.success === 'true' || data.success === true) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(data.message || 'Form submission failed');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const inputClass =
        'w-full px-6 py-4 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] focus:shadow-none focus:translate-x-1 focus:translate-y-1 outline-none transition-all placeholder:text-black/20 font-black';

    return (
        <section id="contact" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-4">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-brutalist-pink">GET IN TOUCH</p>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-[1.1] text-black">
                        LET'S WORK <br />
                        <span className="text-black/40">TOGETHER</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left — contact links */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <p className="text-xl md:text-2xl text-black/70 leading-relaxed font-medium">
                            Have a project in mind or just want to say hi? <br />
                            Feel free to reach out. I'm always open to <br />
                            discussing new opportunities and ideas.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    label: 'EMAIL',
                                    value: 'nishantchaubey8004@gmail.com',
                                    href: 'mailto:nishantchaubey8004@gmail.com?subject=Hi%20Nishant%20-%20From%20Your%20Portfolio',
                                    icon: Mail,
                                },
                                { label: 'LINKEDIN', value: 'Nishant Chaubey', href: 'https://www.linkedin.com/in/nishant-chaubey-9b3080313', icon: Linkedin },
                                { label: 'GITHUB', value: 'nishantchaubeyy', href: 'https://github.com/nishantchaubeyy', icon: Github },
                                { label: 'TWITTER', value: 'nishantchaubeyy', href: 'https://twitter.com/nishantchaubeyy', icon: Twitter }
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-6 p-6 brutalist-card hover:bg-brutalist-cyan transition-all"
                                >
                                    <div className="p-4 border-2 border-black bg-white group-hover:bg-black group-hover:text-white transition-all shadow-[4px_4px_0_0_#000]">
                                        <link.icon className="w-6 h-6" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-xs font-bold tracking-widest text-black/40 uppercase">{link.label}</p>
                                        <p className="text-lg font-display font-black text-black tracking-tight truncate">{link.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 p-10 brutalist-card"
                        onSubmit={handleSubmit}
                    >
                        {/* Success */}
                        {status === 'success' && (
                            <div className="flex items-center gap-4 p-5 border-2 border-black bg-brutalist-cyan shadow-[4px_4px_0_0_#000]">
                                <CheckCircle className="w-6 h-6 text-black shrink-0" />
                                <p className="font-black uppercase tracking-widest text-sm">
                                    Message sent! I'll reply soon. 🎉
                                </p>
                            </div>
                        )}

                        {/* Error */}
                        {status === 'error' && (
                            <div className="flex items-center gap-4 p-5 border-2 border-black bg-brutalist-pink shadow-[4px_4px_0_0_#000]">
                                <AlertCircle className="w-6 h-6 text-white shrink-0" />
                                <div>
                                    <p className="font-black uppercase tracking-widest text-sm text-white">
                                        Failed to send. Email me directly:
                                    </p>
                                    <a href="mailto:nishantchaubey8004@gmail.com" className="text-white underline text-xs font-bold">
                                        nishantchaubey8004@gmail.com
                                    </a>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black tracking-widest text-black/40 uppercase pl-1">YOUR NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className={inputClass}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black tracking-widest text-black/40 uppercase pl-1">EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black tracking-widest text-black/40 uppercase pl-1">YOUR MESSAGE</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Hey, I have a project..."
                                rows={6}
                                required
                                className={`${inputClass} resize-none`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="group w-full py-5 bg-brutalist-yellow border-2 border-black text-base font-black uppercase tracking-widest shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 flex items-center justify-center gap-3 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>

                        <p className="text-[10px] text-black/30 font-bold text-center tracking-widest uppercase">
                            Powered by FormSubmit · No spam, ever.
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
