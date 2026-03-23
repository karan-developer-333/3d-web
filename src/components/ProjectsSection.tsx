import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Nebula',
    category: '3D Experience',
    image: 'https://picsum.photos/seed/nebula/800/600',
    description: 'An immersive journey through a digital nebula.'
  },
  {
    id: 2,
    title: 'Vortex',
    category: 'Interactive Art',
    image: 'https://picsum.photos/seed/vortex/800/600',
    description: 'Exploring the boundaries of generative motion.'
  },
  {
    id: 3,
    title: 'Ether',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/ether/800/600',
    description: 'Minimalist aesthetics for the modern era.'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen w-full bg-background py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-widest mb-4">Selected Works</h2>
          <p className="text-muted text-lg font-light">A collection of our most ambitious digital experiments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="mt-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted mb-2 block">{project.category}</span>
                <h3 className="text-xl font-display font-bold uppercase tracking-widest group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-sm text-muted mt-2 font-light line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
