import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-white blur-[100px] md:blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-white blur-[100px] md:blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-4xl text-center z-10">
        <h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-widest mb-8 md:mb-12 leading-tight"
        >
          Redefining <span className="text-muted italic">Digital</span> Space
        </h2>
        <p 
          ref={textRef}
          className="text-base md:text-xl text-muted leading-relaxed font-light px-2"
        >
          We believe that the future of the web lies in the intersection of 3D technology, 
          minimalist design, and emotional storytelling. Our mission is to create 
          immersive experiences that transcend the traditional boundaries of the browser.
        </p>
      </div>
    </section>
  );
}

