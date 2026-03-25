'use client';

import { motion } from 'motion/react';
import { Layout, Smartphone, Code, Search } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    description: 'Stunning, custom-designed websites that capture your brand identity and engage your audience.',
    icon: <Layout className="w-8 h-8 text-teal-400" />,
    color: 'from-teal-500/20 to-teal-500/0',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive user interfaces and seamless experiences that keep users coming back for more.',
    icon: <Smartphone className="w-8 h-8 text-indigo-400" />,
    color: 'from-indigo-500/20 to-indigo-500/0',
  },
  {
    title: 'Development',
    description: 'Robust, scalable, and lightning-fast web applications built with modern technologies.',
    icon: <Code className="w-8 h-8 text-rose-400" />,
    color: 'from-rose-500/20 to-rose-500/0',
  },
  {
    title: 'SEO Optimization',
    description: 'Data-driven strategies to improve your search rankings and drive organic traffic.',
    icon: <Search className="w-8 h-8 text-amber-400" />,
    color: 'from-amber-500/20 to-amber-500/0',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Services that scale <br />
            <span className="text-teal-400">your business.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            We provide end-to-end digital solutions, from concept to deployment, ensuring your online presence is nothing short of exceptional.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:bg-slate-800/50 transition-all hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}
              />
              <div className="relative z-10">
                <div className="mb-6 p-4 inline-flex rounded-xl bg-slate-950 border border-white/10 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
