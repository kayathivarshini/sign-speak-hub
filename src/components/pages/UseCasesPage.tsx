import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { ProjectUseCases } from '@/entities';

export default function UseCasesPage() {
  const [useCases, setUseCases] = useState<ProjectUseCases[]>([]);

  useEffect(() => {
    const fetchUseCases = async () => {
      const { items } = await BaseCrudService.getAll<ProjectUseCases>('projectusecases');
      setUseCases(items);
    };
    fetchUseCases();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-6xl lg:text-8xl uppercase tracking-tight mb-6 leading-none">
              REAL-WORLD
              <br />
              IMPACT
            </h1>
            <p className="font-paragraph text-xl max-w-3xl leading-relaxed">
              Discover how SignBridge transforms communication across diverse environments, from education to healthcare, empowering individuals and fostering inclusive communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {useCases.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-heading text-2xl uppercase text-secondary/40 tracking-tight">
              Loading use cases...
            </p>
          </div>
        ) : (
          <div className="space-y-24">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  {useCase.image && (
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                      <Image
                        src={useCase.image}
                        alt={useCase.title || 'Use case'}
                        className="w-full h-[500px] object-cover"
                        width={800}
                      />
                    </div>
                  )}
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="max-w-xl">
                    <div className="mb-6">
                      <span className="font-heading text-sm uppercase text-primary tracking-wide">
                        Use Case {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className="font-heading text-4xl lg:text-6xl uppercase tracking-tight text-secondary mb-6 leading-none">
                      {useCase.title}
                    </h2>

                    {useCase.shortDescription && (
                      <p className="font-paragraph text-xl text-secondary/80 mb-6 leading-relaxed">
                        {useCase.shortDescription}
                      </p>
                    )}

                    {useCase.description && (
                      <p className="font-paragraph text-base text-secondary/70 mb-8 leading-relaxed">
                        {useCase.description}
                      </p>
                    )}

                    {useCase.benefits && (
                      <div className="mb-6 p-6 bg-highlightyellow">
                        <h3 className="font-heading text-lg uppercase mb-3 tracking-tight text-secondary">
                          KEY BENEFITS
                        </h3>
                        <p className="font-paragraph text-sm text-secondary/80 leading-relaxed">
                          {useCase.benefits}
                        </p>
                      </div>
                    )}

                    {useCase.targetAudience && (
                      <div className="border-l-4 border-primary pl-6">
                        <h3 className="font-heading text-sm uppercase mb-2 tracking-wide text-secondary/60">
                          TARGET AUDIENCE
                        </h3>
                        <p className="font-paragraph text-base text-secondary leading-relaxed">
                          {useCase.targetAudience}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Additional Use Cases Overview */}
      <section className="w-full bg-secondary text-secondary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="mb-16">
            <h2 className="font-heading text-5xl lg:text-7xl uppercase tracking-tight mb-6 leading-none">
              EXPANDING
              <br />
              POSSIBILITIES
            </h2>
            <p className="font-paragraph text-xl max-w-3xl leading-relaxed text-secondary-foreground/80">
              Beyond these core applications, SignBridge continues to unlock new opportunities for accessible communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-background text-secondary">
              <h3 className="font-heading text-2xl uppercase mb-4 tracking-tight">
                EDUCATION
              </h3>
              <p className="font-paragraph text-sm leading-relaxed">
                Enables students with hearing or speech impairments to communicate effectively with teachers and classmates in schools, colleges, and online learning platforms.
              </p>
            </div>

            <div className="p-8 bg-primary text-primary-foreground">
              <h3 className="font-heading text-2xl uppercase mb-4 tracking-tight">
                HEALTHCARE
              </h3>
              <p className="font-paragraph text-sm leading-relaxed">
                Assists patients in conveying symptoms and concerns to healthcare professionals without the need for a human interpreter.
              </p>
            </div>

            <div className="p-8 bg-highlightyellow text-secondary">
              <h3 className="font-heading text-2xl uppercase mb-4 tracking-tight">
                PUBLIC SERVICES
              </h3>
              <p className="font-paragraph text-sm leading-relaxed">
                Helps individuals communicate at banks, government offices, retail stores, and customer service centers through real-time sign-to-text translation.
              </p>
            </div>

            <div className="p-8 bg-highlightyellow text-secondary">
              <h3 className="font-heading text-2xl uppercase mb-4 tracking-tight">
                WORKPLACE
              </h3>
              <p className="font-paragraph text-sm leading-relaxed">
                Facilitates smoother interaction between employees and employers, promoting inclusive and accessible work environments.
              </p>
            </div>

            <div className="p-8 bg-background text-secondary">
              <h3 className="font-heading text-2xl uppercase mb-4 tracking-tight">
                VIDEO CALLS
              </h3>
              <p className="font-paragraph text-sm leading-relaxed">
                Integrates with video conferencing to translate sign language into text or speech during virtual meetings.
              </p>
            </div>

            <div className="p-8 bg-primary text-primary-foreground">
              <h3 className="font-heading text-2xl uppercase mb-4 tracking-tight">
                DAILY LIFE
              </h3>
              <p className="font-paragraph text-sm leading-relaxed">
                Supports everyday interactions between sign language users and non-signers, enhancing independence and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl lg:text-7xl uppercase tracking-tight text-secondary mb-8 leading-none">
              JOIN THE
              <br />
              MOVEMENT
            </h2>
            <p className="font-paragraph text-xl text-secondary/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Be part of the solution. Explore our technology and discover how you can contribute to building a more inclusive world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/gestures"
                className="inline-block bg-primary text-primary-foreground font-heading uppercase px-10 py-5 text-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                Explore Gestures
              </a>
              <a
                href="/about"
                className="inline-block border-2 border-secondary text-secondary font-heading uppercase px-10 py-5 text-sm tracking-wide hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
