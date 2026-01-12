import React from 'react';
import { motion } from 'framer-motion';
import { LuArrowRight, LuShieldCheck, LuTrendingUp, LuDollarSign } from 'react-icons/lu';
import { Reveal } from '../components/motion/Reveal';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';
import { SignatureEffect } from '../components/effects/SignatureEffect';

const Index = () => {
  return (
    <div className="bg-slate-950 text-slate-200 antialiased overflow-x-hidden font-sans selection:bg-amber-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 py-6 px-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-2xl font-black tracking-widest uppercase border-2 border-white px-4 py-1 font-serif">
          APS
        </div>
        <a href="#contact" className="hidden md:block text-sm uppercase tracking-widest hover:underline underline-offset-4">
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <SignatureInteraction type="parallax" intensity={0.5}>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
              alt="Modern Office Abstract" 
              className="w-full h-[120%] object-cover opacity-40 scale-105"
            />
          </SignatureInteraction>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-amber-500 font-medium tracking-[0.3em] uppercase mb-4"
          >
            Agency Professional Services
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight mb-8 font-serif"
          >
            Scale <span className="italic font-serif font-light text-slate-400">Without</span> <br /> 
            The Overhead.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10"
          >
            Solution-oriented support designed for high-performance agencies.
            Increasing productivity while drastically decreasing payroll costs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a href="#contact" className="group inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-amber-400 hover:scale-105">
              Optimize Your Agency
              <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </header>

      {/* The Founder Section */}
      <section className="py-24 md:py-32 relative bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-full h-full border border-amber-500/30 rounded-none z-0 hidden md:block"></div>
              <Reveal width="100%">
                <img 
                  src="https://pub-92da557f6b314ad398066420640751f5.r2.dev/ai-images/506357178_10228632669511833_6549499111356034138_n.jpg" 
                  alt="Professional Woman" 
                  className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl bg-[#e2e8f0]"
                />
              </Reveal>
              <div className="absolute bottom-0 left-0 bg-amber-500 text-slate-950 p-6 z-20 max-w-xs">
                <p className="font-serif italic text-2xl font-bold">Erica Skinner</p>
                <p className="text-sm font-semibold uppercase tracking-wider mt-1">Former State Farm Agent</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <Reveal>
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight font-serif">
                  Built by an Agent,<br /> 
                  <span className="text-slate-500">For Agents.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="h-1 w-20 bg-amber-500"></div>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-lg text-slate-300 font-light leading-relaxed">
                  We aren't just a staffing agency; we are your strategic partners. Led by Erica Skinner, a former State Farm agent, we understand the unique pressures of the industry. We know that finding reliable, P&C licensed talent is the bottleneck to your growth.
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <p className="text-lg text-slate-300 font-light leading-relaxed">
                  Our mission is simple: provide a fully trained, remote service team that seamlessly integrates into your agency, allowing you to focus on sales and scaling.
                </p>
              </Reveal>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <Reveal delay={0.6}>
                  <div>
                    <p className="text-4xl font-serif font-bold text-white">100%</p>
                    <p className="text-sm text-slate-400 uppercase tracking-widest mt-2">P&C Licensed</p>
                  </div>
                </Reveal>
                <Reveal delay={0.7}>
                  <div>
                    <p className="text-4xl font-serif font-bold text-white">High</p>
                    <p className="text-sm text-slate-400 uppercase tracking-widest mt-2">Efficiency Impact</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition / Features */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative blobs */}
        <SignatureEffect effect="blob-blue" className="top-0 right-0" />
        <SignatureEffect effect="blob-amber" className="bottom-0 left-0" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal width="100%">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-serif">Precision Support</h2>
              <p className="text-slate-400 text-lg">Don't compromise on quality. Our remote teams are engineered to perform.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Reveal delay={0.2}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-10 group"
              >
                <div className="w-12 h-12 bg-amber-500/20 flex items-center justify-center rounded-full mb-8 group-hover:bg-amber-500 transition-colors duration-300">
                  <LuShieldCheck className="w-6 h-6 text-amber-500 group-hover:text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white font-serif">P&C Licensed & Trained</h3>
                <p className="text-slate-400 leading-relaxed">
                  Skip the onboarding headaches. Our professionals arrive licensed, trained, and ready to handle policies, claims, and service calls from day one.
                </p>
              </motion.div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={0.4}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-10 group"
              >
                <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center rounded-full mb-8 group-hover:bg-blue-500 transition-colors duration-300">
                  <LuTrendingUp className="w-6 h-6 text-blue-500 group-hover:text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white font-serif">Increase Productivity</h3>
                <p className="text-slate-400 leading-relaxed">
                  Offload the administrative burden. Our team handles the noise so your in-house staff can focus on high-value revenue-generating activities.
                </p>
              </motion.div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={0.6}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-10 group"
              >
                <div className="w-12 h-12 bg-green-500/20 flex items-center justify-center rounded-full mb-8 group-hover:bg-green-500 transition-colors duration-300">
                  <LuDollarSign className="w-6 h-6 text-green-500 group-hover:text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white font-serif">Decrease Payroll Costs</h3>
                <p className="text-slate-400 leading-relaxed">
                  Get premium talent without the premium overhead. No benefits, no payroll taxes, no equipment costs—just pure, efficient support.
                </p>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visual Break / Statement */}
      <section className="relative h-[600px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
           <SignatureInteraction type="parallax" intensity={0.3}>
             <img 
               src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop" 
               alt="Office Meeting" 
               className="w-full h-[120%] object-cover"
             />
           </SignatureInteraction>
           <div className="absolute inset-0 bg-slate-950/90"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal width="100%">
            <p className="text-amber-500 uppercase tracking-widest font-bold mb-4">The Agency Advantage</p>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-white max-w-4xl mx-auto leading-tight">
              "We don't just fill seats.<br /> We solve problems."
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 bg-white text-slate-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <Reveal>
                <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-slate-900 font-serif">
                  Ready to<br />Transform?
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xl md:text-2xl text-slate-600 font-light max-w-lg">
                  Partner with APS today. Elevate your agency's efficiency and profitability.
                </p>
              </Reveal>
            </div>
            
            <div className="w-full md:w-auto">
              <Reveal delay={0.4}>
                <form className="space-y-6 w-full md:w-[400px]">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-slate-500">Name</label>
                    <input type="text" className="w-full bg-slate-100 border-b-2 border-slate-300 p-4 focus:outline-none focus:border-amber-500 transition-colors text-lg" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-slate-500">Email</label>
                    <input type="email" className="w-full bg-slate-100 border-b-2 border-slate-300 p-4 focus:outline-none focus:border-amber-500 transition-colors text-lg" placeholder="agency@example.com" />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button" 
                    className="w-full bg-slate-950 text-white py-5 px-8 font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 mt-4"
                  >
                    Start Conversation
                  </motion.button>
                </form>
              </Reveal>
            </div>
          </div>
          
          <div className="mt-32 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; 2024 Agency Professional Services. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
