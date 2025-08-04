import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Clock,
  CheckCircle,
  ArrowRight,
  Award,
  Instagram,
  Crown,
  Droplets,
  ExternalLink,
  Quote,
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import OldLogo from '../assets/oldlogo1.png';
import newlogoImg from '../assets/newlogo.png';
import patternImg from '../assets/design/pattern.png';
import dividerImg from '../assets/design/divider.png';
import handcartImg from '../assets/design/handcart.png';
import hrImg from '../assets/design/rangoli.png';
import bridgeImg from '../assets/design/bridge.png';
import RoseMilkImg from '../assets/products/rosemilk.png';
import RosekovaImg from '../assets/products/rosekova.png';
import SemiaImg from '../assets/products/rosesemia.png';
import sakshimainImg from '../assets/newsletters/sakshimain.jpg';
import sakshirjyImg from '../assets/newsletters/sakshirjy.jpg';
import hansindiaImg from '../assets/newsletters/hansindia.jpg';
import eenaduImg from '../assets/newsletters/eenadu.jpg';
import theweekImg from '../assets/newsletters/theweek.jpg';
import rosemilkvdo from '../assets/videos/rosemilk.mp4';
import rxVdo from '../assets/videos/rx100.mp4';
import karimaVdo from '../assets/videos/kwy.mp4';
import ax4 from '../assets/videos/ax4.mp4';
import localcustVdo from '../assets/videos/localcust.mp4';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Hero Section */}
      <section id="hero-section" className="relative overflow-hidden bg-cream">
        {/* Background */}
        <div className="absolute">
          <div className="w-full h-full bg-gradient-to-br from-mustard/20 via-transparent to-rose-500/20"></div>
        </div>

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

        {/* <div className="relative w-full"> */}
        {/* Top Horizontal Rangoli */}
        {/* <div
            className="w-full h-[30px]"
            style={{
              backgroundImage: `url(${hrImg})`,
              backgroundRepeat: 'repeat-x',
              backgroundSize: 'auto 100%',
              backgroundPosition: 'top left',
            }}
          ></div> */}

        {/* Corner Rangoli */}
        {/* <div
            className="absolute top-0 left-[0px] w-[60px] h-[55px]"
            style={{
              backgroundImage: `url(${crImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          ></div> */}

        {/* </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-4 gap-8 items-center">
            {/* Left side - Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className={`w-full max-w-xs flex items-center justify-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="relative">
                  <div className="absolute blur-xl animate-pulse"></div>
                  <div className="">
                    <img
                      src={OldLogo}
                      alt="Rajahmundry Rose Milk"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className={`lg:col-span-3 text-center lg:text-left transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-8 shadow-lg border-2 border-gold/30">
                <Crown className="h-5 w-5 text-cream mr-2" />
                <span className="text-cream font-bold tracking-wide font-serif">
                  Since 1950
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-dark mb-6 font-serif leading-tight">
                <span className="block text-rose-500 drop-shadow-lg">The Original</span>
                <span className="block text-mustard">Rajahmundry</span>
                <span className="block text-mustard">Rose Milk</span>
              </h1>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <img
                  src={dividerImg}
                  alt="Section Separator"
                  className="h-16 w-auto"
                />
              </div>


              <p className="text-xl lg:text-2xl text-dark/80 mb-8 max-w-4xl mx-auto lg:mx-0 leading-relaxed font-serif italic">
                "Refreshing. Nostalgic. Irresistible. Taste the timeless rose
                milk recipe that has captured hearts for over 75 years —  Rajahmundry's Iconic Dessert Drink Since 1950."
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <div className="flex items-center text-dark/70 bg-white/50 px-4 py-2 rounded-full border border-gold/30">
                  <CheckCircle className="h-5 w-5 text-rose-500 mr-2" />
                  <span className="font-semibold">Delivered Fresh</span>
                </div>
                <div className="flex items-center text-dark/70 bg-white/50 px-4 py-2 rounded-full border border-gold/30">
                  <CheckCircle className="h-5 w-5 text-rose-500 mr-2" />
                  <span className="font-semibold">100% Authentic</span>
                </div>
                <div className="flex items-center text-dark/70 bg-white/50 px-4 py-2 rounded-full border border-gold/30">
                  <CheckCircle className="h-5 w-5 text-rose-500 mr-2" />
                  <span className="font-semibold">Ready to Sip</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* Heritage Section */}
      <section className="relative w-full overflow-hidden bg-[#f7f7f7]">
        {/* Content on Top (optional: can be placed above or below image) */}
        <div className="w-full h-full flex flex-col px-4 sm:px-6 lg:px-8 pointer-events-none">
          <h1 className="text-5xl lg:text-6xl font-bold text-dark mb-6 font-serif">
            Our Legacy
          </h1>

          <p className="text-xl lg:text-2xl text-dark font-serif">
            From the Streets of Rajahmundry, With Love Since 1950
          </p>
        </div>
        {/* Full-Width Image */}
        <div className="w-full">
          <img
            src={bridgeImg}
            alt="Rajahmundry Bridge - Our Heritage"
            className="w-[120%] h-auto"
          />
        </div>

      </section>



      {/* Story Section */}
      <section id="story" className="py-20 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/50 via-white to-cream/30"></div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-gold/40 border-double"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-gold/40 border-double"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-gold/40 border-double"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-gold/40 border-double"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <div className="bg-mustard rounded-full p-3 mr-4 shadow-lg">
                  <Clock className="h-6 w-6 text-cream" />
                </div>
                <span className="text-rose-500 font-bold text-xl font-serif tracking-wide">
                  Our Legacy
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif leading-tight">
                From a Street Corner in
                <span className="block text-rose-500">1950 to Homes</span>
                <span className="block text-mustard">Across India</span>
              </h2>

              {/* Decorative Divider */}
              <div className="flex items-center mb-6">
                <img
                  src={dividerImg}
                  alt="Section Separator"
                  className="h-10 w-auto"
                />
              </div>

              <div className="bg-cream/50 border-l-4 border-rose-500 p-6 rounded-r-lg mb-6 shadow-lg">
                <p className="text-lg text-dark leading-relaxed font-serif italic">
                  "In the bustling town of Rajahmundry, <b>Shri Gubba Simhachalam </b>
                  created something unforgettable — a rose milk recipe so unique
                  it became a legacy. Infused with rich tradition and unmatched
                  craftsmanship, it turned passersby into lifelong devotees."
                </p>
              </div>

              <p className="text-lg text-dark/80 mb-8 leading-relaxed">
                Today, we've preserved every bit of that magic — from the flavor
                to the feeling — and brought it to your doorstep, in
                ready-to-drink cups that carry the soul of tradition.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start bg-white/70 p-4 rounded-lg border border-gold/30 shadow-sm">
                  <div className="bg-rose-500 rounded-full p-2 mr-4">
                    <Crown className="h-4 w-4 text-cream" />
                  </div>
                  <span className="text-dark font-semibold">
                    Recipe passed down through 3 generations
                  </span>
                </div>
                <div className="flex items-start bg-white/70 p-4 rounded-lg border border-gold/30 shadow-sm">
                  <div className="bg-rose-500 rounded-full p-2 mr-4">
                    <Droplets className="h-4 w-4 text-cream" />
                  </div>
                  <span className="text-dark font-semibold">
                    Made fresh with real rose essence and Ayurvedic herbs
                  </span>
                </div>
                <div className="flex items-start bg-white/70 p-4 rounded-lg border border-gold/30 shadow-sm">
                  <div className="bg-rose-500 rounded-full p-2 mr-4">
                    <Heart className="h-4 w-4 text-cream" />
                  </div>
                  <span className="text-dark font-semibold">
                    A drink that celebrates India's timeless taste traditions
                  </span>
                </div>
              </div>

              <Link
                to="/about/story"
                className="text-rose-500 font-bold inline-flex items-center hover:text-dark transition-colors bg-white/50 px-6 py-3 rounded-full border border-gold/30 shadow-lg hover:shadow-xl font-serif"
              >
                <span>Discover Our Complete Story</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="relative order-1 lg:order-2 flex items-center justify-center min-h-[368px] lg:min-h-[500px]">
              <div className="relative w-full min-h-[368px] lg:min-h-[500px]">

                {/* Cart */}
                <img
                  src={handcartImg}
                  alt="75 years old cart"
                  className={`absolute inset-0 w-full h-full object-contain z-10
                    }`}
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rose Milk Pouring Video Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Container */}
        <div className="relative w-full h-full">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={rosemilkvdo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay for Better Text Readability */}
          <div className="absolute"></div>

          {/* Overlaid Caption */}
          <div className="absolute bottom-8 right-8 z-10">
            <div className="text-right px-4">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight drop-shadow-2xl">
                <span className="block">Born on the Streets</span>
                <span className="block text-rose-300">Loved Across Generations</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-serif italic drop-shadow-lg max-w-3xl">
                "Poured fresh, just like it’s been since 1950."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section id="products" className="py-20 bg-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Header */}
            <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-8 shadow-lg border-2 border-gold/50">
              <Award className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Premium Collection</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif leading-tight">
              <span className="block text-rose-500">Rajahmundry's Finest,</span>
              <span className="block text-mustard">Now Ready-to-Drink</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-6">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-12 w-auto"
              />
            </div>

            <p className="text-xl text-dark/80 max-w-3xl mx-auto font-serif italic">
              Each product crafted with the same love and attention that made us
              famous over seven decades ago.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Rose Milk - Featured Product */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-4 border-gold/30 relative overflow-hidden group">


              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-mustard/10 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="text-center mb-6 relative z-10">
                <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-cream/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img
                    src={RoseMilkImg}
                    alt="Rose Milk"
                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2 font-serif">
                  Rose Milk
                </h3>
                <p className="text-rose-500 font-bold font-serif text-lg">
                  The signature. The legend.
                </p>
              </div>

              <div className="bg-cream/50 border-l-4 border-rose-500 p-4 rounded-r-lg mb-6">
                <p className="text-dark leading-relaxed font-serif italic">
                  "A chilled, creamy blend of milk and rose essence — smooth,
                  fragrant, and nostalgic in every sip. Still made just the way
                  Sri Gulab intended."
                </p>
              </div>
            </div>

            {/* Semia */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-4 border-gold/30 relative overflow-hidden group">


              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-mustard/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="text-center mb-6 relative z-10">
                <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-cream/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img
                    src={SemiaImg}
                    alt="Semia"
                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2 font-serif">
                  Semia
                </h3>
                <p className="text-rose-500 font-bold font-serif text-lg">
                  The comfort drink reimagined.
                </p>
              </div>

              <div className="bg-cream/50 border-l-4 border-rose-500 p-4 rounded-r-lg mb-6">
                <p className="text-dark leading-relaxed font-serif italic">
                  "Our classic rose milk swirled with soft vermicelli – silky,
                  satisfying, and soothing to the soul."
                </p>
              </div>
            </div>

            {/* Rose Kova */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-4 border-gold/30 relative overflow-hidden group">

              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="text-center mb-6 relative z-10">
                <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-cream/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img
                    src={RosekovaImg}
                    alt="Rose Kova"
                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2 font-serif">
                  Rose Kova
                </h3>
                <p className="text-rose-500 font-bold font-serif text-lg">
                  Premium indulgence.
                </p>
              </div>

              <div className="bg-cream/50 border-l-4 border-rose-500 p-4 rounded-r-lg mb-6">
                <p className="text-dark leading-relaxed font-serif italic">
                  "A decadent fusion of traditional kova with the fragrant
                  sweetness of rose milk. Rich, creamy, and unforgettable."
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="bg-rose-500 text-cream px-10 py-4 rounded-full text-lg font-bold hover:bg-dark transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center border-2 border-gold/50 font-serif"
            >
              <Award className="mr-3 h-6 w-6" />
              <span>Explore Our Collection</span>
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* News & Mentions Section */}
      <section id="news-mentions" className="py-20 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-white to-cream/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-rose-500 rounded-full p-3 mr-4 shadow-lg">
                <Award className="h-6 w-6 text-cream" />
              </div>
              <span className="text-mustard font-bold text-xl font-serif tracking-wide">
                In the News
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark font-serif mb-6 leading-tight">
              <span className="block text-rose-500">Featured in</span>
              <span className="block text-mustard">Media & Press</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-6">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-12 w-auto"
              />
            </div>

            <p className="text-xl text-dark/80 max-w-3xl mx-auto font-serif italic">
              Discover what the media and internet are saying about our 75-year legacy of authentic taste.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Article 1 - The Week */}
            <div className="bg-cream rounded-3xl p-8 border-4 border-gold/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group flex items-center">
              <div className="mb-6 relative z-10">
                <div className="w-full h-full mb-4 shadow-lg border-2 border-gold/50 rounded-lg overflow-hidden">
                  <img
                    src={theweekImg}
                    alt="The Week"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 font-serif">
                  A glass of rosy summertime goodness
                </h3>
                <p className="text-dark/80 mb-4 font-serif leading-relaxed">
                  A tall glass of pink-coloured, milky goodness that brings back memories of good old times. It is this timeless goodness that continues to draw customers to the Rose Milk Centre, Rajahmundry, Andhra Pradesh, probably one of the oldest centres to serve the rose milk drink.
                </p>
                <div className="flex items-center text-rose-500 font-bold font-serif text-sm">
                  <Award className="h-4 w-4 mr-2" />
                  <span>The Week</span>
                </div>
              </div>
            </div>

            {/* News Article 2 - Hans India */}
            <div className="bg-cream rounded-3xl p-8 border-4 border-gold/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group flex items-center">
              <div className="mb-6 relative z-10">
                <div className="w-full h-full mb-4 shadow-lg border-2 border-gold/50 rounded-lg overflow-hidden">
                  <img
                    src={hansindiaImg}
                    alt="Hans India"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 font-serif">
                  Rajamahendravaram’s rose milk continues to remain customer’s delight
                </h3>
                <p className="text-dark/80 mb-4 font-serif leading-relaxed">
                  Rajamahendravaram: The city of grand culture is famous for some business establishments, which has brought name and fame to the city for over 70 years. One among them is the 'Rose Milk' centre, which is well known across the state.
                </p>
                <div className="flex items-center text-rose-500 font-bold font-serif text-sm">
                  <Award className="h-4 w-4 mr-2" />
                  <span>Hans India</span>
                </div>
              </div>
            </div>

            {/* News Article 3 - Sakshi Main */}
            <div className="bg-cream rounded-3xl p-8 border-4 border-gold/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group flex items-center">
              <div className="mb-6 relative z-10">
                <div className="w-full h-full mb-4 shadow-lg border-2 border-gold/50 rounded-lg overflow-hidden">
                  <img
                    src={sakshimainImg}
                    alt="Sakshi Main"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center text-rose-500 font-bold font-serif text-sm">
                  <Award className="h-4 w-4 mr-2" />
                  <span>Sakshi Main</span>
                </div>
              </div>
            </div>

            {/* News Article 4 - Sakshi Rjy */}
            <div className="bg-cream rounded-3xl p-8 border-4 border-gold/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group flex items-center">
              <div className="mb-6 relative z-10">
                <div className="w-full h-full mb-4 shadow-lg border-2 border-gold/50 rounded-lg overflow-hidden">
                  <img
                    src={sakshirjyImg}
                    alt="Sakshi Rjy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center text-rose-500 font-bold font-serif text-sm">
                  <Award className="h-4 w-4 mr-2" />
                  <span>Sakshi Rjy</span>
                </div>
              </div>
            </div>

            {/* News Article 5 - Eenadu */}
            <div className="bg-cream rounded-3xl p-8 border-4 border-gold/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group flex items-center">
              <div className="mb-6 relative z-10">
                <div className="w-full h-full mb-4 shadow-lg border-2 border-gold/50 rounded-lg overflow-hidden">
                  <img
                    src={eenaduImg}
                    alt="Eenadu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center text-rose-500 font-bold font-serif text-sm">
                  <Award className="h-4 w-4 mr-2" />
                  <span>Eenadu</span>
                </div>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-rose-500/10 border-l-4 border-rose-500 p-8 rounded-r-lg shadow-xl border-2 border-gold/30 max-w-4xl mx-auto">
              <p className="text-2xl text-dark font-bold font-serif mb-4">
                "From a humble handcart to national recognition"
              </p>
              <p className="text-xl text-dark/80 font-serif italic">
                Experience the taste that's capturing hearts across India and making headlines everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Videos Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-8 shadow-lg border-2 border-gold/50">
              <Heart className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Hear From Our Fans</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif leading-tight">
              <span className="block text-rose-500">Voices of Joy</span>
              <span className="block text-mustard">Fueled by Flavor</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-6">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-12 w-auto"
              />
            </div>

            <p className="text-xl text-dark/80 max-w-3xl mx-auto font-serif italic">
              These aren’t reviews — they’re love letters poured over rose milk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {/* Video 1 - Portrait (spans 2 rows on large screens) */}
            <div className="w-full sm:row-start-1 sm:row-end-4 lg:col-start-1 lg:row-start-1 lg:row-end-3">
              <div className="aspect-[9/16] overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={localcustVdo} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Video 2 */}
            <div className="w-full lg:col-start-2 lg:row-start-1">
              <div className="aspect-video overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={karimaVdo} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Video 3 */}
            <div className="w-full sm:row-start-2 sm:row-end-3 lg:col-start-3 lg:row-start-1">
              <div className="aspect-video overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={ax4} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Video 4 - spans 2 columns on large */}
            <div className="w-full sm:row-start-3 sm:row-end-4 lg:col-start-2 lg:row-start-2 lg:col-end-4">
              <div className="aspect-video overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={rxVdo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>


          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-rose-500/10 border-l-4 border-rose-500 p-8 rounded-r-lg shadow-xl border-2 border-gold/30 max-w-4xl mx-auto mb-8">
              <p className="text-2xl text-dark font-bold font-serif mb-4">
                "Join thousands of food lovers sharing their Rose Milk moments"
              </p>
              <p className="text-xl text-dark/80 font-serif italic">
                Follow us on Instagram and share your own experience with #RajahmundryRoseMilk
              </p>
            </div>

            <a
              href="https://www.instagram.com/rajahmundryrosemilkoffl/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 text-cream px-10 py-4 rounded-full text-lg font-bold hover:bg-dark transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center border-2 border-gold/50 font-serif"
            >
              <Instagram className="mr-3 h-6 w-6" />
              <span>Follow Us on Instagram</span>
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Rose Street Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
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
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/30 relative p-8 sm:p-12 lg:p-16">

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
                <div className="bg-mustard rounded-full p-2 mr-4 mt-1 shadow-lg border border-gold/50">
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

export default HomePage;