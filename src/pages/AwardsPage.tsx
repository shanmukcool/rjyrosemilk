import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Crown, Sparkles, Star, MapPin, X, ChevronLeft, ChevronRight, ZoomIn, Trophy, Medal, AlignCenterVertical as Certificate } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import patternImg from '../assets/design/pattern.png';
import dividerImg from '../assets/design/divider.png';
import a1 from "../assets/awards/IMG_20250730_215955-min.jpg";
import a2 from "../assets/awards/IMG_20250730_220051-min.jpg";
import a3 from "../assets/awards/IMG-20230204-WA0029-min.jpg";
import a4 from "../assets/awards/IMG_20250730_220120-min.jpg";
import a5 from "../assets/awards/IMG_20250730_220407-min.jpg";
import a6 from "../assets/awards/IMG_20250730_220131-min.jpg";
import a7 from "../assets/awards/IMG_20250730_220031-min.jpg";
import a8 from "../assets/awards/IMG_20250730_220221-min.jpg";
import a9 from "../assets/awards/IMG-20230204-WA0023-min.jpg";
import a10 from "../assets/awards/IMG_20250730_220202-min.jpg";
import zomatoAward from "../assets/awards/Zomato Award-min.jpg";
import nidhiPledge from "../assets/awards/nidhi-min.jpg";

interface AwardItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

const awardsData: AwardItem[] = [
  {
    id: 1,
    src: a8, // This image appears to be the NIDHI award.
    alt: "NIDHI from ministry of tourism",
    title: "NIDHI from ministry of tourism",
    description: "Recognized for preserving traditional food culture for over 75 years",
    date: "February 2, 2023", // Assuming the date from similar awards, exact date not visible
    category: "heritage"
  },
  {
    id: 2,
    src: a5,
    alt: "JCI Outstanding Entrepreneur Award 2019 (Plaque)",
    title: "JCI Outstanding Entrepreneur Award 2019",
    description: "Presented by Junior Chamber International Rajahmundry to Sri Gubba Ramachandra Rao for outstanding entrepreneurial contribution and leadership.",
    date: "September 15, 2019",
    category: "entrepreneurship"
  },
  {
    id: 3,
    src: a7,
    alt: "JCI Outstanding Entrepreneur Award 2019 (Trophy)",
    title: "JCI Outstanding Entrepreneur Award 2019",
    description: "Trophy accompanying the JCI Outstanding Entrepreneur Award presented to Sri Gubba Ramachandra Rao.",
    date: "September 15, 2019",
    category: "entrepreneurship"
  },
  {
    id: 4,
    src: a4,
    alt: "JCI Business Excellence Award - 2024",
    title: "JCI Business Excellence Award - 2024",
    description: "Presented to Jc. Rishik Rajahmundry Rosemilk by JCI Sri Medha Rajahmundry.",
    date: "Unknown (2024)", // Year is visible, exact date not.
    category: "business excellence"
  },
  {
    id: 5,
    src: a10,
    alt: "DAFNE Business Symposium - Guest of Honour",
    title: "DAFNE Business Symposium - Guest of Honour",
    description: "Award recognizing Mr. Rishik Srikanth (Prop. Rajahmundry Rose Milk) as Guest of Honour at the DAFNE Business Symposium.",
    date: "Unknown", // No date visible
    category: "recognition"
  },
  {
    id: 6,
    src: a2,
    alt: "Commerce Fest \"INSPIRA 2020\" - Government College(A), Rajahmundry",
    title: "Commerce Fest \"INSPIRA 2020\"",
    description: "Award from the Department of Commerce & Management, Government College(A), Rajahmundry for 'Inspiration for Innovation'.",
    date: "March 3 & 4, 2020",
    category: "education"
  },
  {
    id: 7,
    src: a1,
    alt: "Mahatma Gandhi Charitable Trust Award",
    title: "Mahatma Gandhi Charitable Trust Award",
    description: "Award from Mahatma Gandhi Charitable Trust, acknowledging contribution for human service. Presented on 12.12.2021",
    date: "December 12, 2021",
    category: "charity/social service"
  },
  {
    id: 8,
    src: a3,
    alt: "Plaque about Sri Gubba Simhachalam (Late) and Rose Milk Center",
    title: "Legacy of Rose Milk Center - Sri Gubba Simhachalam",
    description: "A detailed description of the history and journey of Rose Milk Center, started by Sri Gubba Simhachalam, and continued by his son Ramachandra Rao, highlighting their hard work and success.",
    date: "N/A (Historical overview)",
    category: "history/legacy"
  },
  {
    id: 9,
    src: a9,
    alt: "Newspaper article on Rose Milk",
    title: "Sakshi Newspaper Article - Rose Milk",
    description: "A newspaper feature from Sakshi, dated 25-4-2009, showcasing Rose Milk and its popularity.",
    date: "April 25, 2009",
    category: "media"
  },
  {
    id: 10,
    src: a6,
    alt: "Walkers, Yoga & Laughing Club Award",
    title: "Walkers, Yoga & Laughing Club Award",
    description: "Award from Walkers, Yoga & Laughing Club, dated 00-11-2021. Likely a recognition for support or participation.",
    date: "November 2021", // Day not specified, month and year are.
    category: "community"
  },{
    id: 11,
    src: zomatoAward,
    alt: "Zomato Restaurant Awards 2024",
    title: "Zomato Restaurant Awards 2024",
    description: "Awarded 'Best in Beverages Rajahmundry' to Rajahmundry Rosemilk Head Branch by Zomato.",
    date: "Unknown (2024)", // Year is visible, exact date not.
    category: "restaurant/food industry"
  },
  {
    id: 12,
    src: nidhiPledge,
    alt: "NIDHI Pledge - Ministry of Tourism",
    title: "NIDHI Pledge - Ministry of Tourism",
    description: "Pledge for commitment towards safe & honourable tourism and sustainable tourism, issued by the Ministry of Tourism, Government of India, to RAJAHMUNDRY ROSEMLK MANUFACTURERS AND DISTRIBUTION PRIVATE LIMITED.",
    date: "February 24, 2025",
    category: "tourism/sustainability"
  }
];
const AwardsPage: React.FC = () => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [showLightbox, setShowLightbox] = useState(false);

  const openLightbox = (award: AwardItem) => {
    setSelectedAward(award);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedAward(null);
    document.body.style.overflow = 'unset';
  };

  const navigateAward = (direction: 'prev' | 'next') => {
    if (!selectedAward) return;

    const currentIndex = awardsData.findIndex(award => award.id === selectedAward.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : awardsData.length - 1;
    } else {
      newIndex = currentIndex < awardsData.length - 1 ? currentIndex + 1 : 0;
    }

    const newAward = awardsData[newIndex];
    setSelectedAward(newAward);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-dark/70">
          <Link to="/" className="hover:text-rose-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-rose-500 font-medium">Awards</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-white">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-white to-cream/50"></div>

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
              <Trophy className="h-6 w-6 text-cream mr-3" />
              <span className="text-cream font-bold text-lg font-serif">Our Achievements</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-dark mb-8 font-serif leading-tight">
              <span className="block text-rose-500 drop-shadow-lg">Awards &</span>
              <span className="block text-mustard">Recognitions</span>
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-8">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-16 w-auto"
              />
            </div>

            <div className="inline-flex items-center bg-gradient-to-r from-rose-500 to-mustard text-white rounded-full px-8 py-4 mb-6 shadow-2xl border-4 border-gold font-serif transition-transform duration-300 hover:scale-105">
              <Crown className="h-6 w-6 text-white mr-3 drop-shadow-md" />
              <span className="text-lg font-bold italic tracking-wide drop-shadow-sm">
                "Excellence recognized across 75 years of dedication."
              </span>
            </div>


            <p className="text-xl lg:text-2xl text-dark/80 max-w-4xl mx-auto leading-relaxed font-serif">
              Our commitment to quality, tradition, and community service has been recognized by various organizations,
              government bodies, and industry leaders throughout our journey.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Stats */}
      <section className="py-16 bg-rose-500 text-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D4A574 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-cream/10 rounded-2xl p-8 border-2 border-gold/30 shadow-xl">
              <div className="text-5xl font-bold mb-4 font-serif">15+</div>
              <div className="text-cream/90 font-serif text-lg">Awards Received</div>
            </div>
            <div className="bg-cream/10 rounded-2xl p-8 border-2 border-gold/30 shadow-xl">
              <div className="text-5xl font-bold mb-4 font-serif">75+</div>
              <div className="text-cream/90 font-serif text-lg">Years of Excellence</div>
            </div>
            <div className="bg-cream/10 rounded-2xl p-8 border-2 border-gold/30 shadow-xl">
              <div className="text-5xl font-bold mb-4 font-serif">5</div>
              <div className="text-cream/90 font-serif text-lg">Government Recognitions</div>
            </div>
            <div className="bg-cream/10 rounded-2xl p-8 border-2 border-gold/30 shadow-xl">
              <div className="text-5xl font-bold mb-4 font-serif">3</div>
              <div className="text-cream/90 font-serif text-lg">Generations Honored</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/20 via-white to-cream/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {awardsData.map((award) => (
              <div
                key={award.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(award)}
              >
                <div className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl border-4 border-gold/30 relative overflow-hidden">

                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={award.src}
                      alt={award.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />

                  </div>

                  {/* Card Footer */}
                  <div className="mt-4 relative z-10">
                    <div className="bg-cream/50 border-l-4 border-rose-500 p-3 rounded-r-lg">
                      <h4 className="font-bold text-dark font-serif text-sm mb-1">{award.title}</h4>
                      <p className="text-dark/70 text-xs mb-2">{award.description}</p>
                      <p className="text-dark/70 text-xs font-serif italic">{award.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Lightbox */}
      {showLightbox && selectedAward && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-sm"
            onClick={closeLightbox}
          />

          {/* Lightbox Image */}
          <img
            src={selectedAward.src}
            alt={selectedAward.alt}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[90vw] max-h-[90vh] object-contain z-50 rounded-2xl shadow-2xl"
          />

          {/* Lightbox Controls */}
          <div className="fixed inset-0 z-50 pointer-events-none">
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateAward('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-rose-500/90 backdrop-blur-sm rounded-full p-3 text-cream hover:bg-rose-500 border-2 border-gold/50 shadow-xl pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateAward('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-rose-500/90 backdrop-blur-sm rounded-full p-3 text-cream hover:bg-rose-500 border-2 border-gold/50 shadow-xl pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-rose-500/90 backdrop-blur-sm rounded-full p-2 text-cream hover:bg-rose-500 border-2 border-gold/50 shadow-xl pointer-events-auto"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Award Info */}
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-cream/80 backdrop-blur-md text-dark p-6 rounded-2xl w-[90%] sm:w-fit sm:max-w-full pointer-events-auto shadow-xl border-2 border-gold/30">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-6 w-6 text-rose-500 mr-2" />
                <span className="text-rose-500 font-bold font-serif text-sm capitalize">{selectedAward.category}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 font-serif text-center text-rose-500 drop-shadow-xl">{selectedAward.title}</h3>
              <p className="text-lg mb-1 text-center text-mustard drop-shadow-xl">{selectedAward.description}</p>
              <p className="text-sm text-dark font-serif italic text-center drop-shadow-xl">{selectedAward.date}</p>
            </div> */}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default AwardsPage;