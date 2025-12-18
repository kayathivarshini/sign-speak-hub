// HPI 1.6-V
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { ProjectUseCases } from '@/entities';
import { ArrowRight, Activity, Brain, MessageSquare, Eye, Globe, Cpu } from 'lucide-react';

// --- Utility Components for Motion & Layout ---

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
};

const ScrollReveal: React.FC<RevealProps> = ({ children, className, delay = 0, direction = 'up' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return 'translate-y-12';
      case 'down': return '-translate-y-12';
      case 'left': return 'translate-x-12';
      case 'right': return '-translate-x-12';
      default: return 'translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className || ''} ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getDirectionOffset()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ParallaxImage: React.FC<{ src: string; alt: string; className?: string; speed?: number }> = ({ src, alt, className, speed = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
        <Image src={src} alt={alt} width={1200} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

// --- Main Page Component ---

export default function HomePage() {
  const [featuredUseCases, setFeaturedUseCases] = useState<ProjectUseCases[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Data Fidelity Protocol: Fetching Data
  useEffect(() => {
    const fetchUseCases = async () => {
      const { items } = await BaseCrudService.getAll<ProjectUseCases>('projectusecases');
      setFeaturedUseCases(items.slice(0, 3));
    };
    fetchUseCases();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-secondary overflow-clip selection:bg-primary selection:text-white">
      <Header />

      {/* --- HERO SECTION: Replicating Inspiration Structure --- */}
      {/* Structure: Massive Title Top -> Nav Strip -> Visual Content Bottom */}
      <section className="relative w-full pt-24 pb-0 lg:pt-32">
        <div className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* 1. Massive Typographic Header */}
          <div className="relative z-10 border-b-2 border-secondary pb-2">
            <h1 className="font-heading text-[13vw] leading-[0.8] tracking-tighter text-secondary uppercase text-center lg:text-justify lg:text-justify-last">
              SIGN<span className="hidden lg:inline">&nbsp;</span>BRIDGE
            </h1>
          </div>

          {/* 2. Navigation Strip (Inspiration Layout) */}
          <div className="flex flex-wrap justify-between items-center py-4 lg:py-6 border-b-2 border-secondary mb-0">
            <Link to="/gestures" className="font-heading text-xl lg:text-3xl uppercase hover:text-primary transition-colors">
              EXPLORE GESTURES
            </Link>
            <Link to="/use-cases" className="font-heading text-xl lg:text-3xl uppercase hover:text-primary transition-colors">
              REAL WORLD USE
            </Link>
            <Link to="/about" className="font-heading text-xl lg:text-3xl uppercase hover:text-primary transition-colors">
              OUR MISSION
            </Link>
            <span className="font-paragraph text-sm lg:text-base uppercase tracking-widest hidden md:block">
              AI-Powered Communication
            </span>
          </div>

          {/* 3. Visual Content (Abstract Shapes & Intro) */}
          <div className="relative w-full h-[70vh] lg:h-[85vh] mt-0 overflow-hidden bg-secondary">
            {/* Abstract Organic Shapes (SVG) - Replicating the 'Green Blobs' motif but in brand colors */}
            <div className="absolute inset-0 w-full h-full">
               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 V 50 Q 25 30 50 50 T 100 50 V 100 Z" fill="#B9B04A" />
                 <path d="M0 100 V 60 Q 30 80 60 60 T 120 60 V 100 Z" fill="#D12318" opacity="0.9" />
                 <path d="M0 100 V 80 Q 40 40 80 80 T 160 80 V 100 Z" fill="#3E1F0D" opacity="0.4" />
               </svg>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
              <ScrollReveal delay={300}>
                <h2 className="font-heading text-5xl lg:text-8xl text-background uppercase max-w-5xl leading-none mb-8 mix-blend-difference">
                  Breaking the Silence Barrier
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={500}>
                <p className="font-paragraph text-lg lg:text-2xl text-background/90 max-w-2xl leading-relaxed mb-12 mix-blend-difference">
                  Bridging the gap between sign language and spoken word through real-time computer vision and advanced machine learning.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={700}>
                <Link 
                  to="/gestures"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-background text-secondary font-heading uppercase tracking-wider hover:bg-highlightyellow transition-all duration-300"
                >
                  <span>Start Translating</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: STICKY MANIFESTO (The "Why") --- */}
      <section className="relative w-full bg-background py-24 lg:py-40">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Sticky Left Column */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <ScrollReveal>
                  <span className="block font-heading text-primary text-lg mb-4 tracking-widest uppercase">The Objective</span>
                  <h2 className="font-heading text-5xl lg:text-7xl text-secondary uppercase leading-[0.9] mb-8">
                    Inclusive<br/>By Design
                  </h2>
                  <p className="font-paragraph text-xl text-secondary/80 leading-relaxed mb-8">
                    Communication is a fundamental human right. We leverage technology not to replace human connection, but to facilitate it where barriers exist.
                  </p>
                  <div className="w-full h-[1px] bg-secondary/20 my-8"></div>
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <span className="font-heading text-4xl text-primary">95%</span>
                      <span className="text-sm uppercase tracking-wide">Accuracy Goal</span>
                    </div>
                    <div className="w-[1px] bg-secondary/20"></div>
                    <div className="flex flex-col">
                      <span className="font-heading text-4xl text-primary">0.2s</span>
                      <span className="text-sm uppercase tracking-wide">Latency</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:w-2/3 flex flex-col gap-24">
              {/* Card 1 */}
              <ScrollReveal className="group">
                <div className="relative border-t border-secondary pt-8">
                  <span className="absolute top-8 right-0 font-heading text-6xl text-secondary/10 group-hover:text-highlightyellow/40 transition-colors">01</span>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-secondary text-background rounded-none">
                      <Eye className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-4xl uppercase pt-2">Computer Vision</h3>
                  </div>
                  <p className="font-paragraph text-xl text-secondary/70 leading-relaxed max-w-2xl mb-8">
                    Utilizing OpenCV to track hand landmarks in real-time. Our system maps 21 distinct points on each hand to capture the nuance of every gesture with pixel-perfect precision.
                  </p>
                  <div className="w-full h-64 bg-secondary/5 overflow-hidden relative">
                     <div className="absolute inset-0 grid grid-cols-12 gap-1 opacity-20">
                        {Array.from({ length: 144 }).map((_, i) => (
                          <div key={i} className="bg-secondary w-full h-full"></div>
                        ))}
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-heading text-secondary uppercase tracking-widest">Sensor Array Visualization</span>
                     </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2 */}
              <ScrollReveal className="group" delay={100}>
                <div className="relative border-t border-secondary pt-8">
                  <span className="absolute top-8 right-0 font-heading text-6xl text-secondary/10 group-hover:text-primary/20 transition-colors">02</span>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-primary text-white rounded-none">
                      <Brain className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-4xl uppercase pt-2">Neural Processing</h3>
                  </div>
                  <p className="font-paragraph text-xl text-secondary/70 leading-relaxed max-w-2xl mb-8">
                    Deep learning models powered by TensorFlow and Keras analyze the spatial and temporal data of hand movements to classify gestures into meaningful linguistic units.
                  </p>
                  <div className="w-full h-64 bg-primary/5 overflow-hidden relative">
                     <svg className="w-full h-full opacity-30" viewBox="0 0 400 100">
                        <path d="M0 50 Q 50 10 100 50 T 200 50 T 300 50 T 400 50" fill="none" stroke="#D12318" strokeWidth="2" />
                        <path d="M0 50 Q 50 90 100 50 T 200 50 T 300 50 T 400 50" fill="none" stroke="#D12318" strokeWidth="2" />
                     </svg>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3 */}
              <ScrollReveal className="group" delay={200}>
                <div className="relative border-t border-secondary pt-8">
                  <span className="absolute top-8 right-0 font-heading text-6xl text-secondary/10 group-hover:text-highlightyellow/40 transition-colors">03</span>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-highlightyellow text-secondary rounded-none">
                      <MessageSquare className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-4xl uppercase pt-2">Instant Translation</h3>
                  </div>
                  <p className="font-paragraph text-xl text-secondary/70 leading-relaxed max-w-2xl mb-8">
                    The final bridge. Converting classified gestures into synthesized speech or readable text instantly, enabling fluid, two-way conversation in any environment.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: FEATURED USE CASES (Magazine Layout) --- */}
      {featuredUseCases.length > 0 && (
        <section className="w-full bg-secondary text-background py-24 lg:py-32 overflow-hidden">
          <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-background/20 pb-8">
              <ScrollReveal>
                <h2 className="font-heading text-6xl lg:text-9xl uppercase leading-none text-highlightyellow">
                  Impact<br/>Zones
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="font-paragraph text-xl max-w-md text-right text-background/80 mt-8 md:mt-0">
                  Deploying accessibility solutions where they matter most. From classrooms to clinics.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {featuredUseCases.map((useCase, index) => (
                <div 
                  key={useCase._id} 
                  className={`
                    relative flex flex-col
                    ${index === 0 ? 'lg:col-span-8' : 'lg:col-span-4'}
                    ${index === 1 ? 'lg:mt-32' : ''}
                  `}
                >
                  <ScrollReveal delay={index * 150}>
                    <div className="group relative overflow-hidden mb-6">
                      {useCase.image ? (
                        <div className={`w-full overflow-hidden ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
                           <Image
                            src={useCase.image}
                            alt={useCase.title || 'Use Case'}
                            width={800}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className={`w-full bg-background/10 ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'} flex items-center justify-center`}>
                          <Activity className="w-16 h-16 text-background/20" />
                        </div>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="font-heading text-2xl uppercase text-white tracking-widest border-b-2 border-white pb-1">Read More</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="font-heading text-highlightyellow text-sm uppercase tracking-widest">Case Study 0{index + 1}</span>
                      <h3 className="font-heading text-3xl lg:text-4xl uppercase leading-tight mb-2">{useCase.title}</h3>
                      <p className="font-paragraph text-background/70 line-clamp-3 text-lg">{useCase.shortDescription}</p>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>

            <div className="mt-24 flex justify-center">
              <Link to="/use-cases" className="inline-block border border-background/30 px-12 py-6 font-heading uppercase text-lg hover:bg-background hover:text-secondary transition-colors duration-300">
                View All Applications
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* --- SECTION 4: TECH STACK (Visual Grid) --- */}
      <section className="w-full bg-background py-24 lg:py-32">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="flex flex-col justify-center">
              <ScrollReveal>
                <h2 className="font-heading text-5xl lg:text-7xl uppercase text-secondary mb-8">
                  The Engine<br/>Room
                </h2>
                <p className="font-paragraph text-xl text-secondary/80 leading-relaxed mb-12 max-w-xl">
                  Built on a foundation of robust, open-source technologies. We combine the speed of modern web frameworks with the raw power of machine learning libraries.
                </p>
                <ul className="space-y-4">
                  {['Real-time Processing', 'Neural Network Classification', 'Responsive Web Architecture'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 font-heading text-lg uppercase text-secondary/60">
                      <div className="w-2 h-2 bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Python', icon: <Cpu />, color: 'bg-secondary text-background' },
                { name: 'OpenCV', icon: <Eye />, color: 'bg-primary text-white' },
                { name: 'TensorFlow', icon: <Brain />, color: 'bg-highlightyellow text-secondary' },
                { name: 'React', icon: <Globe />, color: 'bg-secondary/10 text-secondary' },
              ].map((tech, i) => (
                <ScrollReveal key={i} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`${tech.color} aspect-square p-8 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300`}>
                    <div className="w-full flex justify-end">
                      {React.cloneElement(tech.icon as React.ReactElement, { className: "w-8 h-8 opacity-50" })}
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest opacity-70 mb-2">Technology</span>
                      <span className="font-heading text-2xl lg:text-3xl uppercase">{tech.name}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 5: CALL TO ACTION (Full Bleed) --- */}
      <section className="relative w-full py-32 lg:py-48 bg-primary text-white overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-10">
          <span className="font-heading text-[20vw] leading-none uppercase">Connect</span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-5xl lg:text-8xl uppercase mb-8 leading-[0.9]">
              Ready to Break<br/>Barriers?
            </h2>
            <p className="font-paragraph text-xl lg:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
              Join us in creating a world where communication has no limits. Explore the technology or learn about our mission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/gestures" 
                className="bg-white text-primary font-heading uppercase px-10 py-5 text-lg hover:bg-highlightyellow hover:text-secondary transition-colors"
              >
                Try The Demo
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white font-heading uppercase px-10 py-5 text-lg hover:bg-white hover:text-primary transition-colors"
              >
                Learn More
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}