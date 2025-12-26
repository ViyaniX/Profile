import { motion } from 'motion/react';
import { Shield, Zap, Users, Award, Clock, TrendingUp } from 'lucide-react';

export function WhyViyaniX() {
  const reasons = [
    {
      icon: Zap,
      title: 'Innovation-First Approach',
      description: 'We leverage cutting-edge AI and technology to deliver solutions that keep you ahead of the competition.',
    },
    {
      icon: Shield,
      title: 'Reliability & Trust',
      description: 'Enterprise-grade security and reliability you can count on. Your success is our commitment.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with deep expertise in AI, automation, and digital transformation.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '98% success rate with 100+ completed projects across diverse industries and business sizes.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring to ensure your systems run smoothly at all times.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Future-proof architecture that grows with your business, from startup to enterprise scale.',
    },
  ];

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
  ];

  return (
    <section id="why" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-yellow-500 blur-3xl"
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
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl mb-6">
            <span className="text-white">Why Businesses <span className="text-yellow-400">Trust</span></span>
            <br />
            <span className="text-gradient">ViyaniX</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We combine <span className="text-yellow-400">innovation</span>, expertise, and reliability to deliver exceptional results 
            that transform businesses and drive growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="text-4xl mb-2 text-gradient">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl text-white mb-3">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Automation-First Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass-card rounded-2xl p-12 gradient-blue-gold"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl text-white mb-6">
                Automation-First Philosophy
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                We believe in building systems that work for you, not the other way around. 
                Our automation-first approach ensures your business operates efficiently, 
                scales effortlessly, and stays ahead of the curve.
              </p>
              <ul className="space-y-4">
                {[
                  'Reduce operational costs by up to 60%',
                  'Increase productivity and efficiency',
                  'Minimize human error and maximize accuracy',
                  'Scale operations without scaling headcount',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-yellow-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl text-white">Fast Implementation</h4>
                </div>
                <p className="text-slate-400">Quick deployment with minimal disruption to your operations.</p>
              </div>

              <div className="glass-card rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl text-white">Measurable Results</h4>
                </div>
                <p className="text-slate-400">Track performance with detailed analytics and insights.</p>
              </div>

              <div className="glass-card rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl text-white">Enterprise Security</h4>
                </div>
                <p className="text-slate-400">Bank-grade security protecting your data and operations.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}