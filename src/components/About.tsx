import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To empower businesses worldwide with AI-driven solutions that transform operations and unlock unprecedented growth.',
    },
    {
      icon: Lightbulb,
      title: 'Our Mission',
      description: 'Deliver innovative, scalable digital systems that automate processes, enhance efficiency, and drive sustainable success.',
    },
    {
      icon: TrendingUp,
      title: 'Our Approach',
      description: 'Innovation-first methodology combining cutting-edge AI technology with deep industry expertise and strategic thinking.',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-500 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm text-yellow-400 mb-4 border border-yellow-500/30">
            About ViyaniX
          </span>
          <h2 className="text-4xl sm:text-5xl mb-6">
            <span className="text-white">Innovating the <span className="text-yellow-400">Future</span> of</span>
            <br />
            <span className="text-gradient">Digital Business</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            ViyaniX is an AI Automation & Digital Systems Agency dedicated to building <span className="text-yellow-400">intelligent</span>, 
            scalable solutions that transform how businesses operate and grow.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative glass-card rounded-2xl overflow-hidden p-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2NjY2MDkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Technology Innovation"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent rounded-lg"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-white">
              Transforming Businesses Through Innovation
            </h3>
            <p className="text-slate-300 leading-relaxed">
              We specialize in helping businesses automate operations, adopt modern digital systems, 
              and achieve sustainable growth through innovative technology solutions.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our team combines deep technical expertise with strategic business insight to deliver 
              solutions that don't just meet today's needs—they anticipate tomorrow's challenges.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['AI Automation', 'Digital Systems', 'Scalable Solutions', 'Growth Focused'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 glass-card rounded-lg text-sm text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}