import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  Crown,
  Star,
  Users,
  Clock,
  Award,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Video
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import venkatesh from '../assets/gallery/celebritys/1-min.jpg';
import venkatesh2 from '../assets/gallery/celebritys/1.png';
import cbn from '../assets/gallery/celebritys/2cbn.png';
import jagan from '../assets/gallery/celebritys/17jagan.jpg';
import rajeshkumar from '../assets/gallery/celebritys/2-min.jpg';
import arjunreddy from '../assets/gallery/celebritys/3-min.jpg';
import naveen from '../assets/gallery/celebritys/4-min.jpg';
import hit3 from '../assets/gallery/celebritys/5-min.jpg';
import karthikeyaImg from '../assets/gallery/celebritys/5th-min.png';
import samajavaragamana from '../assets/gallery/celebritys/6-min.png';
import suhas from '../assets/gallery/celebritys/7-min.jpg';
import baby from '../assets/gallery/celebritys/7th-min.jpg';
import singers from '../assets/gallery/celebritys/8.5-min.jpg';
import naresh from '../assets/gallery/celebritys/8-min.jpg';
import journalist from '../assets/gallery/celebritys/9-min.jpg';
import koti from '../assets/gallery/celebritys/10-min.jpg';
import jonni from '../assets/gallery/celebritys/11-min.jpg';
import comedian1 from '../assets/gallery/celebritys/12-min.jpg';
import comedian2 from '../assets/gallery/celebritys/13-min.jpg';
import comedian3 from '../assets/gallery/celebritys/14-min.jpg';
import comedian4 from '../assets/gallery/celebritys/15-min.jpg';
import pottel from '../assets/gallery/celebritys/16-min.jpg';
import kaliyugam from '../assets/gallery/celebritys/18-min.jpg';
import sidarth from '../assets/gallery/celebritys/19-min.jpg';
import prithviraj from '../assets/gallery/celebritys/20-min.png';
import gscImg from '../assets/stores/1950.png';
import rrgImg from '../assets/stores/1980.png';
// { id: 'all', name: 'All Photos', icon: Camera },
// { id: 'videos', name: 'Videos', icon: Video },
// { id: 'celebrity', name: 'Celebrity Visits', icon: Star },
// { id: 'vintage', name: 'Vintage Days', icon: Clock },
// { id: 'behind-scenes', name: 'Behind the Scenes', icon: Users },
// { id: 'customers', name: 'Customer Moments', icon: Heart },
// { id: 'events', name: 'Special Events', icon: Award }

import patternImg from '../assets/design/pattern.png';
import dividerImg from '../assets/design/divider.png';
import karimaposter from '../assets/videos/poster/karmiaposter.png'
import aaaaposter from '../assets/videos/poster/aaaa.png';
import rx100 from '../assets/videos/poster/rx100.jpg';
import localcust from '../assets/videos/localcust.mp4';
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string | string[];
  title: string;
  description: string;
  date: string;
  isVideo?: boolean;
  isYouTubeEmbed?: boolean;
  videoUrl?: string;
}

