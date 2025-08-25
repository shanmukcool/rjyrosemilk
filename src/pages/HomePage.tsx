import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import {
  Heart,
  Clock,
  CheckCircle,
  ArrowRight,
  Award,
  Instagram,
  Image,
  Crown,
  Droplets,
  ExternalLink,
  ScanBarcode,
  Users,
  Camera,
  Sparkles,
} from 'lucide-react';
import FindNearestStoreButton from "../components/FindNearestStoreButton";
import RoseStreetButton from "../components/RoseStreetButton";
import Header from '../components/Header';
import Footer from '../components/Footer';
import zomatoImg from '../assets/awards/zomato.png';
import nidhiImg from '../assets/awards/nidhi-min.jpg';
import prithviraj from '../assets/gallery/celebritys/20-min.png';
import hit2 from '../assets/gallery/celebritys/5-min.jpg';
import sarathkumar from '../assets/gallery/celebritys/2-min.jpg';
import newlogoImg from '../assets/newlogo.png';
import OriginalImg from '../assets/design/original.png';
import FssaiImg from '../assets/design/fssaisar.png';
import dividerImg from '../assets/design/divider.png';
import handcartImg from '../assets/design/handcart.png';
import bridgeImg from '../assets/design/legacy.png';
import RoseMilkSyrupImg from '../assets/products/rosemilksyrup.png';
import RoseMilkImg from '../assets/products/rosemilk.png';
import RosekovaImg from '../assets/products/rosekova.png';
import SemiaImg from '../assets/products/rosesemia.png';
import sakshi from '../assets/np/sicon.png';
import eenadu from '../assets/np/eicon.png';
import hansindia from '../assets/np/hiicon.png';
import theweek from '../assets/np/twicon.png';
import rosemilkvdo from '../assets/videos/visuals.mp4';
import rxVdo from '../assets/videos/rx100.mp4';
import karimaVdo from '../assets/videos/kwy.mp4';
import ax4 from '../assets/videos/ax4.mp4';
import localcustVdo from '../assets/videos/localcust.mp4';
import papikondaluImg from '../assets/tourism/pk.png';
import maredumilliImg from '../assets/tourism/mm.jpg';
import pushkarImg from '../assets/tourism/pg.jpg';

