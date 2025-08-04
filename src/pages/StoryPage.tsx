import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Heart,
  Crown,
  Sparkles,
  Quote,
  Users,
  Award,
  Star,
  ArrowRight,
  MapPin,
  Building,
  ExternalLink,
  TrendingUp
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import newlogoImg from '../assets/newlogo.png';
import patternImg from '../assets/design/pattern.png';
import dividerImg from '../assets/design/divider.png';
import gscImg from '../assets/stores/1950.png';
import bridgeImg from '../assets/design/bridge.png';
import rrgImg from '../assets/stores/1980.png';
import signaturestoreImg from '../assets/stores/s1signaturestore.jpg';
import headbranchImg from '../assets/stores/s2headbranch.jpg';
import experiencestoreImg from '../assets/stores/s3experiencestore.jpg';
import plate from '../assets/plate.png';
import petal1 from '../assets/design/petal1.png';
import petal2 from '../assets/design/petal2.png';
import petal3 from '../assets/design/petal3.png';

const FloatingPetals = () => {
  const petals = [petal1, petal2, petal3];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => {
        const petal = petals[i % petals.length];
        const left = Math.random() * 100; // percent
        const delay = Math.random() * 10; // seconds
        const size = 20 + Math.random() * 30; // px

        return (
          <img
            key={i}
            src={petal}
            alt="petal"
            className="absolute animate-float"
            style={{
              left: `${left}%`,
              top: '-10%',
              width: `${size}px`,
              height: 'auto',
              animationDelay: `${delay}s`,
              opacity: 0.8,
            }}
          />
        );
      })}
    </div>
  );
};

