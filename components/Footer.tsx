import { Hexagon, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-slate-950">
                <Hexagon className="w-5 h-5 fill-current" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-teal-400 transition-colors">
                WPbuildify
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
              We build digital experiences that convert. Sleek, futuristic, and professional web design services for startups and businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Web Design</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">UI/UX Design</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Development</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">SEO Optimization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="#portfolio" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Careers</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Blog</Link></li>
              <li><Link href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} WPbuildify Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Designed with</span>
            <span className="text-rose-500">♥</span>
            <span>in San Francisco</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
