import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, User, Phone, MapPin, Crown, Sparkles, Heart, Award, Users, Building, TrendingUp, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import patternImg from '../assets/design/pattern.png';
import dividerImg from '../assets/design/divider.png';
const FranchiseEnquiryPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    proposedCity: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    // Create email body
    const emailBody = `Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Proposed City: ${formData.proposedCity || 'Not specified'}`;

    // Create mailto link
    const mailtoLink = `mailto:myemail@gmail.com?subject=${encodeURIComponent('I would like to open a franchise')}&body=${encodeURIComponent(emailBody)}`;

    // Open email client in new tab/window
    window.open(mailtoLink, '_blank');
  };

  const benefits = [
    {
      icon: Crown,
      title: '75-Year Legacy',
      description: 'Join a brand with proven heritage and customer loyalty spanning three generations.',
      color: 'rose-500'
    },
    {
      icon: TrendingUp,
      title: 'Growing Market',
      description: 'Tap into the expanding traditional beverage market with authentic products.',
      color: 'rose-500'
    },
    {
      icon: Users,
      title: 'Comprehensive Training',
      description: 'Complete training program covering operations, quality standards, and customer service.',
      color: 'rose-500'
    },
    {
      icon: Building,
      title: 'Store Setup Support',
      description: 'End-to-end assistance with location selection, store design, and equipment setup.',
      color: 'rose-500'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center text-sm text-dark/70">
          <Link to="/" className="hover:text-rose-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-rose-500 font-medium">Franchise Enquiry</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Vintage Paper Background */}
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-rose-500 rounded-full px-8 py-4 mb-8 shadow-xl border-2 border-gold/50">
            <Building className="h-6 w-6 text-cream mr-3" />
            <span className="text-cream font-bold text-lg font-serif">Franchise Opportunity</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-dark mb-8 font-serif leading-tight">
            <span className="block text-rose-500">Join Our</span>
            <span className="block text-mustard">Family</span>
          </h1>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-8">
            <img
              src={dividerImg}
              alt="Section Separator"
              className="h-16 w-auto"
            />
          </div>

          <p className="text-xl text-dark/80 mb-12 font-serif italic leading-relaxed">
            "Become part of a 75-year legacy. Bring the authentic taste of Rajahmundry Rose Milk to your community and build a thriving business rooted in tradition."
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-cream/50 rounded-2xl p-6 border-2 border-gold/30 shadow-lg">
              <div className="text-4xl font-bold text-rose-500 mb-2 font-serif">75+</div>
              <div className="text-dark font-semibold">Years of Legacy</div>
            </div>
            <div className="bg-cream/50 rounded-2xl p-6 border-2 border-gold/30 shadow-lg">
              <div className="text-4xl font-bold text-mustard mb-2 font-serif">40+</div>
              <div className="text-dark font-semibold">Successful Outlets</div>
            </div>
            <div className="bg-cream/50 rounded-2xl p-6 border-2 border-gold/30 shadow-lg">
              <div className="text-4xl font-bold text-gold mb-2 font-serif">30K+</div>
              <div className="text-dark font-semibold">Daily Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
        {/* Vintage Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-mustard rounded-full px-6 py-3 mb-6 shadow-lg border-2 border-gold/50">
              <Award className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Partnership Benefits</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif">
              <span className="block text-rose-500">Why Partner</span>
              <span className="block text-mustard">With Us?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-gold/30 transform hover:-translate-y-2 relative overflow-hidden group">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}/5 via-transparent to-heritage-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="flex items-start relative z-10">
                    <div className={`bg-${benefit.color} rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-xl border-4 border-gold/50 flex-shrink-0`}>
                      <IconComponent className="h-8 w-8 text-cream" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-3 font-serif">{benefit.title}</h3>
                      <p className="text-dark/80 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Vintage Paper Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-white to-cream/50"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-6 shadow-lg border-2 border-gold/50">
              <Heart className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Start Your Journey</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif">
              <span className="block text-rose-500">Ready to Begin</span>
              <span className="block text-mustard">Your Story?</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gold flex-1 max-w-24"></div>
              <div className="mx-4">
                <Crown className="h-6 w-6 text-gold" />
              </div>
              <div className="h-px bg-gold flex-1 max-w-24"></div>
            </div>

            <p className="text-xl text-dark/80 font-serif italic">
              Fill out your details and we'll get back to you soon with franchise information.
            </p>
          </div>

          {/* Form */}
          <div className="bg-cream/50 rounded-3xl shadow-2xl border-4 border-gold/30 p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-lg font-bold text-dark mb-4 font-serif">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-rose-500" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-14 pr-6 py-4 border-2 border-gold/30 rounded-2xl focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20 transition-all duration-300 text-dark placeholder-dark/50 bg-white shadow-lg font-serif"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-lg font-bold text-dark mb-4 font-serif">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-rose-500" />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-14 pr-6 py-4 border-2 border-gold/30 rounded-2xl focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20 transition-all duration-300 text-dark placeholder-dark/50 bg-white shadow-lg font-serif"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Proposed City */}
              <div>
                <label htmlFor="proposedCity" className="block text-lg font-bold text-dark mb-4 font-serif">
                  Proposed City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-rose-500" />
                  <input
                    type="text"
                    id="proposedCity"
                    name="proposedCity"
                    value={formData.proposedCity}
                    onChange={handleInputChange}
                    className="w-full pl-14 pr-6 py-4 border-2 border-gold/30 rounded-2xl focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20 transition-all duration-300 text-dark placeholder-dark/50 bg-white shadow-lg font-serif"
                    placeholder="Enter your proposed city (optional)"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-rose-500 text-cream py-4 px-8 rounded-2xl font-bold hover:bg-dark transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-xl border-2 border-gold/50 font-serif"
              >
                <Send className="h-6 w-6 mr-3" />
                Send Enquiry
                <Sparkles className="h-6 w-6 ml-3" />
              </button>

              {/* Required Fields Note */}
              <p className="text-sm text-dark/70 text-center mt-6 font-serif">
                * Required fields • We'll respond within 24 hours
              </p>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border-2 border-gold/30 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-rose-500 rounded-full p-3 mr-4">
                  <CheckCircle className="h-6 w-6 text-cream" />
                </div>
                <h3 className="text-xl font-bold text-dark font-serif">
                  Proven Business Model
                </h3>
              </div>
              <p className="text-dark/80 leading-relaxed">
                75 years of success with a time-tested recipe and loyal customer base across generations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gold/30 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-mustard rounded-full p-3 mr-4">
                  <Users className="h-6 w-6 text-cream" />
                </div>
                <h3 className="text-xl font-bold text-dark font-serif">
                  Ongoing Support
                </h3>
              </div>
              <p className="text-dark/80 leading-relaxed">
                Comprehensive training, marketing support, and continuous guidance to ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FranchiseEnquiryPage;