const galleryImages: GalleryImage[] = [
  // Celebrity Visits
  {
    id: 1,
    src: venkatesh,
    alt: "Victory Venkatesh",
    category: ['celebrity', 'events'],
    title: "Victory Venkatesh",
    description: "New Logo Reveal",
    date: "March 15, 2024"
  },
  {
    id: 2,
    src: venkatesh2,
    alt: "Victory Venkatesh",
    category: ['celebrity', 'events'],
    title: "Victory Venkatesh",
    description: "Logo Launch for Rajahmundry Rose Milk",
    date: "March 15, 2024"
  },
  {
    id: 3,
    src: cbn,
    alt: "AP CM Chandrababu Naidu",
    category: "celebrity",
    title: "AP CM Chandrababu Naidu",
    description: "Invited for inauguration of new outlet",
    date: "August 22, 2023"
  },
  {
    id: 4,
    src: jagan,
    alt: "Jagan Mohan Reddy",
    category: "celebrity",
    title: "Jagan Mohan Reddy",
    description: "Surprise visit during campaign",
    date: "January 8, 2024"
  },
  {
    id: 5,
    src: rajeshkumar,
    alt: "Sarathkumar",
    category: "celebrity",
    title: "Sarathkumar",
    description: "surprise visit to Rajahmundry Rose Milk",
    date: "February 10, 2024"
  },
  {
    id: 6,
    src: arjunreddy,
    alt: "Actor Vijay Deverakonda (Arjun Reddy)",
    category: ['celebrity', 'events'],
    title: "Vijay Deverakonda",
    description: "Promoting Rose Milk",
    date: "September 5, 2023"
  },
  {
    id: 7,
    src: naveen,
    alt: "Actor Naveen Polishetty",
    category: "celebrity",
    title: "Naveen Polishetty",
    description: "Ms.Shetty Mr.PoliShetty movie promotion",
    date: "November 12, 2023"
  },
  {
    id: 8,
    src: hit3,
    alt: "Adivi Sesh, Meenakshi Chaudhary & Sailesh Kolanu",
    category: "celebrity",
    title: "Adivi Sesh, Meenakshi Chaudhary & Sailesh Kolanu",
    description: "HIT 2 movie promotion",
    date: "October 28, 2023"
  },
  {
    id: 9,
    src: karthikeyaImg,
    alt: "Kartikeya & Neha Shetty",
    category: "celebrity",
    title: "Kartikeya & Neha Shetty",
    description: "Bedurulanka 2012 movie promotion",
    date: "December 1, 2023"
  },
  {
    id: 10,
    src: samajavaragamana,
    alt: "Actor Sree Vishnu and Reba Monica John",
    category: "celebrity",
    title: "Sree Vishnu and Reba Monica John",
    description: "Samajavaragamana Movie Promotion",
    date: "July 10, 2023"
  },
  {
    id: 11,
    src: suhas,
    alt: "Suhas and shivani nagaram",
    category: "celebrity",
    title: "Suhas and shivani nagaram",
    description: "ambajipetamarriageband movie promotion",
    date: "August 5, 2023"
  },
  {
    id: 12,
    src: baby,
    alt: "Anand Devarakonda, Vaishnavi Chaitanya & Viraj Ashwin",
    category: "celebrity",
    title: "Anand Devarakonda, Vaishnavi Chaitanya & Viraj Ashwin",
    description: "Baby Movie Promotion",
    date: "July 14, 2023"
  },
  {
    id: 13,
    src: singers,
    alt: "Singers",
    category: ['celebrity', 'customers'],
    title: "Group of Singers",
    description: "Event at Rajahmundry Rose Milk",
    date: "November 20, 2023"
  },
  {
    id: 14,
    src: naresh,
    alt: "Actor Naresh",
    category: "celebrity",
    title: "Naresh",
    description: "Ugram movie promotion",
    date: "may 5, 2023"
  },
  {
    id: 15,
    src: journalist,
    alt: "suresh kondeti",
    category: "celebrity",
    title: "suresh kondeti",
    description: "surprise visit to Rajahmundry Rose Milk",
    date: "March 1, 2024"
  },
  {
    id: 16,
    src: koti,
    alt: "Music Director Koti",
    category: "celebrity",
    title: "Music Director Koti",
    description: "Visiting the Rose Milk outlet",
    date: "April 18, 2024"
  },
  {
    id: 17,
    src: jonni,
    alt: "Jani Master",
    category: "celebrity",
    title: "Jani Master",
    description: "Surprise visit At Rajahmundry Rose Milk",
    date: "May 1, 2024"
  },
  {
    id: 18,
    src: comedian1,
    alt: "Praveen",
    category: "celebrity",
    title: "Praveen ",
    description: "Fun with Praveen",
    date: "June 5, 2024"
  },
  {
    id: 19,
    src: comedian2,
    alt: "Comedian",
    category: "celebrity",
    title: "Comedian 2",
    description: "Attending the launch",
    date: "June 10, 2024"
  },
  {
    id: 20,
    src: comedian3,
    alt: "Syed Sohel",
    category: "celebrity",
    title: "Syed Sohel",
    description: "movie promotion",
    date: "June 10, 2024"
  },
  {
    id: 21,
    src: comedian4,
    alt: "Comedian",
    category: "celebrity",
    title: "Comedian 4",
    description: "Enjoying Rose Milk",
    date: "June 20, 2024"
  },
  {
    id: 22,
    src: pottel,
    alt: "Noel Sean, Sahit Mothkhuri, Yuva Chandraa & Ananya Nagalla",
    category: "celebrity",
    title: "Noel Sean, Sahit Mothkhuri, Yuva Chandraa & Ananya Nagalla",
    description: "pottel movie promotion",
    date: "April 25, 2024"
  },
  {
    id: 23,
    src: kaliyugam,
    alt: "Actor Kaliyugam (unknown)",
    category: "celebrity",
    title: "Actor Kaliyugam",
    description: "At the Rose Milk event",
    date: "May 10, 2024"
  },
  {
    id: 24,
    src: sidarth,
    alt: "Deepak Saroj, Tanvi Negi & Nandini Yallareddy",
    category: "celebrity",
    title: "Deepak Saroj, Tanvi Negi & Nandini Yallareddy",
    description: "Siddharth Roy Movie Promotion",
    date: "March 20, 2024"
  },
  {
    id: 25,
    src: prithviraj,
    alt: "Actor Prithviraj",
    category: "celebrity",
    title: "Prithviraj",
    description: "At the Rose Milk Center",
    date: "February 28, 2024"
  },

  // Videos Section

  {
    id: 26,
    src: "https://img.youtube.com/vi/tjkxCIQFLjw/maxresdefault.jpg",
    alt: "telugu one",
    category: ['videos', 'customers'],
    title: "Food Man",
    description: "Our first youtube appearence",
    date: "12 dec 2011",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: "https://www.youtube.com/embed/tjkxCIQFLjw"
  },
  {
    id: 27,
    src: "https://img.youtube.com/vi/SAKUeAxOrWA/maxresdefault.jpg",
    alt: "telugu one",
    category: ['videos', 'customers'],
    title: "narajahmundry",
    description: "Our first youtube appearence",
    date: "12 dec 2011",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: "https://www.youtube.com/embed/SAKUeAxOrWA"
  },
  {
    id: 28,
    src: "https://img.youtube.com/vi/biv0071jC1E/maxresdefault.jpg",
    alt: "telugu one",
    category: ['videos', 'customers'],
    title: "mee_chandhamama",
    description: "Our first youtube appearence",
    date: "12 dec 2011",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: "https://www.youtube.com/embed/biv0071jC1E"
  },
  {
    id: 29,
    src: "https://img.youtube.com/vi/g6EXiazN4r0/maxresdefault.jpg",
    alt: "telugu one",
    category: ['videos', 'customers'],
    title: "LiveWithMeghana",
    description: "Have you tried the OG Rajahmundry Rose Milk?",
    date: "july 27, 2025",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: localcust
  },
  {
    id: 30,
    src: karimaposter,
    alt: "karimawithyou",
    category: ['videos', 'customers'],
    title: "karimawithyou",
    description: "Our first international customer",
    date: "july 21, 2025",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: "https://www.youtube.com/embed/toyem6KU1ww?start=302&autoplay=1&mute=0&controls=1&loop=1&playlist=toyem6KU1ww"
  },
  {
    id: 31,
    src: aaaaposter,
    alt: "Arabic Ammai Andhra Abbai",
    category: ['videos', 'customers'],
    title: "Arabic Ammai Andhra Abbai",
    description: "Arabic Ammai Andhra Abbai || A customer visit",
    date: "july 21, 2025",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: "https://www.youtube.com/embed/_yzhWb0aBC8?start=239&autoplay=1&mute=0&controls=1&loop=1&playlist=_yzhWb0aBC8"
  },
  {
    id: 32,
    src: "https://img.youtube.com/vi/a6tVKiokx3k/maxresdefault.jpg",
    alt: "Rajahmundry rose milk - A 75 year old legend",
    category: ['videos', 'behind-scenes'],
    title: "Rajahmundry rose milk - A 75 year old legend",
    description: "Rose milk || Wirally Food - The complete story of our 75-year legacy",
    date: "Aug 23, 2024",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: "https://www.youtube.com/embed/a6tVKiokx3k"
  },
  {
    id: 33,
    src: "https://img.youtube.com/vi/QjYojJ1REcI/maxresdefault.jpg",
    alt: "telugu one",
    category: ['videos', 'vintage'],
    title: "Rojmilk - Semiya Rojmilk - Kova Rojmilk - Rajahmundry Special -1",
    description: "Our first youtube appearence",
    date: "12 dec 2011",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: "https://www.youtube.com/embed/QjYojJ1REcI"
  },
  {
    id: 34,
    src: "https://img.youtube.com/vi/N5pOfYltBL0/maxresdefault.jpg",
    alt: "Rajahmundry rose milk - A 75 year old legend",
    category: ['videos', 'vintage'],
    title: "Rojmilk - Semiya Rojmilk - Kova Rojmilk - Rajahmundry Special -2",
    description: "Our first youtube appearence",
    date: "12 dec 2011",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: "https://www.youtube.com/embed/N5pOfYltBL0"
  },
  {
    id: 35,
    src: "https://img.youtube.com/vi/K69N-juGzh0/maxresdefault.jpg",
    alt: "telugu one",
    category: ['videos', 'vintage'],
    title: "Rojmilk - Semiya Rojmilk - Kova Rojmilk - Rajahmundry Special -3",
    description: "Our first youtube appearence",
    date: "12 dec 2011",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: "https://www.youtube.com/embed/K69N-juGzh0"
  },
  {
    id: 36,
    src: "https://img.youtube.com/vi/5UfZT5FTOA4/maxresdefault.jpg",
    alt: "telugu one",
    category: ['videos', 'behind-scenes'],
    title: "Rojmilk - Semiya Rojmilk - Kova Rojmilk - Rajahmundry Special -3",
    description: "Our first youtube appearence",
    date: "12 dec 2011",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: "https://www.youtube.com/embed/5UfZT5FTOA4"
  },
  {
    id: 37,
    src: rx100,
    alt: "RX100 movie shoooting",
    category: ['videos', 'celebrity'],
    title: "Karthikeya & Payal Rajput",
    description: "rx100 movie || Manasuni Patti song || shooting at Rajahmundry Rose Milk",
    date: "June 22, 2018",
    isVideo: true,
    isYouTubeEmbed: true,
    videoUrl: "https://www.youtube.com/embed/6fYhlkyOhQA?start=124&autoplay=1&mute=0&controls=1&loop=1&playlist=6fYhlkyOhQA"
  },
  {
    id: 38,
    src: gscImg,
    alt: "Gubba SimhaChalam Garu",
    category: "vintage",
    title: "Gubba SimhaChalam Garu",
    description: "Rajahmundry Rose Milk on handcart",
    date: "January 1, 1950"
  },
  {
    id: 39,
    src: rrgImg,
    alt: "Rosemilk Ramu Garu",
    category: 'vintage',
    title: "Rosemilk Ramu Garu",
    description: "Silver jubliee completion",
    date: "March 15, 2000"
  },
];

