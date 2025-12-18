import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-6xl lg:text-9xl uppercase tracking-tight text-secondary mb-8 leading-none">
            ABOUT
            <br />
            SIGNBRIDGE
          </h1>
          <div className="w-32 h-1 bg-primary mb-12"></div>
          <p className="font-paragraph text-2xl text-secondary/80 max-w-4xl leading-relaxed">
            The Sign Language Recognition Project aims to bridge the communication gap between the hearing and speech-impaired community and the general public by leveraging computer vision and machine learning technologies.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-highlightyellow">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl lg:text-7xl uppercase tracking-tight text-secondary mb-8 leading-none">
                OUR
                <br />
                MISSION
              </h2>
              <p className="font-paragraph text-lg text-secondary/80 leading-relaxed">
                This system recognizes hand gestures used in sign language and translates them into readable text or audible speech in real time, creating seamless communication pathways for all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-secondary text-secondary-foreground p-8">
                <h3 className="font-heading text-2xl uppercase mb-3 tracking-tight">
                  ACCURATE RECOGNITION
                </h3>
                <p className="font-paragraph text-base leading-relaxed">
                  Enable accurate recognition of sign language gestures through advanced computer vision algorithms.
                </p>
              </div>

              <div className="bg-primary text-primary-foreground p-8">
                <h3 className="font-heading text-2xl uppercase mb-3 tracking-tight">
                  REAL-TIME TRANSLATION
                </h3>
                <p className="font-paragraph text-base leading-relaxed">
                  Provide real-time translation into text or speech for immediate, natural communication.
                </p>
              </div>

              <div className="bg-secondary text-secondary-foreground p-8">
                <h3 className="font-heading text-2xl uppercase mb-3 tracking-tight">
                  INCLUSIVE SOLUTIONS
                </h3>
                <p className="font-paragraph text-base leading-relaxed">
                  Promote inclusive communication using modern AI solutions that empower everyone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="mb-16">
          <h2 className="font-heading text-5xl lg:text-7xl uppercase tracking-tight text-secondary mb-6 leading-none">
            TECHNOLOGY
            <br />
            STACK
          </h2>
          <p className="font-paragraph text-xl text-secondary/80 max-w-3xl leading-relaxed">
            Built on a foundation of cutting-edge technologies and frameworks, SignBridge delivers reliable, scalable, and accurate performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-2 border-secondary/10 p-8 hover:border-primary transition-colors"
          >
            <div className="w-16 h-16 bg-primary mb-6 flex items-center justify-center">
              <span className="font-heading text-2xl text-primary-foreground">PY</span>
            </div>
            <h3 className="font-heading text-2xl uppercase mb-3 tracking-tight text-secondary">
              PYTHON
            </h3>
            <p className="font-paragraph text-sm text-secondary/70 leading-relaxed">
              Core programming language providing the foundation for all machine learning and computer vision operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-2 border-secondary/10 p-8 hover:border-primary transition-colors"
          >
            <div className="w-16 h-16 bg-highlightyellow mb-6 flex items-center justify-center">
              <span className="font-heading text-2xl text-secondary">CV</span>
            </div>
            <h3 className="font-heading text-2xl uppercase mb-3 tracking-tight text-secondary">
              OPENCV
            </h3>
            <p className="font-paragraph text-sm text-secondary/70 leading-relaxed">
              Computer vision library enabling real-time hand gesture detection and image processing capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-2 border-secondary/10 p-8 hover:border-primary transition-colors"
          >
            <div className="w-16 h-16 bg-secondary mb-6 flex items-center justify-center">
              <span className="font-heading text-2xl text-secondary-foreground">ML</span>
            </div>
            <h3 className="font-heading text-2xl uppercase mb-3 tracking-tight text-secondary">
              MACHINE LEARNING
            </h3>
            <p className="font-paragraph text-sm text-secondary/70 leading-relaxed">
              Advanced algorithms for gesture classification and pattern recognition with high accuracy rates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-2 border-secondary/10 p-8 hover:border-primary transition-colors"
          >
            <div className="w-16 h-16 bg-primary mb-6 flex items-center justify-center">
              <span className="font-heading text-2xl text-primary-foreground">TF</span>
            </div>
            <h3 className="font-heading text-2xl uppercase mb-3 tracking-tight text-secondary">
              TENSORFLOW
            </h3>
            <p className="font-paragraph text-sm text-secondary/70 leading-relaxed">
              Deep learning framework powering neural networks for sophisticated gesture recognition models.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-2 border-secondary/10 p-8 hover:border-primary transition-colors"
          >
            <div className="w-16 h-16 bg-highlightyellow mb-6 flex items-center justify-center">
              <span className="font-heading text-2xl text-secondary">KR</span>
            </div>
            <h3 className="font-heading text-2xl uppercase mb-3 tracking-tight text-secondary">
              KERAS
            </h3>
            <p className="font-paragraph text-sm text-secondary/70 leading-relaxed">
              High-level neural networks API for rapid prototyping and model development with TensorFlow backend.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border-2 border-secondary/10 p-8 hover:border-primary transition-colors"
          >
            <div className="w-16 h-16 bg-secondary mb-6 flex items-center justify-center">
              <span className="font-heading text-2xl text-secondary-foreground">WEB</span>
            </div>
            <h3 className="font-heading text-2xl uppercase mb-3 tracking-tight text-secondary">
              WEB TECHNOLOGIES
            </h3>
            <p className="font-paragraph text-sm text-secondary/70 leading-relaxed">
              Modern web stack including HTML, CSS, and JavaScript for creating intuitive user interfaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full bg-secondary text-secondary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="mb-16">
            <h2 className="font-heading text-5xl lg:text-7xl uppercase tracking-tight mb-6 leading-none">
              CORE
              <br />
              FEATURES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-4 border-primary pl-8"
            >
              <h3 className="font-heading text-3xl uppercase mb-4 tracking-tight">
                REAL-TIME DETECTION
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed">
                Advanced hand gesture detection system that captures and processes movements in real time with minimal latency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-l-4 border-highlightyellow pl-8"
            >
              <h3 className="font-heading text-3xl uppercase mb-4 tracking-tight">
                ML CLASSIFICATION
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed">
                Machine learning models trained on extensive datasets to accurately classify detected gestures into specific meanings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-l-4 border-primary pl-8"
            >
              <h3 className="font-heading text-3xl uppercase mb-4 tracking-tight">
                USER-FRIENDLY INTERFACE
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed">
                Intuitive web interface designed for accessibility, ensuring smooth interaction for users of all technical backgrounds.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-l-4 border-highlightyellow pl-8"
            >
              <h3 className="font-heading text-3xl uppercase mb-4 tracking-tight">
                HIGH ACCURACY
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed">
                Optimized neural networks delivering exceptional accuracy rates with fast response times for reliable communication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-l-4 border-primary pl-8"
            >
              <h3 className="font-heading text-3xl uppercase mb-4 tracking-tight">
                COMPREHENSIVE LIBRARY
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed">
                Supports commonly used sign language alphabets, words, and gestures with detailed visual references.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-l-4 border-highlightyellow pl-8"
            >
              <h3 className="font-heading text-3xl uppercase mb-4 tracking-tight">
                FAST RESPONSE
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed">
                Optimized processing pipeline ensuring minimal delay between gesture detection and translation output.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl lg:text-7xl uppercase tracking-tight text-secondary mb-8 leading-none">
              CREATING
              <br />
              IMPACT
            </h2>
            <p className="font-paragraph text-xl text-secondary/80 leading-relaxed mb-8">
              This project helps empower individuals with hearing and speech disabilities by enabling smoother communication, fostering inclusivity, and demonstrating how artificial intelligence can solve real-world social challenges.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                <p className="font-paragraph text-base text-secondary/70 leading-relaxed">
                  Empowering individuals with hearing and speech disabilities
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                <p className="font-paragraph text-base text-secondary/70 leading-relaxed">
                  Enabling smoother communication across all environments
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                <p className="font-paragraph text-base text-secondary/70 leading-relaxed">
                  Fostering inclusivity in education, healthcare, and workplaces
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                <p className="font-paragraph text-base text-secondary/70 leading-relaxed">
                  Demonstrating AI's potential to solve real-world social challenges
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-primary-foreground p-12"
          >
            <blockquote className="font-paragraph text-2xl leading-relaxed mb-6">
              "Technology should serve humanity by breaking down barriers and creating opportunities for everyone to connect and communicate."
            </blockquote>
            <p className="font-heading text-sm uppercase tracking-wide">
              SIGNBRIDGE VISION
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-highlightyellow">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl lg:text-7xl uppercase tracking-tight text-secondary mb-8 leading-none">
              EXPLORE
              <br />
              SIGNBRIDGE
            </h2>
            <p className="font-paragraph text-xl text-secondary/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover our comprehensive gesture library and see how SignBridge can transform communication in your environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/gestures"
                className="inline-block bg-primary text-primary-foreground font-heading uppercase px-10 py-5 text-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                View Gestures
              </Link>
              <Link
                to="/use-cases"
                className="inline-block border-2 border-secondary text-secondary font-heading uppercase px-10 py-5 text-sm tracking-wide hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                Explore Use Cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
