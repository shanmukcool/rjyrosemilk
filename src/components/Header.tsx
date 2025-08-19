import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ScanBarcode, Menu, X, Home, Info, Package, Handshake, Crown, Sparkles, ChevronDown, Clock, Users, Camera, Award } from 'lucide-react';
import OldLogo from '../assets/oldlogo1.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showTelugu, setShowTelugu] = useState(false);

  // Text transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTelugu(prev => !prev);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileAboutDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleMobileAboutDropdown = () => {
    setIsMobileAboutDropdownOpen(!isMobileAboutDropdownOpen);
  };

  const closeAboutDropdown = () => {
    setIsAboutDropdownOpen(false);
  };

  const closeMobileAboutDropdown = () => {
    setIsMobileAboutDropdownOpen(false);
  };

  // Scroll direction-aware logic
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY && currentScrollY > 80) {
            setShowHeader(false); // Hide on scroll down
          } else {
            setShowHeader(true); // Show on scroll up
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [lastScrollY]);

  // Close dropdown when clicking outside
 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      isAboutDropdownOpen &&
      !(event.target as HTMLElement).closest('.about-dropdown-container')
    ) {
      setIsAboutDropdownOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isAboutDropdownOpen]);

  
  return (
    <>
      <header
        className={`bg-brand-primary backdrop-blur-sm top-0 z-50 border-b-4 border-gold/50 relative overflow-visible transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ position: 'sticky' }}
      >
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D4A574 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div> */}
        
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-gold/30 border-double"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-gold/30 border-double"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 relative z-10">
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Logo Frame */}
              <div className="relative">
                  <img 
                    src={OldLogo} 
                    alt="Rajahmundry Rose Milk" 
                    className="h-20 w-20 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
              </div>
              
              {/* Brand Name with Transition */}
              <div className="flex flex-col">
                <div className="relative min-h-[4rem] sm:min-h-[3rem] flex items-center">
                  <span 
                    className={`text-2xl font-bold text-white font-serif leading-tight drop-shadow-lg transition-all duration-1000 ease-in-out absolute sm:whitespace-nowrap ${
                      showTelugu ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    Rajahmundry Rose Milk
                  </span>
                  <span 
                    className={`text-2xl font-bold text-white font-serif leading-tight drop-shadow-lg transition-all duration-1000 ease-in-out absolute whitespace-nowrap ${
                      showTelugu ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    రాజమండ్రి రోజ్ మిల్క్
                  </span>
                </div>
                <div className="flex items-center">
                  <Crown className="h-3 w-3 text-gold mr-1" />
                  <span className="text-gold text-xs font-bold font-serif tracking-wide">
                    EST. 1950
                  </span>
                  <Sparkles className="h-3 w-3 text-gold ml-1" />
                </div>
              </div>
            </Link>
            
            <div className="flex items-center space-x-8">
              {/* Desktop Navigation */}
              <nav className="hidden xl2:flex space-x-8">
                <Link to="/" className="flex items-center text-white hover:text-gold transition-all duration-300 group font-serif font-semibold">
                  <div className="bg-white/10 rounded-full p-2 mr-2 group-hover:bg-gold/20 transition-all duration-300 border border-gold/30">
                    <Home className="h-4 w-4" />
                  </div>
                  HOME
                </Link>
                <div className="relative about-dropdown-container">
                  <button 
                    onClick={toggleAboutDropdown}
                    className="flex items-center text-white hover:text-gold transition-all duration-300 group font-serif font-semibold"
                  >
                    <div className="bg-white/10 rounded-full p-2 mr-2 group-hover:bg-gold/20 transition-all duration-300 border border-gold/30">
                      <Info className="h-4 w-4" />
                    </div>
                    ABOUT
                    <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Desktop Dropdown */}
                  {isAboutDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border-4 border-gold/30 overflow-hidden z-50">
                      <div className="p-2">
                        <Link 
                          to="/about/story" 
                          onClick={closeAboutDropdown}
                          className="flex items-center p-4 text-dark hover:bg-rose-500/10 hover:text-rose-500 transition-all duration-300 rounded-xl group"
                        >
                          <div className="bg-rose-500/10 rounded-full p-2 mr-3 group-hover:bg-rose-500/20 transition-all duration-300">
                            <Clock className="h-5 w-5 text-rose-500" />
                          </div>
                          <div>
                            <div className="font-bold font-serif">Our Story</div>
                          </div>
                        </Link>
                        <Link 
                          to="/about/leadership" 
                          onClick={closeAboutDropdown}
                          className="flex items-center p-4 text-dark hover:bg-mustard/10 hover:text-mustard transition-all duration-300 rounded-xl group"
                        >
                          <div className="bg-mustard/10 rounded-full p-2 mr-3 group-hover:bg-mustard/20 transition-all duration-300">
                            <Users className="h-5 w-5 text-mustard" />
                          </div>
                          <div>
                            <div className="font-bold font-serif">Our Leadership</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/products" className="flex items-center text-white hover:text-gold transition-all duration-300 group font-serif font-semibold">
                  <div className="bg-white/10 rounded-full p-2 mr-2 group-hover:bg-gold/20 transition-all duration-300 border border-gold/30">
                    <Package className="h-4 w-4" />
                  </div>
                  PRODUCTS
                </Link>
                <Link to="/gallery" className="flex items-center text-white hover:text-gold transition-all duration-300 group font-serif font-semibold">
                  <div className="bg-white/10 rounded-full p-2 mr-2 group-hover:bg-gold/20 transition-all duration-300 border border-gold/30">
                    <Camera className="h-4 w-4" />
                  </div>
                  GALLERY
                </Link>
                <Link to="/awards" className="flex items-center text-white hover:text-gold transition-all duration-300 group font-serif font-semibold">
                  <div className="bg-white/10 rounded-full p-2 mr-2 group-hover:bg-gold/20 transition-all duration-300 border border-gold/30">
                    <Award className="h-4 w-4" />
                  </div>
                  AWARDS
                </Link>
                <Link to="/franchise" className="flex items-center text-white hover:text-gold transition-all duration-300 group font-serif font-semibold">
                  <div className="bg-white/10 rounded-full p-2 mr-2 group-hover:bg-gold/20 transition-all duration-300 border border-gold/30">
                    <Handshake className="h-4 w-4" />
                  </div>
                  FRANCHISE
                </Link>
              </nav>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="xl2:hidden p-3 rounded-full hover:bg-white/10 transition-all duration-300 border-2 border-gold/30 backdrop-blur-sm"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 xl2:hidden overflow-hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Ornamental Border */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full border-4 border-gold/20 border-double rounded-lg"></div>
        </div>
        
        <div className="flex flex-col h-full relative z-10">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b-2 border-gold/30 bg-cream/50">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-rose-500/20 rounded-full blur-md"></div>
                <div className="relative">
                  <img 
                    src={OldLogo} 
                    alt="Rajahmundry Rose Milk" 
                    className="h-20 w-20 object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-rose-500 font-serif">Rose Milk</span>
                <div className="flex items-center">
                  <Crown className="h-3 w-3 text-gold mr-1" />
                  <span className="text-gold text-xs font-bold font-serif">EST. 1950</span>
                </div>
              </div>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-full hover:bg-cream transition-all duration-300 border border-gold/30"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6 text-dark" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 bg-cream/30">
            <div className="flex flex-col h-full justify-between">
              <Link 
                to="/" 
                className="flex items-center text-lg font-medium text-dark hover:text-rose-500 transition-all duration-300 py-4 border-b-2 border-gold/30 group font-serif"
                onClick={closeMobileMenu}
              >
                <div className="bg-rose-500/10 rounded-full p-3 mr-4 group-hover:bg-rose-500/20 transition-all duration-300 border border-gold/30">
                  <Home className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">HOME</div>
                </div>
              </Link>
              <div 
                className="flex items-center text-lg font-medium text-dark hover:text-rose-500 transition-all duration-300 py-4 border-b-2 border-gold/30 group font-serif"
                onClick={toggleMobileAboutDropdown}
              >
                <div className="bg-mustard/10 rounded-full p-3 mr-4 group-hover:bg-mustard/20 transition-all duration-300 border border-gold/30">
                  <Info className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold flex items-center">
                    ABOUT
                    <ChevronDown className={`h-4 w-4 ml-2 transition-transform duration-300 ${isMobileAboutDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </div>
             
             {/* Mobile About Dropdown */}
             {isMobileAboutDropdownOpen && (
               <div className="ml-8 space-y-2 pb-4">
                 <Link 
                   to="/about/story" 
                   className="flex items-center text-base font-medium text-dark/80 hover:text-rose-500 transition-all duration-300 py-3 group font-serif"
                   onClick={closeMobileMenu}
                 >
                   <div className="bg-rose-500/10 rounded-full p-2 mr-3 group-hover:bg-rose-500/20 transition-all duration-300 border border-gold/30">
                     <Clock className="h-4 w-4 text-rose-500" />
                   </div>
                   <div>
                     <div className="font-bold">Our Story</div>
                   </div>
                 </Link>
                 <Link 
                   to="/about/leadership" 
                   className="flex items-center text-base font-medium text-dark/80 hover:text-mustard transition-all duration-300 py-3 group font-serif"
                   onClick={closeMobileMenu}
                 >
                   <div className="bg-mustard/10 rounded-full p-2 mr-3 group-hover:bg-mustard/20 transition-all duration-300 border border-gold/30">
                     <Users className="h-4 w-4 text-mustard" />
                   </div>
                   <div>
                     <div className="font-bold">Our Leadership</div>
                   </div>
                 </Link>
               </div>
             )}
             
              <Link 
                to="/products" 
                className="flex items-center text-lg font-medium text-dark hover:text-rose-500 transition-all duration-300 py-4 border-b-2 border-gold/30 group font-serif"
                onClick={closeMobileMenu}
              >
                <div className="bg-gold/10 rounded-full p-3 mr-4 group-hover:bg-gold/20 transition-all duration-300 border border-gold/30">
                  <Package className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">PRODUCTS</div>
                </div>
              </Link>
              <Link 
                to="/authenticate" 
                className="flex items-center text-lg font-medium text-dark hover:text-rose-500 transition-all duration-300 py-4 border-b-2 border-gold/30 group font-serif"
                onClick={closeMobileMenu}
              >
                <div className="bg-gold/10 rounded-full p-3 mr-4 group-hover:bg-gold/20 transition-all duration-300 border border-gold/30">
                  <ScanBarcode className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">AUTHENTICATE</div>
                </div>
              </Link>
              <Link 
                to="/gallery" 
                className="flex items-center text-lg font-medium text-dark hover:text-rose-500 transition-all duration-300 py-4 border-b-2 border-gold/30 group font-serif"
                onClick={closeMobileMenu}
              >
                <div className="bg-rose-500/10 rounded-full p-3 mr-4 group-hover:bg-rose-500/20 transition-all duration-300 border border-gold/30">
                  <Camera className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">GALLERY</div>
                </div>
              </Link>
              <Link 
                to="/awards" 
                className="flex items-center text-lg font-medium text-dark hover:text-rose-500 transition-all duration-300 py-4 border-b-2 border-gold/30 group font-serif"
                onClick={closeMobileMenu}
              >
                <div className="bg-gold/10 rounded-full p-3 mr-4 group-hover:bg-gold/20 transition-all duration-300 border border-gold/30">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">AWARDS</div>
                </div>
              </Link>
              <Link 
                to="/franchise" 
                className="flex items-center text-lg font-medium text-dark hover:text-rose-500 transition-all duration-300 py-4 group font-serif"
                onClick={closeMobileMenu}
              >
                <div className="bg-rose-500/10 rounded-full p-3 mr-4 group-hover:bg-rose-500/20 transition-all duration-300 border border-gold/30">
                  <Handshake className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">FRANCHISE</div>
                </div>
              </Link>
            </div>
          </nav>
          
          {/* Footer in Sidebar */}
          <div className="p-6 bg-rose-500/15 border-t-2 border-gold/30">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Crown className="h-4 w-4 text-gold mr-2" />
                <span className="text-dark font-bold font-serif">75 Years of Excellence</span>
                <Sparkles className="h-4 w-4 text-gold ml-2" />
              </div>
              <p className="text-xs text-dark/70 font-serif italic">
                Since 1950
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;