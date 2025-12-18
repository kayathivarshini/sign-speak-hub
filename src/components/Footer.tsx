import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-heading text-2xl uppercase mb-6 tracking-tight">
              SIGNBRIDGE
            </h3>
            <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed">
              Bridging communication gaps through advanced AI-powered sign language recognition technology.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg uppercase mb-4 tracking-tight">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gestures" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Gestures Library
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  About Project
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg uppercase mb-4 tracking-tight">
              TECHNOLOGY
            </h4>
            <ul className="space-y-3">
              <li className="font-paragraph text-sm text-secondary-foreground/80">
                Computer Vision
              </li>
              <li className="font-paragraph text-sm text-secondary-foreground/80">
                Machine Learning
              </li>
              <li className="font-paragraph text-sm text-secondary-foreground/80">
                Real-time Processing
              </li>
              <li className="font-paragraph text-sm text-secondary-foreground/80">
                Deep Learning Models
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg uppercase mb-4 tracking-tight">
              IMPACT
            </h4>
            <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed">
              Empowering inclusive communication and fostering accessibility for the hearing and speech-impaired community worldwide.
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-secondary-foreground/60">
              © 2025 SignBridge Project. Advancing inclusive communication through AI.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-paragraph text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="font-paragraph text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="font-paragraph text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