const categories = [
  { id: 'all', name: 'All Photos', icon: Camera },
  { id: 'videos', name: 'Videos', icon: Video },
  { id: 'celebrity', name: 'Celebrity Visits', icon: Star },
  { id: 'vintage', name: 'Vintage Days', icon: Clock },
  { id: 'behind-scenes', name: 'Behind the Scenes', icon: Users },
  { id: 'customers', name: 'Customer Moments', icon: Heart },
  { id: 'events', name: 'Special Events', icon: Award }
];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((img) =>
          Array.isArray(img.category)
            ? img.category.includes(selectedCategory)
            : img.category === selectedCategory
        )
      );
    }
  }, [selectedCategory]);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    const newImage = filteredImages[newIndex];
    setSelectedImage(newImage);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, filteredImages]);

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-dark/70">
          <Link to="/" className="hover:text-rose-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-rose-500 font-medium">Gallery</span>
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
              <Camera className="h-6 w-6 text-cream mr-3" />
              <span className="text-cream font-bold text-lg font-serif">Our Gallery</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-dark mb-8 font-serif leading-tight">
              <span className="block text-rose-500 drop-shadow-lg">Gallery of</span>
              <span className="block text-mustard">Legacy</span>
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
                "Not a rupee spent, yet every frame lit by fame."
              </span>
            </div>


            <p className="text-xl lg:text-2xl text-dark/80 max-w-4xl mx-auto leading-relaxed font-serif">
              Celebrities drop by for movie promotions — not through deals, but drawn by decades of legacy.
              Witness 75 years of memories, moments, and the magic of Rajahmundry Rose Milk.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark mb-6 font-serif">
              <span className="text-rose-500">Explore</span> Our Collection
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg font-serif inline-flex items-center ${selectedCategory === category.id
                    ? 'bg-rose-500 text-cream shadow-xl border-2 border-gold/50'
                    : 'bg-white text-dark border-2 border-gold/30 hover:bg-cream hover:border-gold/50'
                    }`}
                >
                  <IconComponent className="h-5 w-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/20 via-white to-cream/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl border-4 border-gold/30 relative overflow-hidden group">

                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />

                    {/* Video Play Button Overlay */}
                    {image.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                        <div className="">
                          <svg className="w-8 h-8 text-cream ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="mt-4 relative z-10">
                    <div className="bg-cream/50 border-l-4 border-rose-500 p-3 rounded-r-lg">
                      {image.isVideo && (
                        <div className="flex items-center mb-2">
                          <Video className="h-4 w-4 text-rose-500 mr-2" />
                          <span className="text-rose-500 font-bold font-serif text-xs uppercase">Video</span>
                        </div>
                      )}
                      <h4 className="font-bold text-dark font-serif text-sm">{image.title}</h4>
                      <p className="text-dark/70 text-xs font-serif italic">{image.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gold/50 mb-6">
                <Camera className="h-20 w-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 font-serif">
                No Images Found
              </h3>
              <p className="text-dark/70 mb-8 font-serif">
                Try selecting a different category to view more photos.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-rose-500 text-cream px-8 py-4 rounded-full font-bold hover:bg-dark transition-colors shadow-xl border-2 border-gold/50 font-serif"
              >
                Show All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Simple Lightbox */}
      {showLightbox && selectedImage && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-sm"
            onClick={closeLightbox}
          />

          {/* Lightbox Content */}
          {selectedImage.isVideo ? (
            selectedImage.isYouTubeEmbed ? (
              <div
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ${[26, 27, 28, 29].includes(selectedImage.id)
                  ? 'w-[360px] h-[640px]'    // Portrait for Shorts
                  : 'w-[90vw] max-w-4xl aspect-video' // Regular landscape
                  }`}
              >

                <iframe
                  src={`${selectedImage.videoUrl}${selectedImage.videoUrl?.includes('?') ? '&' : '?'}autoplay=1`}
                  title={selectedImage.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                />
              </div>
            ) : (
              <video
                controls
                autoPlay
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[90vw] max-h-[90vh] z-50"
                style={{ maxWidth: '90vw', maxHeight: '90vh' }}
              >
                <source src={selectedImage.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[90vw] max-h-[90vh] z-50"
            />
          )}

          {/* Lightbox Controls */}
          <div className="fixed inset-0 z-50 pointer-events-none">
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 text-cream sm:bg-rose-500/90 pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 text-cream sm:bg-rose-500/90 pointer-events-auto"
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

            {/* Image Info */}
            {!selectedImage.isVideo && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-cream/80 backdrop-blur-md text-dark p-6 rounded-2xl w-[90%] sm:w-fit sm:max-w-full pointer-events-auto shadow-xl border-2 border-gold/30">
                <h3 className="text-2xl font-bold mb-2 font-serif text-center text-rose-500 drop-shadow-xl">
                  {selectedImage.title}
                </h3>
                <p className="text-lg mb-1 text-center text-mustard drop-shadow-xl">
                  {selectedImage.description}
                </p>
                <p className="text-sm text-dark font-serif italic text-center drop-shadow-xl">
                  {selectedImage.date}
                </p>
              </div>
            )}

          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;