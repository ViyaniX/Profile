import { motion } from 'motion/react';
import { Mail, Phone, Globe, ArrowUp } from 'lucide-react';
import logo from "../assets/logo.svg";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Why ViyaniX', href: '#why' },
      { name: 'Contact', href: '#contact' },
    ],
    Services: [
      { name: 'AI Automation', href: '#services' },
      { name: 'Digital Systems', href: '#services' },
      { name: 'Business Growth', href: '#services' },
      { name: 'Web Development', href: '#services' },
    ],
    Contact: [
      { name: '+91 9108498566', href: 'tel:+919108498566', icon: Phone },
      { name: 'info@viyanix.com', href: 'mailto:info@viyanix.com', icon: Mail },
      { name: 'www.viyanix.com', href: 'https://www.viyanix.com', icon: Globe },
    ],
  };

  return (
    <footer className="relative bg-[#0a0e27] border-t border-yellow-500/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-1/2 left-0 w-96 h-96 rounded-full bg-blue-500 opacity-5 blur-3xl" />
        <div className="absolute -bottom-1/2 right-0 w-96 h-96 rounded-full bg-yellow-500 opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              alt="ViyaniX - Vision. Innovated." 
              className="h-12 w-auto mb-6"
            />
            <p className="text-slate-400 leading-relaxed mb-6">
              AI Automation & Digital Systems Agency building intelligent solutions for the future.
            </p>
            <div className="flex gap-4">
              {['linkedin', 'twitter', 'facebook', 'instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-yellow-400/50 transition-all duration-300"
                >
                  <span className="text-slate-400 hover:text-yellow-400 transition-colors capitalize text-xs">
                    {social[0].toUpperCase()}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white mb-6 border-b border-yellow-500/20 pb-2">
                <span className="text-yellow-400">{category}</span>
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                    >
                      {'icon' in link && <link.icon className="w-4 h-4" />}
                      <span className="text-sm">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-500/20 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} ViyaniX. All rights reserved. Built with <span className="text-yellow-400">innovation</span> and <span className="text-yellow-400">excellence</span>.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">
              Terms of Service
            </a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}