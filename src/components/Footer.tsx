import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Updates", href: "#updates" }
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Privacy Policy", href: "/privacy" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/sara", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/sara", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/sara", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@sara.com", label: "Email" }
  ];

  return (
    <footer className="py-20 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-white mb-4">Sara</div>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              The AI-powered platform that transforms your university experience, 
              helping you study smarter, grow personally, and prepare for your future.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 
                           flex items-center justify-center transition-all duration-300
                           hover:shadow-[0_0_20px_hsl(var(--gradient-start)/0.3)]"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white/70 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-6 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © 2024 Sara. All rights reserved.
          </div>
          
          <div className="flex space-x-8 text-sm">
            <a href="/terms" className="text-white/50 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-white/50 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;