import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 md:px-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-muted uppercase tracking-widest">© 2026 ABSTRACT STUDIO</p>
      </div>
      
      <div className="flex gap-8">
        <a href="#" className="text-xs text-muted hover:text-foreground transition-colors uppercase tracking-widest">Twitter</a>
        <a href="#" className="text-xs text-muted hover:text-foreground transition-colors uppercase tracking-widest">Instagram</a>
        <a href="#" className="text-xs text-muted hover:text-foreground transition-colors uppercase tracking-widest">Behance</a>
      </div>
    </footer>
  );
}
