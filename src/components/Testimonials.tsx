import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Chen",
      role: "Computer Science Student",
      university: "Stanford University",
      text: "Sara transformed my chaotic study schedule into something actually manageable. The AI recommendations are spot-on!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      role: "Pre-Med Student",
      university: "UCLA",
      text: "The wellness features helped me through my toughest semester. Sara knows exactly when I need a break.",
      rating: 5
    },
    {
      name: "Aisha Patel",
      role: "Business Major",
      university: "NYU Stern",
      text: "The career guidance is incredible. Sara helped me discover opportunities I never knew existed.",
      rating: 5
    },
    {
      name: "Jake Morrison",
      role: "Engineering Student",
      university: "MIT",
      text: "Finally, an app that actually understands how students think and work. Game-changer.",
      rating: 5
    },
    {
      name: "Sofia Bergman",
      role: "Psychology Major",
      university: "Harvard",
      text: "Sara's study recommendations improved my GPA by 0.8 points in just one semester.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Data Science Student", 
      university: "UC Berkeley",
      text: "The AI is genuinely intelligent. It feels like having a personal academic advisor 24/7.",
      rating: 5
    }
  ];

  // Duplicate for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            What <span className="gradient-text">Students</span> Say
          </h2>
          <p className="text-xl text-white/70">
            Join thousands of students already succeeding with Sara
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-8 testimonials-scroll">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card flex-shrink-0">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gradient-start text-gradient-start" />
                  ))}
                </div>
                
                <p className="text-white/80 mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                  <div className="text-white/40 text-sm">{testimonial.university}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[hsl(var(--background))] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[hsl(var(--background))] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;