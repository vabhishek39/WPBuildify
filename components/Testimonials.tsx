'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    content: 'WPbuildify completely transformed our online presence. Their attention to detail and futuristic design approach helped us double our conversion rate in just three months.',
    image: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    name: 'David Chen',
    role: 'Founder, Innovate AI',
    content: 'Working with this agency was a breeze. They understood our complex product and translated it into a beautiful, intuitive website that our users love.',
    image: 'https://picsum.photos/seed/david/100/100',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director, Vibe',
    content: 'The level of professionalism and creativity is unmatched. They didn\'t just build a website; they crafted a digital experience that perfectly aligns with our brand.',
    image: 'https://picsum.photos/seed/elena/100/100',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/10 via-slate-950 to-slate-950 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Don&apos;t just take <br />
            <span className="text-teal-400">our word for it.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-800/40 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-500/20" />
              <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-teal-500/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold font-heading">{testimonial.name}</h4>
                  <p className="text-sm text-teal-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