const HomePage = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const touristHighlights = [
    {
      title: 'Papikondalu Hills',
      description: 'Breathtaking boat cruises through misty mountains',
      image: papikondaluImg,
      color: 'rose-500'
    },
    {
      title: 'Sacred Pushkar Ghat',
      description: 'Holy bathing ghat on the banks of River Godavari',
      image: pushkarImg,
      color: 'mustard'
    },
    {
      title: 'Maredumilli Forests',
      description: 'Pristine waterfalls and eco-tourism paradise',
      image: maredumilliImg,
      color: 'gold'
    }
  ];
  useEffect(() => {
    if (trackRef.current) {
      const firstSetWidth = trackRef.current.scrollWidth / 2; // width of one icon set
      setScrollWidth(firstSetWidth);
    }
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [showRoseStreet, setShowRoseStreet] = useState(false);

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
    <div className="min-h-screen bg-[#fefdf4] ">
      <Header />

      {/* Hero Section */}
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

        </div>
      </section>

      {/* Rose Milk Syrup Section */}
      <section id="rose-milk-syrup" className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 from-cream/40 via-white to-cream/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">

            {/* Left Side - Syrup Bottle Image with Watermarks */}
            <div className="flex items-center justify-center relative">
              <div className="relative w-[320px] h-[480px] flex items-center justify-center">
                <img
                  src={RoseMilkSyrupImg}
                  alt="Rose Milk Syrup"
                  className="w-full h-auto object-contain"
                />

                {/* Floating Watermark Badges */}
                <motion.img
                  src={OriginalImg}
                  alt="100% Original"
                  className="w-24 h-24 absolute -top-0 -left-6"
                  initial={{ scale: 2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true, amount: 0.5 }}
                />

                <motion.img
                  src={FssaiImg}
                  alt="FSSAI Approved"
                  className="w-24 h-24 absolute top-1 -right-5"
                  initial={{ scale: 2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
                  viewport={{ once: true, amount: 0.5 }}
                />
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <div className="bg-rose-500 rounded-full p-3 mr-4 shadow-lg">
                  <Award className="h-6 w-6 text-cream" />
                </div>
                <span className="text-mustard font-bold text-xl font-serif tracking-wide">
                  Rose Milk Syrup
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif leading-tight">
                <span className="block text-rose-500">Tradition in a Bottle</span>
                <span className="block text-mustard">Infused with 8 Revitalizing Ingredients</span>
              </h2>

              {/* Divider */}
              <div className="flex items-center mb-6">
                <img src={dividerImg} alt="Section Separator" className="h-10 w-auto" />
              </div>

              <div className="bg-cream/50 border-l-4 border-rose-500 p-6 rounded-r-lg mb-6 shadow-lg">
                <p className="text-lg text-dark leading-relaxed font-serif italic">
                  Discover the time-honored blend of nature and nourishment with handcrafted infusion of 8 revitalizing ingredients that not only taste divine but support holistic well-being. Every drop delivers a fragrant bouquet of rose, the grounding calm of vetiver, and the cooling touch of sandalwood. Designed to refresh your body, relax your mind, and uplift your spirit—this syrup is more than a drink, it&apos;s tradition in a bottle.
                </p>
              </div>

              {/* CTA */}
              <Link
                to="/authenticate"
                className="bg-rose-500 text-cream px-8 py-4 rounded-full text-lg font-bold hover:bg-dark transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center border-2 border-gold/50 font-serif"
              >
                <ScanBarcode className="mr-3 h-6 w-6" />
                <span>Authenticate your product</span>
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="relative w-full overflow-hidden">

        {/* Full-Width Image */}
        <div className="w-full">
          <img
            src={bridgeImg}
            alt="Rajahmundry Bridge - Our Heritage"
            className="w-[120%] h-auto"
          />
        </div>

      </section>

      {/* Products Preview Section */}
      <section id="products" className="py-20 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Header */}
            <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-8 shadow-lg border-2 border-gold/50">
              <Award className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Premium Collection</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif leading-tight">
              <span className="block text-rose-500">Rajahmundry’s Luxurious Beverage</span>
              <span className="block text-mustard">Since the 1950's</span>
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

      {/* Story Section */}
      <section id="story" className="py-20relative overflow-hidden">
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
                <span className="block text-rose-500">From a Street Corner</span>
                <span className="block text-mustard">in 1950 to Homes Across India</span>
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
                className="text-rose-500 font-bold inline-flex items-center hover:text-dark transition-colors bg-white/50 px-6 py-3 rounded-full border border-gold/30 font-serif"
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

      {/* News & Mentions Section */}
      <section id="news-mentions" className="py-20 relative overflow-hidden">

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
              <img src={dividerImg} alt="Section Separator" className="h-12 w-auto" />
            </div>
          </div>

          {/* Media Logos */}
          <div className="relative w-full bg-white max-w-[1088px] mx-auto">
            <div
              className="grid grid-cols-2 md:grid-cols-4 md:gap-4"
            >
              <img
                src={theweek}
                alt="theweek"
                className="w-full h-auto"
              />
              <img
                src={hansindia}
                alt="hansindia"
                className="w-full h-auto"
              />
              <img
                src={sakshi}
                alt="sakshi"
                className="order-4 md:order-3 w-full h-auto"
              />
              <img
                src={eenadu}
                alt="eenadu"
                className="order-3 md:order-4 w-full h-auto"
              />
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

      {/* Awards Section */}
      <section className="pt-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-8 shadow-lg border-2 border-gold/50">
              <Award className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Achievements</span>
            </div>
            <h2 className="text-center text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif leading-tight">
              <span className="block text-rose-500">Excellence Recognized</span>
              <span className="block text-mustard">across 75 years of dedication</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-6">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-12 w-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[auto_auto] sm:grid-cols-2 gap-4">

              {/* award 1 */}
              <div className="w-full">
                <div className="w-auto h-full overflow-hidden">
                  <img
                    src={zomatoImg}
                    alt="Zomato Award"
                    className="bg-white w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* award 2 */}
              <div className="w-full">
                <div className="w-auto h-full overflow-hidden">
                  <img
                    src={nidhiImg}
                    alt="Nidhi Award"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <Link
              to="/awards"
              className="mt-8 bg-rose-500 text-cream px-10 py-4 rounded-full text-lg font-bold hover:bg-dark transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center border-2 border-gold/50 font-serif"
            >
              <Award className="mr-3 h-6 w-6" />
              <span>View all Awards</span>
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Celebrity Visits Section */}
      <section className="pt-20 relative overflow-hidden">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-8 shadow-lg border-2 border-gold/50">
              <Users className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Celebrity Visits</span>
            </div>
            <h2 className="text-center text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif leading-tight">
              <span className="block text-rose-500">Not a rupee spent</span>
              <span className="block text-mustard">Yet Every Frame lit by fame</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-6">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-12 w-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-rows-[auti_auto] sm:grid-cols-3 gap-4">
              {/* celebrity 1 - Portrait (spans 2 rows on large screens) */}
              <div className="w-full sm:row-start-1 sm:col-start-1 sm:row-span-1 sm:col-span-2">
                <div className="aspect-[7/7] overflow-hidden">
                  <img
                    src={sarathkumar}
                    alt="sarathkumar"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* celebrity 2 */}
              <div className="w-full sm:row-start-1 sm:col-start-3 sm:row-span-1 sm:col-span-1">
                <div className="w-auto h-full overflow-hidden">
                  <img
                    src={prithviraj}
                    alt="prithviraj"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* celebrity 3 */}
              <div className="w-full row-span-1 sm:row-start-2 sm:col-start-1 sm:col-span-3">
                <div className="w-full h-auto overflow-hidden">
                  <img
                    src={hit2}
                    alt="hit2"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <Link
              to="/gallery"
              className="mt-8 bg-rose-500 text-cream px-10 py-4 rounded-full text-lg font-bold hover:bg-dark transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center border-2 border-gold/50 font-serif"
            >
              <Image className="mr-3 h-6 w-6" />
              <span>View Our Gallery</span>
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-8 shadow-lg border-2 border-gold/50">
              <Heart className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Hear From Our Fans</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif leading-tight">
              <span className="block text-rose-500">Thousands have grown up with our Rose Milk</span>
              <span className="block text-mustard">Now it’s your turn to taste the tradition</span>
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
              A Landmark of Emotion, Memory, and Pride. This isn’t just a campaign – it’s a cultural ritual.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-3 lg:gap-5 py-4">
            {/* Video 1 - Portrait (spans 2 rows on large screens) */}
            <div className="w-full lg:row-span-2 sm:row-span-3">
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
            <div className="w-full">
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
            <div className="w-full sm:row-start-2 sm:col-start-2 lg:row-start-1">
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
            <div className="w-full sm:row-start-3 sm:col-start-2 sm:col-span-2 lg:col-span-2 lg:row-start-2 lg:col-start-2">
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
      {/* Tourism Section */}
      <section className="py-20 relative overflow-hidden" data-animate id="tourism">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-rose-500 rounded-full px-8 py-4 mb-8 shadow-xl border-2 border-gold/50">
              <Camera className="h-6 w-6 text-cream mr-3" />
              <span className="text-cream font-bold text-lg font-serif">Discover Rajahmundry</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-8 font-serif leading-tight">
              <span className="block text-rose-500 drop-shadow-lg">The Cultural &</span>
              <span className="block text-mustard">Natural Heart of Godavari</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-6">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-12 w-auto"
              />
            </div>

          </div>

          {/* Tourist Highlights Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {touristHighlights.map((highlight, index) => {
              return (
                <div key={index} className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-gold/30 group transform hover:-translate-y-3 '
                }`} style={{ animationDelay: `${index * 300}ms` }}>
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3 font-serif">{highlight.title}</h3>
                    <p className="text-dark/80 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">

            <Link
              to="/about/tourism"
              className="bg-rose-500 text-cream px-12 py-5 rounded-full font-bold hover:bg-dark transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center border-2 border-gold/50 font-serif text-xl"
            >
              <Camera className="h-7 w-7 mr-4" />
              Explore Rajahmundry
              <Sparkles className="h-7 w-7 ml-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* Rose Street Section */}
      <section className="py-20 relative overflow-hidden">

        <h2 className="text-center text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif leading-tight">
          <span className="block text-rose-500">Our Sub-Brand</span>
          <span className="block text-mustard">Where a Legacy is Reborn</span>
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-6">
          <img
            src={dividerImg}
            alt="Section Separator"
            className="h-12 w-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 items-center">
            {/* Left side - Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className={`w-full flex items-center justify-center transform transition-all duration-1000 
                }`}>
                <div className="relative">
                  <div className="absolute blur-xl animate-pulse"></div>
                  <div className="">
                    <img
                      src={newlogoImg}
                      alt="Rose Street Logo"
                      className="w-[80%] h-auto object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className={`lg:col-span-2 text-center lg:text-left transform transition-all duration-1000 delay-300}`}>
              <h2 className="text-5xl lg:text-6xl font-bold text-dark mb-6 font-serif leading-tight">
                <span className="block text-rose-500 drop-shadow-lg">Rose Street</span>
              </h2>

              <p className="text-xl lg:text-2xl text-dark/80 mb-8 max-w-4xl mx-auto lg:mx-0 leading-relaxed font-serif italic">
                "Our rose-flavored drinkable desserts blend timeless tradition with modern indulgence"
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
              <a
                href="https://rrosestreet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-rose-500 text-cream px-8 py-4 rounded-full font-bold hover:bg-dark transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-gold/50 font-serif"
              >
                Experience Rose Street
                <ExternalLink className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </div>

      </section>
      <FindNearestStoreButton />
      <RoseStreetButton />

      <Footer />
    </div>
  );
};

export default HomePage;