const StoryPage = () => {
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

  const timelineEvents = [
    {
      year: '1950',
      title: 'Where It All Began',
      description: 'In the sun-drenched streets of Rajahmundry, a young dreamer, Shri Gubba Simhachalam, pushed out a modest handcart—unaware that he was stirring the first chapter of a culinary legacy.',
      details: 'What he served was no ordinary refreshment. It was a healing blend of rose essence, Ayurvedic herbs, and fresh, full-cream buffalo milk. He called it Simhachalam Rose Milk—sold at just one anna.',
      quote: '"That taste… it\'s the taste of my childhood." – A loyal patron since 1955',
      icon: Crown,
      color: 'rose-500'
    },
    {
      year: '1950s–1970s',
      title: 'The City Embraces the Flavor',
      description: 'By the mid-1950s, the handcart had become a landmark. College students, daily commuters, and families on their evening strolls all gathered around it.',
      details: 'Each glass became a symbol of nostalgia, crafted with precision and care. The secret? A dedication to purity: Vetiver-boiled water for earthy aroma, Khoa (milk solids) made from their own buffalo milk, Hand-churned kova for creamy texture. No shortcuts, no compromises.',
      quote: 'Even as sodas flooded the market, Rajahmundry chose tradition.',
      icon: Users,
      color: 'rose-500'
    },
    {
      year: '1976',
      title: 'A Sacred Torch is Passed',
      description: 'The second chapter began when Shri Simhachalam passed the reins to his son, Shri Gubba Ramachandra Rao, fondly known as Rose Milk Ramu Garu.',
      details: 'With love and reverence, Ramu Garu preserved the flavor, process, and emotion behind every glass. But he also brought quiet innovation: Introduced sugar-free rose milk for health-conscious patrons, Elevated hygiene standards, Maintained the customer-first culture where "everyone felt at home".',
      quote: '"They knew every customer by name. It always felt like coming home." – A regular from the 70s',
      icon: Heart,
      color: 'rose-500'
    },
    {
      year: '1980s–2000s',
      title: 'Ritual Becomes Identity',
      description: 'As Rajahmundry grew, so did the legend of its rose milk. It wasn\'t just a drink anymore. It was a homecoming.',
      details: 'People carried bottles across states. Some would freeze the syrup to take it abroad. Even in an era of changing tastes and flashy branding, one thing stayed constant—this pink drink that united generations.',
      quote: 'It wasn\'t just a drink anymore. It was a homecoming.',
      icon: Building,
      color: 'rose-500'
    },
    {
      year: 'Today',
      title: 'The Third Generation\'s Modern Legacy',
      description: 'Rishik Srikanth, the grandson of Shri Simhachalam, represents the third generation of leadership.',
      details: 'With a deep respect for his roots and a vision for the future, he\'s reinventing the legacy for a modern world: Bringing the brand online and onto social media, Exploring drinkable desserts and wellness infusions, Designing a scalable franchise model without diluting tradition.',
      quote: '"My goal is to make sure my grandchild tastes the same rose milk I did." – Rishik Srikanth',
      icon: TrendingUp,
      color: 'rose-500'
    },
    {
      year: '2025',
      title: 'Still Stirring Memories',
      description: 'More than 25 crore glasses have been served. But this is still the same drink. The same milk. The same mineral-water ice.',
      details: 'Made by the same hands that never forgot why it started: for the people of Rajahmundry. This isn\'t just rose milk. It\'s Rajahmundry in a glass.',
      quote: '"I saw it on Instagram and had to visit. It lives up to the hype!" – A recent visitor',
      icon: Star,
      color: 'rose-500'
    }
  ];

  const growthData = [
    { year: '1950', customers: 50, outlets: 1 },
    { year: '1970', customers: 500, outlets: 1 },
    { year: '1990', customers: 2000, outlets: 3 },
    { year: '2010', customers: 15000, outlets: 15 },
    { year: '2025', customers: 30000, outlets: 40 }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-dark/70">
          <Link to="/" className="hover:text-rose-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-rose-500 font-medium">Our Story</span>
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
            <div className="inline-flex items-center bg-rose-500 rounded-full px-8 py-4 mb-8 shadow-xl border-2 border-gold/50">
              <Clock className="h-6 w-6 text-cream mr-3" />
              <span className="text-cream font-bold text-lg font-serif">Our Story</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-dark mb-8 font-serif leading-tight">
              <span className="block text-rose-500 drop-shadow-lg">A Legacy</span>
              <span className="block text-mustard">in Every Glass</span>
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
              "A Timeless Timeline of Taste: From a Humble Handcart (1950) to a National Icon (2025)"
            </p>
          </div>

          {/* Navigation to Leadership */}
          <div className="text-center mb-8">
            <Link
              to="/about/leadership"
              className="inline-flex items-center bg-mustard text-cream px-6 py-3 rounded-full font-bold hover:bg-dark transition-colors shadow-lg border-2 border-gold/50 font-serif"
            >
              <Users className="h-5 w-5 mr-2" />
              Meet Our Leaders
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-20">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                    data-animate
                    id={`timeline-${index}`}
                  >
                    {/* Image Block */}
                    <div className={`${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'} relative z-10`}>
                      <div className="rounded-3xl hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                        <div className="relative">
                          {index === 0 && <img src={gscImg} alt="1950" className="max-w-full max-h-full object-contain drop-shadow-lg" />}
                          {index === 1 && <img src={bridgeImg} alt="bridge" className="max-w-full max-h-full object-contain drop-shadow-lg" />}
                          {index === 2 && <img src={rrgImg} alt="rrg" className="max-w-full max-h-full object-contain drop-shadow-lg" />}
                          {index === 3 && <img src={signaturestoreImg} alt="signature" className="max-w-full max-h-full object-contain drop-shadow-lg" />}
                          {index === 4 && <img src={headbranchImg} alt="headbranch" className="max-w-full max-h-full object-contain drop-shadow-lg" />}
                          {index === 5 && <img src={experiencestoreImg} alt="experience" className="max-w-full max-h-full object-contain drop-shadow-lg" />}
                        </div>
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className={`${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'} z-10`}>
                      <div className="flex items-center mb-6">
                        <div className={`bg-${event.color} rounded-full w-20 h-20 min-w-20 min-h-20 flex items-center justify-center mr-6 shadow-xl border-4 border-gold/50`}>
                          <IconComponent className="h-10 w-10 text-cream" />
                        </div>
                        <div>
                          <div className={`text-3xl font-bold text-${event.color} mb-2 font-serif`}>
                            {event.year}
                          </div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-dark font-serif">
                            {event.title}
                          </h2>
                        </div>
                      </div>

                      <div className="bg-white/70 border-l-4 border-rose-500 p-6 rounded-r-lg mb-6 shadow-lg">
                        <p className="text-lg text-dark leading-relaxed font-serif">
                          {event.description}
                        </p>
                      </div>

                      <p className="text-lg text-dark/80 mb-6 leading-relaxed">
                        {event.details}
                      </p>

                      <div className="bg-cream/50 border-l-4 border-mustard p-6 rounded-r-lg border-2 border-gold/30 shadow-lg">
                        <div className="flex items-start">
                          <Quote className="h-6 w-6 text-mustard mr-3 flex-shrink-0 mt-1" />
                          <p className="text-dark font-bold text-lg font-serif italic">
                            {event.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dotted Curved Connector */}
                  {index < timelineEvents.length - 1 && (
                    <svg
                      className="absolute w-40 h-40 lg:block hidden pointer-events-none z-0"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      style={{
                        top: '100%',
                        left: isEven ? '55%' : '45%',
                        transform: 'translateX(-50%)'
                      }}
                    >
                      <path
                        d={isEven
                          ? 'M50,0 C50,30 0,70 0,100'
                          : 'M50,0 C50,30 100,70 100,100'}
                        stroke="#D4A574"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        fill="none"
                      />
                    </svg>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Customer Growth Chart Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-mustard rounded-full px-6 py-3 mb-6 shadow-lg border-2 border-gold/50">
              <TrendingUp className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Growth Story</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif">
              <span className="block text-rose-500">From Humble Handcart</span>
              <span className="block text-mustard">to City Institution</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-6">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-16 w-auto"
              />
            </div>

            <p className="text-xl text-dark/80 max-w-4xl mx-auto font-serif italic leading-relaxed">
              Witness the remarkable journey of growth that spans 75 years — from serving 50 customers a day
              in 1950 to delighting over 5,500 daily visitors today. Each data point represents countless
              smiles, memories, and moments of pure joy.
            </p>
          </div>

          {/* Growth Chart */}
          <div className="bg-cream/50 rounded-3xl p-8 border-4 border-gold/30 shadow-xl">
            <div className="grid grid-cols-5 gap-4 h-96 items-end">
              {growthData.map((data) => {
                const height = (data.customers / 30000) * 256; // 256px = h-64

                return (
                  <div key={data.year} className="text-center">
                    {/* Bar */}
                    <div className="relative mb-4">
                      <div
                        className="w-full bg-gradient-to-t from-rose-500 to-mustard rounded-t-lg mx-auto shadow-lg border-2 border-gold/30"
                        style={{
                          maxWidth: '60px',
                          height: `${height}px`
                        }}
                      ></div>

                      {/* Customer Count */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark text-cream px-2 py-1 rounded text-xs font-bold">
                        {data.customers.toLocaleString()}
                      </div>
                    </div>

                    {/* Year Label */}
                    <div className="text-dark font-bold font-serif">
                      {data.year}
                    </div>

                    {/* Outlets Count */}
                    <div className="text-rose-500 text-sm font-semibold">
                      {data.outlets} outlet{data.outlets > 1 ? 's' : ''}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-white to-cream/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-mustard rounded-full px-6 py-3 mb-6 shadow-lg border-2 border-gold/50">
              <Award className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Legacy in Numbers</span>
            </div>
            <img
              src={plate}
              className="w-96 h-auto object-cover flex m-auto"
              loading="lazy"
            />
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif">
              <span className="block text-rose-500">75 Years of</span>
              <span className="block text-mustard">Memories Served</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream/50 rounded-3xl text-center shadow-xl border-4 border-gold/30 hover:shadow-2xl transition-all duration-300">
              <div className="text-6xl font-bold text-rose-500 mb-4 font-serif">25+</div>
              <div className="text-xl font-bold text-dark mb-2 font-serif">Crore Glasses</div>
            </div>

            <div className="bg-cream/50 rounded-3xl text-center shadow-xl border-4 border-gold/30 hover:shadow-2xl transition-all duration-300">
              <div className="text-6xl font-bold text-rose-500 mb-4 font-serif">20</div>
              <div className="text-xl font-bold text-dark mb-2 font-serif">Outlets</div>
            </div>

            <div className="bg-cream/50 rounded-3xl text-center shadow-xl border-4 border-gold/30 hover:shadow-2xl transition-all duration-300">
              <div className="text-6xl font-bold text-rose-500 mb-4 font-serif">100+</div>
              <div className="text-xl font-bold text-dark mb-2 font-serif">Expert Staff members</div>
              {/* <div className="text-dark/70">Unchanged since day one</div> */}
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
            Taste the Legacy Today
          </h2>
          <p className="text-xl mb-12 text-cream/90 font-serif italic">
            Experience the same authentic taste that has been cherished for 75 years.
          </p>

          <div className="">

            <Link
              to="/about/leadership"
              className="border-2 border-cream text-cream px-8 py-4 rounded-full font-bold hover:bg-cream hover:text-rose-500 transition-colors inline-flex items-center justify-center group shadow-xl font-serif"
            >
              <Users className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Meet Our Family
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Rose Street Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <FloatingPetals />
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/30 relative p-8 sm:p-12 lg:p-16">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-mustard/5 pointer-events-none"></div>

            {/* Logo and Title */}
            <div className="flex items-center mb-6">
              <img
                src={newlogoImg}
                alt="Brand Logo"
                className="w-36 h-18"
              />
              <div>
                <h2 className="text-4xl font-bold text-dark font-serif mb-2">Rose Street</h2>
                <p className="text-lg text-rose-500 font-serif italic">
                  A modern tribute to the iconic Rajahmundry Rose Milk.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-cream/50 border-l-4 border-rose-500 p-6 rounded-r-lg mb-8 shadow-lg">
              <div className="flex items-start">
                <Quote className="h-6 w-6 text-rose-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg text-dark font-serif italic">
                  "Rose Street is a curated lifestyle experience inspired by the
                  timeless taste and tradition of Rajahmundry Rose Milk."
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-rose-500 rounded-full p-2 mr-4 mt-1 shadow-lg border border-gold/50">
                  <Heart className="h-4 w-4 text-cream" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark font-serif mb-2">Nostalgia-Infused Treats</h3>
                  <p className="text-dark/80">
                    Special desserts and creations that carry the essence of
                    Rajahmundry's signature rose flavor.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-mustard rounded-full p-2 mr-4 mt-1 shadow-lg border border-gold/50">
                  <Award className="h-4 w-4 text-cream" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark font-serif mb-2">A Taste of Tradition</h3>
                  <p className="text-dark/80">
                    Bringing the charm of yesteryear into modern spaces through
                    curated rose-based experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-cream/30 rounded-2xl p-6 text-center border-2 border-gold/30 shadow-lg">
              <p className="text-xl font-bold text-dark mb-4 font-serif">
                We're taking nostalgia and turning it into a lifestyle.
              </p>
              <a
                href="https://rrosestreet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-rose-500 text-cream px-8 py-4 rounded-full font-bold hover:bg-dark transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-gold/50 font-serif"
              >
                Visit Rose Street
                <ExternalLink className="h-5 w-5 ml-2" />
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StoryPage;