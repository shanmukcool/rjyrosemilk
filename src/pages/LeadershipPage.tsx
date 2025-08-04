import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Crown,
  Heart,
  Sparkles,
  Quote,
  Award,
  Star,
  ArrowRight,
  MapPin,
  Zap,
  Clock,
  Building
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import patternImg from '../assets/design/pattern.png';
import dividerImg from '../assets/design/divider.png';
import founder from '../assets/founder.png';
import ramugaru from '../assets/ramugaru.png';
import rishi from '../assets/rishi.png';

const LeadershipPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const leaders = [
    {
      id: 'simhachalam',
      name: 'Shri Gubba Simhachalam',
      title: 'Founder & Visionary',
      image: founder,
      period: '1950–1976',
      quote: '"I didn\'t make a drink. I made something people could come back to."',
      description: 'Simhachalam\'s pioneering recipe was a reflection of his values: simplicity, wellness, and warmth. He took inspiration from Pakistani refugees who introduced rose-based drinks post-partition, and added Ayurvedic influence to make it both nostalgic and healing.',
      icon: Crown,
      color: 'rose-500',
      achievements: [
        'Created the original rose milk recipe',
        'Established the first handcart in 1950',
        'Introduced Ayurvedic elements to the drink',
        'Built the foundation of customer loyalty'
      ]
    },
    {
      id: 'ramachandra-rao',
      name: 'Gubba Ramachandra Rao',
      title: 'Master of Flavor & Keeper of Tradition',
      image: ramugaru,
      subtitle: '(Rose Milk Ramu Garu)',
      period: '1976–Present',
      quote: '"The secret isn\'t just in the recipe; it\'s in respecting the process—every single day."',
      description: 'For over 34 years, Rao stood at the front counter, serving each customer personally. From buffalo farm to mineral-water ice, he oversaw every step. Never opening branches, never cutting corners, his focus was clear: serve with soul.',
      additionalInfo: 'Even today, he shuns commercial expansion, focusing instead on consistency and legacy.',
      icon: Heart,
      color: 'rose-500',
      achievements: [
        'Served customers personally for 45+ years',
        'Introduced sugar-free variants',
        'Elevated hygiene standards',
        'Maintained customer-first culture',
        'Trained dedicated team members'
      ]
    },
    {
      id: 'rishik-srikanth',
      name: 'Rishik Srikanth',
      title: 'Guardian of the Legacy & Future Architect',
      image: rishi,
      period: 'Present',
      quote: '"Heritage should evolve, not expire."',
      description: 'As the third-generation leader, Rishik brings tech-savviness and vision to the family legacy. From digital branding to wellness products, he\'s on a mission to carry Rajahmundry\'s most beloved drink into the global spotlight—without altering the taste that built it.',
      additionalInfo: 'His role? Ensure the drink remains the same—but reaches further than ever before.',
      icon: Zap,
      color: 'rose-500',
      achievements: [
        'Digital transformation and social media presence',
        'Wellness product development',
        'Scalable franchise model design',
        'Global expansion vision',
        'Preserving authentic taste while modernizing reach'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-dark/70">
          <Link to="/" className="hover:text-rose-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-rose-500 font-medium">Leadership</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-white">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/50 via-white to-cream/30"></div>

        {/* Ornamental Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${patternImg})`,
              backgroundRepeat: "repeat",
              backgroundSize: "250px", // adjust this value for smaller or larger repetition
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-mustard rounded-full px-8 py-4 mb-8 shadow-xl border-2 border-gold/50">
              <Users className="h-6 w-6 text-cream mr-3" />
              <span className="text-cream font-bold text-lg font-serif">Our Leadership</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-dark mb-8 font-serif leading-tight">
              <span className="block text-rose-500 drop-shadow-lg">The Family</span>
              <span className="block text-mustard">Behind the Flavor</span>
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-8">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-16 w-auto"
              />
            </div>

            <p className="text-xl lg:text-2xl text-dark/80 max-w-4xl mx-auto leading-relaxed font-serif italic">
              "A timeless tradition. Three generations. One shared mission: serve every glass with pride, purity, and a smile."
            </p>
          </div>

          {/* Navigation to Story */}
          <div className="text-center mb-8">
            <Link
              to="/about/story"
              className="inline-flex items-center bg-rose-500 text-cream px-6 py-3 rounded-full font-bold hover:bg-dark transition-colors shadow-lg border-2 border-gold/50 font-serif"
            >
              <Clock className="h-5 w-5 mr-2" />
              Read Our Story
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-20 bg-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-20">
            {leaders.map((leader, index) => {
              const IconComponent = leader.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={leader.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                  data-animate
                  id={`leader-${index}`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'} transform transition-all duration-1000 ${visibleSections.has(`leader-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>

                    <div className="flex items-center mb-6">
                      <div className={`bg-${leader.color} rounded-full w-20 h-20 min-w-20 min-h-20 flex items-center justify-center mr-6 shadow-xl border-4 border-gold/50`}>
                        <IconComponent className="h-10 w-10 text-cream" />
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-dark font-serif mb-1">
                          {leader.name}
                        </h2>
                        {leader.subtitle && (
                          <p className="text-lg text-rose-500 font-bold font-serif mb-1">
                            {leader.subtitle}
                          </p>
                        )}
                        <div className={`text-lg font-bold text-${leader.color} font-serif`}>
                          {leader.title}
                        </div>
                        <div className="text-dark/70 font-serif">
                          {leader.period}
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/70 border-l-4 border-rose-500 p-6 rounded-r-lg mb-6 shadow-lg">
                      <div className="flex items-start">
                        <Quote className="h-6 w-6 text-rose-500 mr-3 flex-shrink-0 mt-1" />
                        <p className="text-lg text-dark font-bold font-serif italic">
                          {leader.quote}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-dark/80 mb-4 leading-relaxed">
                      {leader.description}
                    </p>

                    {leader.additionalInfo && (
                      <p className="text-lg text-dark/80 mb-6 leading-relaxed font-serif italic">
                        {leader.additionalInfo}
                      </p>
                    )}

                    {/* Achievements */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-dark mb-4 font-serif">Key Contributions</h3>
                      <div className="space-y-3">
                        {leader.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start bg-white/50 p-3 rounded-lg border border-gold/30 shadow-sm">
                            <Star className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-dark font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image/Visual */}
                  <div className={`${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'} relative transform transition-all duration-1000 delay-300 ${visibleSections.has(`leader-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>

                    <div className="rounded-3xl transform hover:scale-105 transition-transform duration-300">
                      {/* Background Glow */}

                      <div className="relative z-10 flex items-center justify-center h-full">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="max-w-full max-h-full object-contain drop-shadow-lg"
                        />
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Family Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-white to-cream/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-6 shadow-lg border-2 border-gold/50">
              <Heart className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Our Values</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif">
              <span className="block text-rose-500">A Drink That Built a Family.</span>
              <span className="block text-mustard">A Family That Built a City.</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-8">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-16 w-auto"
              />
            </div>

            <div className="bg-cream/50 border-l-4 border-rose-500 p-8 rounded-r-lg shadow-xl border-2 border-gold/30 max-w-4xl mx-auto">
              <p className="text-2xl text-dark font-bold font-serif text-center">
                Rajahmundry Rose Milk is more than a brand.
              </p>
              <p className="text-xl text-dark/80 font-serif italic text-center mt-4">
                It's a bond—poured, passed down, and preserved across decades.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream/50 rounded-3xl p-8 text-center shadow-xl border-4 border-gold/30 hover:shadow-2xl transition-all duration-300">
              <div className="bg-mustard rounded-full w-20 h-20 min-w-20 min-h-20 flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-gold/50">
                <Heart className="h-10 w-10 text-cream" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 font-serif">Tradition</h3>
              <p className="text-dark/80 leading-relaxed">
                Preserving the original recipe and serving methods that have delighted customers for 75 years.
              </p>
            </div>

            <div className="bg-cream/50 rounded-3xl p-8 text-center shadow-xl border-4 border-gold/30 hover:shadow-2xl transition-all duration-300">
              <div className="bg-mustard rounded-full w-20 h-20 min-w-20 min-h-20 flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-gold/50">
                <Award className="h-10 w-10 text-cream" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 font-serif">Quality</h3>
              <p className="text-dark/80 leading-relaxed">
                Never compromising on ingredients, process, or the personal touch that makes each glass special.
              </p>
            </div>

            <div className="bg-cream/50 rounded-3xl p-8 text-center shadow-xl border-4 border-gold/30 hover:shadow-2xl transition-all duration-300">
              <div className="bg-mustard rounded-full w-20 h-20 min-w-20 min-h-20 flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-gold/50">
                <Users className="h-10 w-10 text-cream" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 font-serif">Family</h3>
              <p className="text-dark/80 leading-relaxed">
                Treating every customer as family and every team member as part of our legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-500 text-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D4A574 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-serif">
            Join Our Family Legacy
          </h2>
          <p className="text-xl mb-12 text-cream/90 font-serif italic">
            Experience the dedication and passion that goes into every glass we serve.
          </p>

          <div className="">

            <Link
              to="/franchise"
              className="border-2 border-cream text-cream px-8 py-4 rounded-full font-bold hover:bg-cream hover:text-rose-500 transition-colors inline-flex items-center justify-center group shadow-xl font-serif"
            >
              <Building className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Partner With Us
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadershipPage;