import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Mountain,
  Waves,
  TreePine,
  Star,
  Heart,
  Crown,
  Award,
  Leaf,
  Building
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import patternImg from '../assets/design/pattern.png';
import dividerImg from '../assets/design/divider.png';
import papikondaluImg from '../assets/tourism/pk.png';
import maredumilliImg from '../assets/tourism/mm.jpg';
import rampachodavaramImg from '../assets/tourism/rc.webp';
import iskconImg from '../assets/tourism/it.png';
import vadapalliImg from '../assets/tourism/kt.webp';
import kadiyapulankaImg from '../assets/tourism/kn.jpg';
import pushkaraluImg from '../assets/tourism/pushkaralu.jpg';
import pushkarImg from '../assets/tourism/pg.jpg';

const TourismPage = () => {
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

  const touristPlaces = [
    {
      id: 'papikondalu',
      name: 'Papi Kondalu (Papikondalu Hills)',
      image: papikondaluImg,
      shortDescription: 'A breathtaking hill range where the Godavari river carves its way through misty green mountains.',
      longDescription: 'Papikondalu is often called the "Andhra Kashmir" for its scenic beauty. The serene boat cruise through the winding river valleys offers panoramic views, tribal hamlets, and untouched landscapes. It\'s the perfect escape for photographers, families, and explorers.',
      bestTime: 'October to March (winter & early summer for boat rides)',
      category: 'Nature, Adventure, Family',
      expectations: 'Day-long boat cruises, misty sunrise, tribal souvenirs, fresh fish meals onboard.',
      icon: Mountain,
      color: 'rose-500'
    },
    {
      id: 'maredumilli',
      name: 'Maredumilli Forests & Waterfalls',
      image: maredumilliImg,
      shortDescription: 'A nature lover\'s paradise filled with waterfalls, bamboo groves, and eco-tourism resorts.',
      longDescription: 'Maredumilli, nestled in the Eastern Ghats, is home to Amruthadhara and Jalatharangini waterfalls, coffee plantations, and bamboo forests. It\'s popular for eco-tourism stays and tribal delicacies like Bamboo Chicken. Travelers often club this with Rampachodavaram waterfalls.',
      bestTime: 'Monsoon & Winter (July–January)',
      category: 'Eco-Tourism, Nature, Adventure',
      expectations: 'Waterfall treks, bamboo chicken, eco-resorts, birdwatching.',
      icon: TreePine,
      color: 'rose-500'
    },
    {
      id: 'rampachodavaram',
      name: 'Rampachodavaram Waterfalls',
      image: rampachodavaramImg,
      shortDescription: 'Cascading waterfalls deep inside lush green forests.',
      longDescription: 'Rampachodavaram is famed for its serene environment and thick forest backdrop. It\'s an offbeat spot where travelers trek, picnic, and enjoy pristine natural water streams. The tribal culture around adds a unique cultural dimension.',
      bestTime: 'July to December',
      category: 'Adventure, Nature, Offbeat',
      expectations: 'Trekking trails, monsoon water gush, picnics, photography.',
      icon: Waves,
      color: 'rose-500'
    },
    {
      id: 'pushkar-ghat',
      name: 'Pushkar Ghat',
      image: pushkarImg,
      shortDescription: 'The holiest bathing ghat in Rajahmundry, where devotion meets the Godavari.',
      longDescription: 'Located in the city\'s heart, Pushkar Ghat is the center of Godavari Pushkaralu, attracting millions of pilgrims. The ghat glows beautifully during sunrise and aarti time. Even outside festivals, it offers a peaceful riverside experience.',
      bestTime: 'Early Morning, during Pushkaralu (2021–2027 cycle)',
      category: 'Spiritual, Cultural, Family',
      expectations: 'Ritual dips, morning aartis, temple bells, festive crowds.',
      icon: Crown,
      color: 'rose-500'
    },
    {
      id: 'vadapalli-temple',
      name: 'Vadapalli Sri Venkateswara Swamy Temple(Konaseema Tirupathi)',
      image: vadapalliImg,
      shortDescription: 'An ancient temple dedicated to Lord Venkateswara, amidst serene greenery.',
      longDescription: 'The Vadapalli temple is a spiritual escape located close to Rajahmundry. It\'s especially famous during festivals, where thousands gather for prayers. The temple architecture reflects a mix of Dravidian style and local traditions.',
      bestTime: 'Mornings, especially Saturdays & festivals',
      category: 'Spiritual, Heritage',
      expectations: 'Rituals, prasadam, peaceful darshan.',
      icon: Building,
      color: 'rose-500'
    },
    {
      id: 'iskcon-temple',
      name: 'ISKCON Temple Rajahmundry',
      image: iskconImg,
      shortDescription: 'A spiritual retreat filled with bhajans, chants, and temple art.',
      longDescription: 'The ISKCON temple is one of Rajahmundry\'s prime attractions, known for its grand architecture and daily aartis. Visitors experience peace amidst soulful chanting of "Hare Krishna." The temple also hosts cultural programs and spiritual lectures.',
      bestTime: 'Morning aarti (6–8 am) or evening prayers (6–7 pm)',
      category: 'Spiritual, Family',
      expectations: 'Spiritual atmosphere, cultural events, prasadam.',
      icon: Heart,
      color: 'rose-500'
    },
    {
      id: 'kadiyapulanka',
      name: 'Kadiyapulanka Nurseries',
      image: kadiyapulankaImg,
      shortDescription: 'Known as the "Florist\'s Paradise" with thousands of plant species.',
      longDescription: 'Kadiyapulanka is a horticultural hub where lush nurseries bloom with exotic flowers, medicinal plants, and decorative saplings. It\'s a colorful destination for nature lovers and gardening enthusiasts.',
      bestTime: 'Early Morning',
      category: 'Nature, Eco-tourism',
      expectations: 'Colorful nurseries, flower shopping, guided tours.',
      icon: Leaf,
      color: 'rose-500'
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
          <span className="text-rose-500 font-medium">Tourism</span>
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

            <h1 className="text-5xl lg:text-7xl font-bold text-dark mb-8 font-serif leading-tight">
              <span className="block text-rose-500 drop-shadow-lg">Rajahmundry</span>
              <span className="block text-mustard">The Cultural Capital of AP</span>
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
              "Experience the nature's embrace and spiritual serenity in Rajahmundry, where every corner tells a story of timeless beauty and devotion."
            </p>
          </div>

        </div>
      </section>

      {/* Featured Tourist Places Section */}
      <section id="featured-places" className="py-20 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-white to-cream/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="space-y-20">
            {touristPlaces.map((place, index) => {
              const IconComponent = place.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={place.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                  data-animate
                  id={`place-${index}`}
                >
                  {/* Content */}
                  <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'} transform transition-all duration-1000 ${visibleSections.has(`place-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex items-center mb-6">
                      {/* <div className={`bg-${place.color} rounded-full w-20 h-20 flex items-center justify-center mr-6 shadow-xl border-4 border-gold/50`}>
                        <IconComponent className="h-10 w-10 text-cream" />
                      </div> */}
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-dark font-serif mb-2">
                          {place.name}
                        </h3>
                        <div className={`text-lg font-bold text-${place.color} font-serif`}>
                          {place.category}
                        </div>
                      </div>
                    </div>

                    <div className="bg-cream/50 border-l-4 border-rose-500 p-6 rounded-r-lg mb-6 shadow-lg">
                      <p className="text-lg text-dark font-bold font-serif italic mb-4">
                        {place.shortDescription}
                      </p>
                      <p className="text-dark/80 leading-relaxed">
                        {place.longDescription}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      <div className="bg-white/70 border border-gold/30 p-4 rounded-lg shadow-sm">
                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-dark font-serif">Best Time to Visit</h4>
                            <p className="text-dark/70">{place.bestTime}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/70 border border-gold/30 p-4 rounded-lg shadow-sm">
                        <div className="flex items-start">
                          <Star className="h-5 w-5 text-mustard mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-dark font-serif">What to Expect</h4>
                            <p className="text-dark/70">{place.expectations}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} relative transform transition-all duration-1000 delay-300 ${visibleSections.has(`place-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="rounded-3xl transform hover:scale-105 transition-transform duration-300 shadow-2xl relative overflow-hidden group">
                      {/* Background Glow */}
                      <div className={`absolute inset-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pushkaralu Event Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/20 via-white to-cream/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className='order-2'>
              <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-6 shadow-lg border-2 border-gold/50">
                <Crown className="h-5 w-5 text-cream mr-2" />
                <span className="text-cream font-bold font-serif">Upcoming Event Highlight</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif">
                <span className="block text-mustard">Pushkaralu 2027</span>
              </h2>

              {/* Decorative Divider */}
            <div className="mb-4">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-12 w-auto"
              />
            </div>

              <div className="bg-cream/50 border-l-4 border-rose-500 p-6 rounded-r-lg mb-6 shadow-lg">
                <p className="text-xl text-dark font-bold font-serif mb-4">
                  Every 12 years, Rajahmundry becomes the <strong className="text-rose-500">epicenter of devotion</strong> during <strong className="text-rose-500">Godavari Pushkaralu</strong>.
                </p>
                <p className="text-lg text-dark/80 leading-relaxed">
                  Millions gather for the sacred dip at <strong className="text-rose-500">Pushkar Ghat</strong>, accompanied by grand rituals and cultural events.
                </p>
              </div>

              <div className="flex items-center bg-mustard/20 border border-gold/30 p-4 rounded-lg shadow-sm">
                <Award className="h-6 w-6 text-mustard mr-3" />
                <span className="text-dark font-bold font-serif">Once-in-a-lifetime spiritual experience</span>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 relative">
              <div className="transform hover:scale-105 transition-transform duration-300 shadow-2xl relative overflow-hidden">
                <div className="relative z-10 overflow-hidden rounded-2xl">
                  <img
                    src={pushkaraluImg}
                    alt="Pushkaralu Festival"
                    className="w-full md:h-80 object-cover"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel Rajahmundry Section */}
      <section className="py-20 bg-rose-500 text-cream relative overflow-hidden">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-cream/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border-2 border-gold/50">
            <Heart className="h-6 w-6 text-gold mr-3" />
            <span className="text-gold font-bold text-lg font-serif">The Experience</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-8 font-serif">
            Why Travel Rajahmundry?
          </h2>

          {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-8">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-16 w-auto"
              />
            </div>

          <div className="bg-cream/10 backdrop-blur-sm border-l-4 border-gold p-8 rounded-r-lg shadow-xl border-2 border-gold/30 mb-12">
            <p className="text-2xl lg:text-3xl text-cream/95 leading-relaxed font-serif">
              From <strong className="text-gold">Maredumilli's misty forests</strong> to the <strong className="text-gold">sacred ghats of Pushkaralu</strong>, Rajahmundry is where <strong className="text-gold">nature and spirituality meet</strong>. Whether you're chasing waterfalls, cruising along Papikondalu, or tasting authentic Godavari food, <strong className="text-gold">every traveler leaves with a story worth remembering</strong>.
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/stores"
              className="bg-cream text-rose-500 px-10 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center border-2 border-gold/50 font-serif text-lg"
            >
              <Heart className="h-6 w-6 mr-3" />
              Taste Authentic Rose Milk
              <Sparkles className="h-6 w-6 ml-3" />
            </Link>

            <Link
              to="/about/story"
              className="border-2 border-cream text-cream px-10 py-4 rounded-full font-bold hover:bg-cream hover:text-rose-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center font-serif text-lg"
            >
              <Users className="h-6 w-6 mr-3" />
              Our Heritage Story
              <ArrowRight className="h-6 w-6 ml-3" />
            </Link>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourismPage;