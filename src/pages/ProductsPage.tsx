import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Award, Star, CheckCircle, Crown, MapPin, Sparkles, ExternalLink, ShoppingCart, Store } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoseStreetButton from "../components/RoseStreetButton";
import FindNearestStoreButton from "../components/FindNearestStoreButton";
import patternImg from '../assets/design/pattern.png';
import chain from '../assets/design/chain.png';
import dividerImg from '../assets/design/divider.png';
import menu from '../assets/menu.png';
import RoseMilkImg from '../assets/products/rosemilk.png';
import RosekovaImg from '../assets/products/rosekova.png';
import SemiaImg from '../assets/products/rosesemia.png';
import RoseMilkSyrupImage from '../assets/products/rosemilksyrup.png';
import rosepetalsImg from '../assets/ingredients/rosepetals.jpg';
import poppyseedsImg from '../assets/ingredients/poppyseeds.jpg';
import vetiverImg from '../assets/ingredients/vetiver.jpg';
import sandalwoodpowderImg from '../assets/ingredients/sandalwoodpowder.jpg';
import simplesyrupImg from '../assets/ingredients/simplesyrup.jpg';
import raathipuvvuImg from '../assets/ingredients/raathipuvvu.jpg';
import niloferImg from '../assets/ingredients/nilofer.jpg';
import gaozabanImg from '../assets/ingredients/gaozaban.jpg';

const ProductsPage = () => {

  // Featured product (Rose Milk Syrup) - unchanged
  const specialProduct = {
    id: 'rose-milk-syrup',
    name: 'Rose Milk Syrup',
    description: 'Discover the time-honored blend of nature and nourishment with handcrafted infusion of 8 revitalizing ingredients that not only taste divine but support holistic well-being. Every drop delivers a fragrant bouquet of rose, the grounding calm of vetiver, and the cooling touch of sandalwood. Designed to refresh your body, relax your mind, and uplift your spirit—this syrup is more than a drink, it\'s tradition in a bottle.',
    badge: 'Bestseller',
    badgeColor: 'bg-rose-500 text-cream',
    image: RoseMilkSyrupImage,
    category: 'drinks',
    isSpecial: true,
    ingredients: [
      { name: 'Rose', benefit: 'Rich in antioxidants, enhances natural skin glow', src: rosepetalsImg },
      { name: 'Poppy Seeds', benefit: 'Supports bone health & relaxation', src: poppyseedsImg },
      { name: 'Vetiver', benefit: 'Calms the nervous system, promotes restful sleep', src: vetiverImg },
      { name: 'Sandalwood Powder', benefit: 'Soothes skin, enhances mental clarity', src: sandalwoodpowderImg },
      { name: 'Simple Syrup', benefit: 'Boosts energy, supports hydration and metabolism', src: simplesyrupImg },
      { name: 'Raathi Puvvu', benefit: 'Supports heart health, enhances hair vitality', src: raathipuvvuImg },
      { name: 'Nilofer', benefit: 'Relieves stress, promotes emotional balance', src: niloferImg },
      { name: 'Gaozaban', benefit: 'Supports respiratory health, reduces inflammation', src: gaozabanImg }
    ]
  };

  // Core products - only three products
  const coreProducts = [
    {
      id: 'rose-milk',
      name: 'Rose Milk',
      description: 'Indulge in the timeless allure of our Rose Milk, where the floral sweetness of rose essence gently harmonizes with creamy buffalo milk. Hints of hand-churned milk khoya add richness, making each sip a nostalgic experience.',
      badge: 'Original',
      badgeColor: 'bg-rose-500 text-cream',
      image: RoseMilkImg,
      category: 'drinks',
      ingredients: ['Buffalo Milk', 'Rose Essence', 'Hand-churned Milk Khoya', 'Sugar'],
      applications: ['Summer Coolers', 'Drinkable Desserts', 'Festive Beverages', 'Café Menus']
    },
    {
      id: 'semia',
      name: 'Semia',
      description: 'Rediscover royalty in every spoonful of Semia, our classic dessert that combines silky vermicelli strands with hand-churned milk khoya and a hint of rose essence. Cooled with mineral ice, it\'s a journey through Mughal culinary heritage.',
      badge: 'Heritage',
      badgeColor: 'bg-gold text-dark',
      image: SemiaImg,
      category: 'fusions',
      ingredients: ['Thin Semia (vermicelli)', 'Hand-churned Milk Khoya', 'Rose Essence', 'Mineral Ice', 'Sugar'],
      applications: ['Traditional Desserts', 'Festive Menus', 'Heritage Events', 'Gourmet Meal Closers']
    },
    {
      id: 'rose-kova',
      name: 'Rose Kova',
      description: 'Experience indulgence with our decadent Rose Kova, where the creamy texture of hand-churned milk khoya meets the aromatic essence of rose. Balanced with mineral ice for a refreshing finish, it\'s a symphony of flavors that blends rich tradition with modern taste.',
      badge: 'Premium',
      badgeColor: 'bg-mustard text-cream',
      image: RosekovaImg,
      category: 'fusions',
      ingredients: ['Hand-churned Milk Khoya', 'Rose Essence', 'Mineral Ice', 'Sugar'],
      applications: ['Dessert Cups', 'Fusion Sweets', 'Festive Gifting', 'Luxury Catering']
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
          <span className="text-rose-500 font-medium">Products</span>
        </div>
      </div>

      {/* Hero Section with Heritage Styling */}
      <section className="py-12 bg-white relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-rose-500 rounded-full px-8 py-4 mb-8 shadow-xl border-2 border-gold/50">
              <Crown className="h-6 w-6 text-cream mr-3" />
              <span className="text-cream font-bold text-lg font-serif">Our Collection</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 font-serif leading-tight">
              <span className="block text-rose-500">Authentic Products</span>
              <span className="block text-mustard">Crafted with</span>
              <span className="block text-dark">75 Years of Tradition</span>
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-6">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-16 w-auto"
              />
            </div>

            <p className="text-xl text-dark/80 max-w-3xl mx-auto font-serif italic">
              Discover our complete range of authentic products, each carrying the soul of our original recipe.
            </p>
          </div>
        </div>
      </section>
      {/* Chains and Menu */}
      <div className="relative z-10 flex justify-center items-start mt-0">
        {/* Left Chain */}
        <img
          src={chain}
          alt="Left Chain"
          className="w-48 h-auto absolute left-[5%] sm:left-[55%]"
        />

        {/* Right Chain */}
        <img
          src={chain}
          alt="Right Chain"
          className="w-48 h-auto absolute right-[5%] sm:right-[55%]"
        />

        {/* Hanging Menu */}
        <img
          src={menu}
          alt="Hanging Menu"
          className="w-[90%] sm:w-[596px] relative z-20 mt-32 border-4 border-[#A35E2E] rounded-md shadow-xl"
        />
      </div>
      {/* Featured Product - Rose Milk Syrup with Heritage Styling - UNCHANGED */}
      <section className="py-16 bg-cream relative overflow-hidden" id="featured-product">

        {/* Vintage Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-gold/30 overflow-hidden relative">
            {/* Heritage Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-mustard/5"></div>

            <div className="text-center mb-8 relative z-10">
              <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-6 shadow-lg border-2 border-gold/50">
                <Sparkles className="h-5 w-5 text-cream mr-2" />
                <span className="text-cream font-bold font-serif">Featured Product</span>
              </div>

              <h2 className="text-4xl font-bold text-dark mb-4 font-serif">{specialProduct.name}</h2>
            </div>

            {/* Heritage Radial Ingredient Layout */}
            <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center mb-8 overflow-visible transition-all duration-1000 animate-spin-slow"
               style={{ height: '80vmin' }}>
              {/* Central Rose Milk Syrup Bottle with Heritage Frame */}
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 flex items-center justify-center" style={{ width: '30vmin' }}>
                <div className="relative">
                  <div className="absolute animate-pulse"></div>
                  <div className="">
                    <img
                      src={specialProduct.image}
                      alt={specialProduct.name}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-1000 animate-spin-reverse"/>
                  </div>
                </div>
              </div>

              {/* Heritage Ingredient Icons in Circular Arrangement */}
              {specialProduct.ingredients.map((ingredient, index) => {
                const angle = (360 / specialProduct.ingredients.length) * index;
                const radius = '30vmin';

                return (
                  <div
                    key={index}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center cursor-pointer hover:scale-110 transition-transform duration-300 group"
                    style={{
                      transform: `rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`,
                      width: '18vmin',
                      height: '16vmin'
                    }}
                  >
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-between text-center cursor-pointer hover:scale-110 transition-transform duration-300 group animate-spin-reverse"
                      >
                      {/* Heritage Circular Icon Background */}
                      <div className="flex items-center justify-center" style={{ width: '12vmin', height: '12vmin' }}>
                        <img src={ingredient.src} alt={`${ingredient.name} Icon`} className="w-full h-full object-contain" />
                      </div>

                      {/* Ingredient Name with Heritage Typography */}
                      <h3 className="font-bold text-dark leading-tight mb-1 px-2 font-serif" style={{ fontSize: '1.5vmin' }}>
                        {ingredient.name}
                      </h3>

                      {/* Ingredient Benefit */}
                      <p className="text-dark/70 leading-tight px-2 break-words" style={{ fontSize: '1.2vmin' }}>
                        {ingredient.benefit}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Product Details Section */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                {/* Ingredients */}
                <div>
                  <h3 className="text-3xl font-bold text-dark mb-6 font-serif border-b border-gold pb-2">
                    Ingredients
                  </h3>
                  <div className="space-y-5">
                    {specialProduct.ingredients.map((ingredient, index) => {
                      const isEven = index % 2 !== 0;
                      return (
                        <div
                          key={index}
                          className="bg-white/70 border border-gold/30 py-2 px-5 rounded-xl shadow transition-transform duration-300 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div
                            className={`flex flex-col md:flex-row items-center justify-between gap-5 ${isEven ? 'md:flex-row-reverse' : ''
                              }`}
                          >
                            {/* Image */}
                            <div className="flex-shrink-0">
                              <img
                                src={ingredient.src}
                                alt={ingredient.name}
                                className="h-24 w-24 object-contain rounded-lg"
                              />
                            </div>

                            {/* Text */}
                            <div
                              className={`max-w-md ${isEven ? 'text-center md:text-left' : 'text-center md:text-left'
                                }`}
                            >
                              <h4 className="font-serif font-bold text-xl text-gold-800 mb-1">
                                {ingredient.name}
                              </h4>
                              <p className="text-dark/70 text-sm">{ingredient.benefit}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-4 font-serif">Description</h3>
                    <div className="bg-cream/50 border-l-4 border-rose-500 p-6 rounded-r-lg shadow-lg">
                      <p className="text-dark/80 leading-relaxed font-serif">{specialProduct.description}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Dilution */}
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-4 font-serif">Dilution</h3>
                      <div className="bg-mustard/20 border-l-4 border-mustard p-6 rounded-r-lg shadow-lg border-2 border-gold/30">
                        <p className="text-dark font-bold text-lg font-serif mb-2">1 part Rose Syrup : 3 parts chilled milk or water</p>
                        <p className="text-dark/80 font-serif italic">Shake well before serving.</p>
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-4 font-serif">Applications</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {['Rose Milk', 'Herbal Coolers', 'Wellness Mocktails', 'Traditional Festive Drinks', 'Milkshakes & Smoothies'].map((application, index) => (
                          <div key={index} className="flex items-center bg-white/70 p-3 rounded-lg border border-gold/30 shadow-sm">
                            <CheckCircle className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0" />
                            <span className="text-dark font-semibold font-serif">{application}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Buy From */}
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-4 font-serif">Buy From</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <a
                          href="https://www.swiggy.com/city/rajahmundry/rajahmundry-rosemilk-head-branch-east-godavari-dist-main-road-rest722250"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 font-serif"
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          Swiggy
                        </a>
                        <a
                          href="http://zoma.to/r/20698094"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 font-serif"
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          Zomato
                        </a>
                        <button className="flex items-center justify-center px-4 py-3 bg-red-500  text-white rounded-lg hover:bg-orange-600 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 font-serif">
                          <a
                            href="https://www.indiamart.com/rose-street/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <ShoppingCart className="h-5 w-5 mr-2" />
                            IndiaMart
                          </a>
                        </button>
                        <button className="flex items-center justify-center px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 font-serif">
                          <a
                            href="https://www.amazon.in/storefront?me=A2053PX3WBG6Y5&ref_=ssf_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <ShoppingCart className="h-5 w-5 mr-2" />
                            Amazon
                          </a>
                        </button>
                        <button className="flex items-center justify-center px-4 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 font-serif">
                          <a
                            href="https://www.flipkart.com/product/p/itme?pid=FDMHF5A8T3A9VUYB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <ShoppingCart className="h-5 w-5 mr-2" />
                            Flipkart
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Vintage Paper Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/20 via-white to-cream/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-mustard rounded-full px-6 py-3 mb-6 shadow-lg border-2 border-gold/50">
              <Award className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream font-bold font-serif">Core Collection</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-serif">
              <span className="block text-rose-500">Our Signature</span>
              <span className="block text-mustard">Three Classics</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-6">
              <img
                src={dividerImg}
                alt="Section Separator"
                className="h-16 w-auto"
              />
            </div>

            <p className="text-xl text-dark/80 max-w-3xl mx-auto font-serif italic">
              Three timeless recipes that have defined our legacy for over seven decades.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {coreProducts.map((product, index) => (
              <div key={product.id} className="bg-cream rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-gold/30 group transform hover:-translate-y-3 relative min-h-[900px] flex flex-col">
                {/* Heritage Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-mustard/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Product Image Container with Heritage Frame */}
                <div className="relative p-8 bg-white/30">
                  <div className="aspect-[3/4] flex items-center justify-center relative">
                    {/* Heritage Glow Effect */}
                    <div className="absolute inset-0 bg-gold/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500 relative z-10"
                    />
                  </div>
                </div>

                {/* Product Info with Heritage Typography */}
                <div className="p-8 relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-dark mb-4 font-serif text-center">{product.name}</h3>

                  {/* Decorative Divider */}
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={dividerImg}
                      alt="Section Separator"
                      className="h-6 w-auto"
                    />
                  </div>
                  <div className="bg-white/70 border-l-4 border-rose-500 p-4 rounded-r-lg mb-6 shadow-lg">
                    <p className="text-dark/80 text-sm leading-relaxed font-serif italic">{product.description}</p>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-dark mb-3 font-serif">Ingredients</h4>
                    <div className="space-y-2">
                      {product.ingredients.map((ingredient, idx) => (
                        <div key={idx} className="flex items-center bg-white/50 p-2 rounded-lg border border-gold/20">
                          <CheckCircle className="h-4 w-4 text-rose-500 mr-2 flex-shrink-0" />
                          <span className="text-dark text-sm font-medium">{ingredient}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-dark mb-3 font-serif">Applications</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.applications.map((application, idx) => (
                        <div key={idx} className="flex items-center bg-white/50 p-2 rounded-lg border border-gold/20">
                          <Star className="h-3 w-3 text-mustard mr-2 flex-shrink-0" />
                          <span className="text-dark text-xs font-medium">{application}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Unified Order Online Section */}
          <div className="mt-24 text-center">
            <div className="inline-flex items-center mb-4">
              <Truck className="h-8 w-8 text-rose-500 mr-2" />
              <h4 className="text-3xl font-bold font-serif text-dark">
                <span className="text-rose-500">Order</span>{' '}
                <span className="text-mustard">Online</span>
              </h4>
            </div>

            <p className="text-dark/70 text-base italic mb-8 font-serif">
              Get your favorites delivered fresh and fast to your doorstep.
            </p>

            <div className="flex justify-center gap-6">
              <a
                href="https://www.swiggy.com/city/rajahmundry/rajahmundry-rosemilk-head-branch-east-godavari-dist-main-road-rest722250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-bold shadow-lg hover:shadow-xl text-base transform hover:scale-105 font-serif"
              >
                <span>SWIGGY</span>
                <ExternalLink className="h-5 w-5 ml-2" />
              </a>
              <a
                href="http://zoma.to/r/20698094"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-bold shadow-lg hover:shadow-xl text-base transform hover:scale-105 font-serif"
              >
                <span>ZOMATO</span>
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

export default ProductsPage;