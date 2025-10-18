import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-8 py-6 flex justify-between items-center z-20">
        <div className="text-2xl font-bold text-white">Sara</div>
        
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
            How It Works
          </a>
        </div>
        
        <Link to="/login" className="nav-button text-sm">
          Sign Up
        </Link>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            Your Entire{" "}
            <span className="gradient-text">University Life</span>,{" "}
            <span className="gradient-text">Intelligently Organized</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            The AI-powered platform that personalizes your studies, supports your well-being, 
            and prepares you for what's next.
          </p>
          
          <Link to="/login" className="cta-button inline-flex items-center gap-3 text-xl">
            Get Started for Free
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;