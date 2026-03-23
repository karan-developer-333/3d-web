import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Magnetic from './Magnetic';

export default function ContactSection() {
  return (
    <section id="contacts" className="min-h-screen w-full bg-background py-24 px-8 md:px-16 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-widest mb-6">Get in Touch</h2>
          <p className="text-muted text-lg font-light">Let's build the future together.</p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-muted ml-4">Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-muted ml-4">Email</label>
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-muted ml-4">Message</label>
            <textarea 
              rows={5}
              placeholder="Tell us about your project"
              className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-6 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
            />
          </div>

          <div className="flex justify-center pt-8">
            <Magnetic strength={0.2}>
              <button 
                type="submit"
                className="group flex items-center gap-4 px-12 py-4 bg-white text-black rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:scale-105 transition-transform"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Magnetic>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
