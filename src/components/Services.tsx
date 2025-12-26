import { motion } from 'motion/react';
import { Bot, Code, Rocket, Globe } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Bot,
      title: 'AI Automation Solutions',
      description: 'Transform your business operations with intelligent automation that learns and adapts.',
      features: [
        'Business process automation',
        'Workflow optimization',
        'AI-powered integrations',
        'Intelligent decision-making systems',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Digital Systems & Technology',
      description: 'Build robust, scalable digital infrastructure that grows with your business.',
      features: [
        'Custom web solutions',
        'System integration',
        'Scalable digital architecture',
        'API development & integration',
      ],
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: Rocket,
      title: 'Business Growth & Enablement',
      description: 'Strategic technology consulting to accelerate your digital transformation journey.',
      features: [
        'Digital transformation consulting',
        'Automation strategy',
        'Technology frameworks',
        'Performance optimization',
      ],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Globe,
      title: 'Web & Digital Presence',
      description: 'Create compelling digital experiences that convert visitors into customers.',
      features: [
        'Website development',
        'Landing pages',
        'Conversion-focused design',
        'SEO optimization',
      ],
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-yellow-500 blur-3xl"
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
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl mb-6">
            <span className="text-white">Comprehensive <span className="text-yellow-400">Digital</span></span>
            <br />
            <span className="text-gradient">Solutions & Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From AI automation to full-stack development, we deliver <span className="text-yellow-400">end-to-end solutions</span> 
            <br />that drive real business results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-yellow-400 mt-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-yellow-400 transition-colors mt-6"
              >
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-12 gradient-blue-gold">
            <h3 className="text-3xl text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you automate operations, 
              scale efficiently, and achieve your business goals.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}