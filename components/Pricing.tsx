'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    description: 'Perfect for small businesses looking to establish a strong online presence.',
    features: [
      'Custom Web Design',
      'Up to 5 Pages',
      'Mobile Responsive',
      'Basic SEO Setup',
      'Contact Form Integration',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$5,000',
    description: 'Ideal for growing startups needing advanced features and optimizations.',
    features: [
      'Everything in Starter',
      'Up to 15 Pages',
      'CMS Integration (e.g., WordPress)',
      'Advanced SEO & Analytics',
      'E-commerce Functionality',
      'Priority Support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations with complex requirements.',
    features: [
      'Full Custom Web Application',
      'Unlimited Pages',
      'Custom API Integrations',
      'Dedicated Account Manager',
      'Performance Optimization',
      '24/7 Premium Support',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Simple, transparent <br />
            <span className="text-teal-400">pricing.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Choose the plan that best fits your business needs. No hidden fees, ever.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative p-8 rounded-3xl border ${
                plan.highlighted
                  ? 'bg-slate-900 border-teal-500/50 shadow-[0_0_40px_rgba(20,184,166,0.15)] md:-translate-y-4'
                  : 'bg-slate-900/40 border-white/5 backdrop-blur-sm'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-400 to-teal-600 text-slate-950 text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white font-heading mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white font-heading">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-400">/project</span>}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block w-full py-4 text-center rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-teal-500 text-slate-950 hover:bg-teal-400 shadow-lg shadow-teal-500/25'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
