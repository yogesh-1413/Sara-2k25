import { CheckCircle } from 'lucide-react';
import neuralNetworkImage from '@/assets/neural-network.jpg';

const HowItWorks = () => {
  const steps = [
    "Connect your university accounts and course materials",
    "Sara's AI analyzes your learning patterns and preferences", 
    "Get personalized study plans, career guidance, and wellness support",
    "Track your progress and adapt as you grow",
    "Prepare for your future with confidence"
  ];

  return (
    <section id="how-it-works" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                How <span className="gradient-text">Sara</span> Works
              </h2>
              <p className="text-xl text-white/70 mb-12">
                Four simple steps to transform your university experience
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-gradient-start flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-white/80">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={neuralNetworkImage} 
                alt="AI neural network visualization representing Sara's intelligent processing"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent opacity-40"></div>
            </div>
            
            {/* Floating elements to add depth */}
            <div className="absolute -top-4 -right-4 w-20 h-20 neural-node opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 neural-node opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;