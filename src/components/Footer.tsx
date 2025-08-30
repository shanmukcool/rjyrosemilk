import { Link } from 'react-router-dom';
import { Instagram, MapPin, Facebook, Phone, Crown, Sparkles, Heart, Star, ExternalLink } from 'lucide-react';
import OldLogo from '../assets/oldlogo1.png';
import supplychainVideo from '../assets/videos/life.mp4';
import instaLogo from "../assets/design/connect/instagram.png";
import fbLogo from "../assets/design/connect/facebook.png";
import phoneLogo from "../assets/design/connect/phone.png";
import gmailLogo from "../assets/design/connect/gmail.png";
import whatsappLogo from "../assets/design/connect/whatsapp.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-primary text-white py-16 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          <div className="relative">
            {/* Brand Section */}
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <img
                src={OldLogo}
                alt="Rajahmundry Rose Milk Logo"
                className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <span className="text-2xl font-bold text-white font-serif leading-tight drop-shadow-lg">
                  Rajahmundry Rose Milk
                </span>
                <div className="flex items-center mt-1">
                  <Crown className="h-3 w-3 text-gold mr-1" />
                  <span className="text-gold text-xs font-bold font-serif tracking-wide">
                    EST. 1950
                  </span>
                  <Sparkles className="h-3 w-3 text-gold ml-1" />
                </div>
              </div>
            </Link>

            {/* Tagline */}
            <div className="bg-white/10 border-l-4 border-gold p-4 rounded-r-lg mb-6 backdrop-blur-sm">
              <p className="text-white/90 font-serif italic leading-relaxed">
                "Preserving tradition, delivering joy since 1950. A legacy of authentic taste passed down through generations."
              </p>
            </div>

            {/* Social Links */}

            <div className="flex flex-col space-y-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 font-serif flex items-center">
                  <Heart className="h-5 w-5 text-gold mr-2" />
                  Connect
                </h4>

                {/* Contact links */}
                <div className="flex flex-col space-y-3">
                  <a
                    href="tel:+916262252519"
                    target="_blank"
                    className="rounded-md transition-all duration-300 overflow-hidden flex items-center gap-2"
                  >
                    <img
                      src={phoneLogo}
                      alt="Phone"
                      className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-white">+91 62622 52519</span>
                  </a>

                  <a
                    href="mailto:rishik@rrosestreet.com"
                    target="_blank"
                    className="rounded-md transition-all duration-300 overflow-hidden flex items-center gap-2"
                  >
                    <img
                      src={gmailLogo}
                      alt="Email"
                      className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-white">rishik@rrosestreet.com</span>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/rajahmundryrosemilkoffl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={instaLogo}
                    alt="Instagram"
                    className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </a>

                <a
                  href="https://www.facebook.com/share/1CiyFns1v9/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={fbLogo}
                    alt="Facebook"
                    className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </a>

                <a
                  href="https://wa.me/+916262252519"
                  target="_blank"
                  className="rounded-md transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={whatsappLogo}
                    alt="Whatsapp"
                    className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              </div>

              {/* Credits */}
              <div className="inline-flex items-center">
                <span className="text-white/90 mr-2 font-serif text-sm">Developed by</span>
                <a
                  href="https://shanmuk.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-white transition-colors font-serif flex items-center text-sm"
                >
                  Shanmuk
                </a>
              </div>
            </div>

          </div>

          {/* Products Section */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <Star className="h-5 w-5 text-gold mr-2" />
              <h3 className="text-lg font-semibold text-white font-serif">Our Products</h3>
            </div>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link to="/products" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Rose Milk Syrup
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Rose Milk
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Semia
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Rose Kova
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <Heart className="h-5 w-5 text-gold mr-2" />
              <h3 className="text-lg font-semibold text-white font-serif">Quick Links</h3>
            </div>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link to="/" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about/story" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about/leadership" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Our leadership
                </Link>
              </li>
              <li>
                <Link to="/about/tourism" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Discover Rajahmundry
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/authenticate" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Check Authenticity
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/awards" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Awards
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="flex items-center hover:text-gold transition-all duration-300 group font-serif">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Franchise
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <MapPin className="h-5 w-5 text-gold mr-2" />
              <h3 className="text-lg font-semibold text-white font-serif">Contact us</h3>
            </div>
            <div className="rounded-xl overflow-hidden border-2 border-gold/30 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.5829052106255!2d81.7688253222403!3d17.00321895318575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a519b32f8c3b%3A0x997e0113d2b11ac7!2sRajahmundry%20Rose%20Milk%20Center%20-%2075%20years!5e1!3m2!1sen!2sin!4v1751438964219!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rajahmundry Rose Milk Location"
              ></iframe>
            </div>

            {/* Address */}
            <div className="mt-4 bg-white/10 border-l-4 border-gold p-3 rounded-r-lg backdrop-blur-sm">
              <p className="text-white/90 text-sm font-serif">
                <strong>Our Flagship Store – Where It All Began:</strong><br />
                Main Rd, Mangalavaripeta<br />
                Rajamahendravaram, AP 533101
              </p>
            </div>
          </div>
        </div>

        {/* Trademark Section */}
        <div className="text-center relative z-10 -mx-4 sm:-mx-6 lg:-mx-8">

          {/* Supplychain Video */}
          <video
            src={supplychainVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-screen h-auto object-contain"
          />

          {/* Copyright */}
          <div className="mt-8 pt-6 mx-4 sm:mx-6 lg:mx-8">
            <p className="text-white/70 text-sm font-serif italic">
              © COPYRIGHT Rajahmundry Rose Milk • All Rights Reserved
            </p>
            <div className="flex items-center justify-center mt-4">
              <Heart className="h-4 w-4 text-gold mr-2" />
              <span className="text-gold text-sm font-serif">Made with love in Rajahmundry since 1950</span>
              <Heart className="h-4 w-4 text-gold ml-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;