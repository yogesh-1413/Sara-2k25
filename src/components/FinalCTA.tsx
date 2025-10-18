import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Ready to Transform Your{" "}
          <span className="gradient-text">University Experience</span>?
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          Join thousands of students who are already using Sara to study smarter, 
          stay balanced, and build their future with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/login" className="cta-button inline-flex items-center gap-3 text-xl">
            Get Started for Free
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-white/50 text-sm">
            No credit card required • Free 14-day trial
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">50K+</div>
            <div className="text-white/60 text-sm">Active Students</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">500+</div>
            <div className="text-white/60 text-sm">Universities</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">98%</div>
            <div className="text-white/60 text-sm">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">4.9★</div>
            <div className="text-white/60 text-sm">App Store Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;