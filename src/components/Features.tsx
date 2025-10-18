import commandCenterMockup from '@/assets/command-center-mockup.jpg';
import neuralNetworkImage from '@/assets/neural-network.jpg';
import wellnessMockup from '@/assets/wellness-mockup.jpg';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Features = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    e.currentTarget.style.setProperty('--feature-mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--feature-mouse-y', `${y}%`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--feature-mouse-x', '50%');
    e.currentTarget.style.setProperty('--feature-mouse-y', '50%');
  };

  const features = [
    {
      title: "From Chaos to Clarity, Instantly",
      description: "Transform scattered course materials, deadlines, and study sessions into a unified command center. Sara's AI organizes everything intelligently, so you can focus on learning, not searching.",
      mockup: commandCenterMockup,
      alt: "Command Center Interface showing organized course materials and study sessions"
    },
    {
      title: "Navigate Your Future Career with Clarity",
      description: "Discover career paths tailored to your strengths and interests. Sara's Neural Navigator maps connections between your studies, skills, and opportunities in real-time.",
      mockup: neuralNetworkImage,
      alt: "Neural Network visualization showing career path connections"
    },
    {
      title: "Support for Your Well-being",
      description: "University life can be overwhelming. Sara's Wellness Companion provides personalized mental health resources, stress management tools, and mindfulness exercises to keep you balanced.",
      mockup: wellnessMockup,
      alt: "Wellness interface with mood tracking and mindfulness tools"
    }
  ];

  return (
    <section id="features" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Three powerful tools working together to transform your university experience
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-window p-8 md:p-12"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button variant="outline" className="mt-4 w-fit" asChild>
                    <Link to="/login">Learn More</Link>
                  </Button>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={feature.mockup} 
                      alt={feature.alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;