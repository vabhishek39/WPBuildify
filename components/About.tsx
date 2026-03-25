'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Award-winning design team',
  'Data-driven approach',
  'Lightning-fast development',
  'Dedicated support 24/7',
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-[2rem] blur-2xl" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://picsum.photos/seed/agency/1000/1000"
                alt="Our Agency Team"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center justify-between"
              >
                <div>
                  <p className="text-4xl font-bold text-white font-heading mb-1">150+</p>
                  <p className="text-sm text-slate-400 font-medium">Projects Delivered</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <p className="text-4xl font-bold text-teal-400 font-heading mb-1">99%</p>
                  <p className="text-sm text-slate-400 font-medium">Client Satisfaction</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              We craft digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
                experiences that matter.
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              At WPbuildify, we believe that a website is more than just a digital storefront. It&apos;s an experience, a journey, and a powerful tool for growth. Our team of passionate designers and developers work tirelessly to bring your vision to life.
            </p>
            
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-teal-500/50 transition-all shadow-lg"
            >
              Learn More About Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
