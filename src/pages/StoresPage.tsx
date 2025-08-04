import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Search,
  CheckCircle,
  Store,
  Truck,
  Users,
  ExternalLink,
  Crown,
  Sparkles,
  Heart,
  Award,
  Building,
  Star,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// import SignatureStore from '../assets/s3experiencestore.jpg';
// import HeadBranch from '../assets/s3experiencestore.jpg';
// import ExperienceStore from '../assets/s3experiencestore.jpg';

const StoresPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const stores = [
    {
      id: 1,
      name: 'Signature store Est. 1950',
      address:
        'Main Rd, beside Bommana Rajkumar, opposite Bombay Dyeing, Mangalavaripeta, Rajamahendravaram, Andhra Pradesh 533101',
      phone: '+91 9347149809',
      hours: '6:00 AM - 10:00 PM',
      features: [
        'Original Location',
        'Fresh Made Daily',
        'Takeaway',
        'Seating Available',
      ],
      type: 'flagship',
      image: 'https://raw.githubusercontent.com/shanmukn21/rri/refs/heads/main/s1signaturestore.jpg',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.5829052106255!2d81.7688253222403!3d17.00321895318575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a519b32f8c3b%3A0x997e0113d2b11ac7!2sRajahmundry%20Rose%20Milk%20Center%20-%2075%20years!5e1!3m2!1sen!2sin!4v1751438964219!5m2!1sen!2sin',
      directionsLink:
        'https://www.google.com/maps/dir/?api=1&destination=17.0034319,81.7706223',
      swiggyLink:
        'https://www.swiggy.com/city/rajahmundry/rajahmundry-rosemilk-head-branch-east-godavari-dist-main-road-rest722250',
      zomatoLink:
        'http://zoma.to/r/20698094',
    },
    {
      id: 2,
      name: 'Family cafe Est. 2023',
      address:
        '8-24-99, Main Rd, beside chamber of commerce, Mangalavaripeta, Rajamahendravaram, Andhra Pradesh 533101',
      phone: '+91 9347149809',
      hours: '7:00 AM - 9:00 PM',
      features: [
        'Quick Service',
        'Takeaway Only',
        'Fresh Stock',
        'Bus Stand Location',
      ],
      type: 'express',
      image: 'https://raw.githubusercontent.com/shanmukn21/rri/refs/heads/main/s2headbranch.jpg',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.5829052106255!2d81.7688253222403!3d17.00321895318575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a5b061d69d77%3A0x9469a89076b7c27c!2srajahmundry%20rosemilk%20since%201950%20-%20HEADBRANCH!5e1!3m2!1sen!2sin!4v1751441019914!5m2!1sen!2sin',
      directionsLink:
        'https://www.google.com/maps/dir/?api=1&destination=17.0023790000,81.7708700000',
      swiggyLink:
        'https://www.swiggy.com/city/rajahmundry/rajahmundry-rosemilk-head-branch-east-godavari-dist-main-road-rest722250',
      zomatoLink:
        'http://zoma.to/r/20698094',
    },
    {
      id: 3,
      name: 'Experience center Est. 2025',
      address:
        '9-20-3, Main Rd, Mangalavaripeta, Rajamahendravaram, Andhra Pradesh 533101',
      phone: '+91 9347149809',
      hours: '8:00 AM - 10:00 PM',
      features: [
        'Air Conditioned',
        'Family Seating',
        'All Products',
        'Parking Available',
      ],
      type: 'premium',
      image: 'https://raw.githubusercontent.com/shanmukn21/rri/refs/heads/main/s3experiencestore.jpg',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.5829052106255!2d81.7688253222403!3d17.00321895318575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a5b0505d234d%3A0x21dda89c693f9ee5!2sRajahmundry%20Rosemilk%201950%20-%20Experience%20Center!5e1!3m2!1sen!2sin!4v1751441133817!5m2!1sen!2sin',
      directionsLink:
        "https://www.google.com/maps/dir/?api=1&destination=17.0043388,81.7703988",
      swiggyLink:
        'https://www.swiggy.com/city/rajahmundry/rajahmundry-rosemilk-head-branch-east-godavari-dist-main-road-rest722250',
      zomatoLink:
        'http://zoma.to/r/20698094',
    },
  ];

  const filteredStores = stores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getStoreTypeColor = (type) => {
    switch (type) {
      case 'flagship':
        return 'bg-heritage-rose text-heritage-cream';
      case 'premium':
        return 'bg-heritage-mustard text-heritage-cream';
      case 'express':
        return 'bg-heritage-gold text-heritage-cream';
      default:
        return 'bg-heritage-cream text-heritage-dark';
    }
  };

  const getStoreTypeIcon = (type) => {
    switch (type) {
      case 'flagship':
        return Crown;
      case 'premium':
        return Award;
      case 'express':
        return Truck;
      default:
        return Store;
    }
  };

  const handleFranchiseInquiry = () => {
    navigate('/franchise');
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center text-sm text-dark/70">
          <Link to="/" className="hover:text-heritage-rose transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-rose-500 font-medium">Our Stores</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Vintage Paper Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-white to-cream/50"></div>

        {/* Ornamental Border */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full border-8 border-gold/30 border-double m-8 rounded-lg"></div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-gold/50 border-double"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-gold/50 border-double"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-rose-500 rounded-full px-8 py-4 mb-8 shadow-xl border-2 border-gold/50">
              <Building className="h-6 w-6 text-cream mr-3" />
              <span className="text-cream font-bold text-lg font-serif">Our Locations</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-dark mb-8 font-serif leading-tight">
              <span className="block text-rose-500">Visit Our</span>
              <span className="block text-mustard">Stores in Rajahmundry</span>
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-gold flex-1 max-w-32"></div>
              <div className="mx-6">
                <Sparkles className="h-8 w-8 text-gold" />
              </div>
              <div className="h-px bg-gold flex-1 max-w-32"></div>
            </div>

            <p className="text-xl text-dark/80 max-w-4xl mx-auto font-serif italic leading-relaxed">
              "Experience the authentic taste at our three carefully curated
              locations across Rajahmundry, each offering the original rose milk
              recipe since 1949."
            </p>
          </div>

        </div>
      </section>

      {/* Store Stats */}
      <section className="py-16 bg-rose-500 text-cream relative overflow-hidden">
        {/* Vintage Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D4A574 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-cream/10 rounded-2xl p-8 border-2 border-gold/30 shadow-xl">
              <div className="text-5xl font-bold mb-4 font-serif">3</div>
              <div className="text-cream/90 font-serif text-lg">Stores in Rajahmundry</div>
            </div>
            <div className="bg-cream/10 rounded-2xl p-8 border-2 border-gold/30 shadow-xl">
              <div className="text-5xl font-bold mb-4 font-serif">75+</div>
              <div className="text-cream/90 font-serif text-lg">Years of Authentic Legacy</div>
            </div>
            <div className="bg-cream/10 rounded-2xl p-8 border-2 border-gold/30 shadow-xl">
              <div className="text-5xl font-bold mb-4 font-serif">100%</div>
              <div className="text-cream/90 font-serif text-lg">Original Recipe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Listings */}
      <section className="py-20 bg-cream relative overflow-hidden">
        {/* Vintage Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-16">
            {filteredStores.map((store, index) => {
              const StoreIcon = getStoreTypeIcon(store.type);
              return (
                <div
                  key={store.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-gold/30 transform hover:-translate-y-2 relative"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-mustard/5 opacity-50"></div>

                  {/* Responsive Layout */}
                  <div className="flex flex-col lg:flex-row relative z-10">
                    {/* Image Container */}
                    <div className="w-full lg:w-1/2 xl:w-2/5 flex-shrink-0 overflow-hidden relative">
                     <div className="relative h-80 lg:h-full lg:min-h-[600px] flex items-center justify-center bg-cream/30">

                        <img
                          src={store.image}
                          alt={store.name}
                          className="w-full h-full object-contain rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl shadow-2xl"
                        />


                        {/* Badge */}
                        <div className="absolute top-6 left-6">
                          <span
                            className={`px-6 py-3 rounded-full text-sm font-bold ${getStoreTypeColor(
                              store.type
                            )} shadow-xl backdrop-blur-sm border-2 border-gold/50 font-serif`}
                          >
                            {store.type.charAt(0).toUpperCase() + store.type.slice(1)} Store
                          </span>
                        </div>

                        {/* Vintage Corner Decoration */}
                        <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-gold/50 border-double"></div>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                      {/* Store Header */}
                      <div className="flex items-center mb-8">
                        <div className="bg-rose-500 rounded-full p-3 mr-4 shadow-lg border-2 border-gold/50">
                          <StoreIcon className="h-8 w-8 text-cream" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-dark font-serif mb-2">
                            {store.name}
                          </h2>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-mustard fill-current mr-1" />
                            ))}
                            <span className="text-dark/70 ml-2 font-serif">Quality</span>
                          </div>
                        </div>
                      </div>

                      {/* Store Info Grid */}
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Contact Details */}
                        <div className="space-y-4">
                          <div className="flex items-start bg-cream/50 p-4 rounded-lg border border-gold/30">
                            <MapPin className="h-6 w-6 text-rose-500 mr-3 mt-1 flex-shrink-0" />
                            <p className="text-dark text-sm leading-relaxed font-serif">{store.address}</p>
                          </div>

                          <div className="flex items-center bg-cream/50 p-4 rounded-lg border border-gold/30">
                            <Phone className="h-6 w-6 text-rose-500 mr-3 flex-shrink-0" />
                            <a
                              href={`tel:${store.phone}`}
                              className="text-rose-500 hover:text-dark transition-colors font-bold font-serif"
                            >
                              {store.phone}
                            </a>
                          </div>

                          <div className="flex items-center bg-cream/50 p-4 rounded-lg border border-gold/30">
                            <Clock className="h-6 w-6 text-rose-500 mr-3 flex-shrink-0" />
                            <span className="text-dark font-semibold font-serif">{store.hours}</span>
                          </div>
                        </div>

                        {/* Map */}
                        <div className="h-48 lg:h-64 rounded-xl overflow-hidden bg-cream/30 border-2 border-gold/30 shadow-lg">
                          <iframe
                            src={store.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Location for ${store.name}`}
                          ></iframe>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-dark mb-4 font-serif">
                          Store Features
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-3">
                          {store.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center bg-cream/50 p-3 rounded-lg border border-gold/30"
                            >
                              <CheckCircle className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                              <span className="text-dark text-sm font-semibold">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-6">
                        {/* Primary Actions */}
                        <div className="space-y-4">
                          <button
                            onClick={() => window.open(store.directionsLink, '_blank')}
                            className="w-full bg-rose-500 text-cream py-4 px-6 rounded-full font-bold hover:bg-dark transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center border-2 border-gold/50 font-serif"
                          >
                            <Navigation className="h-5 w-5 mr-2" />
                            Get Directions
                          </button>
                          <a
                            href={`tel:${store.phone}`}
                            className="w-full border-2 border-rose-500 text-rose-500 py-4 px-6 rounded-full font-bold hover:bg-rose-500 hover:text-cream transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center font-serif"
                          >
                            <Phone className="h-5 w-5 mr-2" />
                            Call Store
                          </a>
                        </div>

                        {/* Delivery Links */}
                        <div>
                          <h3 className="text-xl font-bold text-dark mb-4 font-serif">
                            Order Online
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            <a
                              href={store.swiggyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center px-4 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-bold shadow-lg hover:shadow-xl text-sm transform hover:scale-105"
                            >
                              <span>SWIGGY</span>
                              <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                            <a
                              href={store.zomatoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center px-4 py-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-bold shadow-lg hover:shadow-xl text-sm transform hover:scale-105"
                            >
                              <span>ZOMATO</span>
                              <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredStores.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gold/50 mb-6">
                <MapPin className="h-20 w-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 font-serif">
                No Stores Found
              </h3>
              <p className="text-dark/70 mb-8 font-serif">
                Try adjusting your search or browse all our locations.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-rose-500 text-cream px-8 py-4 rounded-full font-bold hover:bg-dark transition-colors shadow-xl border-2 border-gold/50 font-serif"
              >
                Show All Stores
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Rose Street Information */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Vintage Paper Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-white to-cream/50"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-mustard rounded-full px-6 py-3 mb-6 shadow-lg border-2 border-gold/50">
            <Heart className="h-5 w-5 text-cream mr-2" />
            <span className="text-cream font-bold font-serif">Experience</span>
          </div>

          <h2 className="text-4xl font-bold text-dark mb-6 font-serif">
            <span className="block text-rose-500">Experience Rose Street</span>
            <span className="block text-mustard">Collection</span>
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gold flex-1 max-w-24"></div>
            <div className="mx-4">
              <Crown className="h-6 w-6 text-gold" />
            </div>
            <div className="h-px bg-gold flex-1 max-w-24"></div>
          </div>

          <p className="text-xl text-dark/80 mb-8 font-serif italic">
            Discover our modern tribute to tradition. Rose Street brings the charm of yesteryear into contemporary spaces through curated rose-based experiences.
          </p>

          <div className="bg-cream/50 border-l-4 border-rose-500 p-6 rounded-r-lg mb-8 border-2 border-gold/30 shadow-lg">
            <p className="text-dark font-bold text-lg font-serif mb-4">
              A modern tribute to the iconic Rajahmundry Rose Milk.
            </p>
            <a
              href="https://rrosestreet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-rose-500 text-cream px-6 py-3 rounded-full font-bold hover:bg-dark transition-colors shadow-lg border-2 border-gold/50 font-serif transform hover:scale-105"
            >
              <span>Visit Rose Street</span>
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Franchise Information */}
      <section className="py-20 bg-rose-500 text-cream relative overflow-hidden">
        {/* Vintage Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D4A574 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-cream/20 rounded-full px-6 py-3 mb-6 shadow-lg border-2 border-gold/50">
            <Building className="h-5 w-5 text-cream mr-2" />
            <span className="text-cream font-bold font-serif">Partnership</span>
          </div>

          <h2 className="text-4xl font-bold mb-6 font-serif">
            Interested in Opening a Store?
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gold flex-1 max-w-32"></div>
            <div className="mx-6">
              <Sparkles className="h-8 w-8 text-gold" />
            </div>
            <div className="h-px bg-gold flex-1 max-w-32"></div>
          </div>

          <p className="text-xl mb-12 text-cream/90 font-serif italic">
            Join our growing family of franchise partners and bring the
            authentic taste of Rajahmundry Rose Milk to your community.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleFranchiseInquiry}
              className="bg-cream text-rose-500 px-10 py-4 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-gold/50 font-serif"
            >
              <Users className="h-6 w-6 mr-3 inline" />
              Franchise Inquiry
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StoresPage;