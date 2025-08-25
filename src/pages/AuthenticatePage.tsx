import { useEffect } from "react";
import { Store, ShieldCheck, Lock, Search, AlertTriangle, FileText, ExternalLink, ShoppingCart, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoseStreetButton from "../components/RoseStreetButton";
import FindNearestStoreButton from "../components/FindNearestStoreButton";
import FindNearestStoreCardButton from "../components/FindNearestStoreCardButton";
import ipimg from "../assets/IP.jpg";
import RoseMilkSyrup from "../assets/products/rosemilksyrup.png";
import fssai from "../assets/design/fssai.png"; // Assuming you have an FSSAI image
import patternImg from "../assets/design/pattern.png";
import dividerImg from "../assets/design/divider.png";
import OldLogo from '../assets/oldlogo1.png';

const AuthenticatePage = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".fade-in-up");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fadeInUp");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        sections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-cream">
            <Header />

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center text-sm text-dark/70">
                    <Link to="/" className="hover:text-rose-500 transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-rose-500 font-medium">Authenticate</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-white">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-white to-cream/50"></div>

                {/* Pattern Background */}
                <div className="absolute inset-0 pointer-events-none opacity-25">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `url(${patternImg})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "250px",
                        }}
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-rose-500 rounded-full px-8 py-4 mb-8 shadow-xl border-2 border-gold/50">
                            <ShieldCheck className="h-6 w-6 text-cream mr-3" />
                            <span className="text-cream font-bold text-lg font-serif">Authenticity</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-dark mb-8 font-serif leading-tight">
                            <span className="block text-rose-500 drop-shadow-lg">Our Promise</span>
                            <span className="block text-mustard">100% Genuine & Protected</span>
                        </h1>

                        {/* Divider */}
                        <div className="flex items-center justify-center mb-8">
                            <img src={dividerImg} alt="Section Separator" className="h-16 w-auto" />
                        </div>

                        <p className="text-xl lg:text-2xl text-dark/80 max-w-4xl mx-auto leading-relaxed font-serif italic">
                            Every sip of Rajahmundry Rose Milk comes with a legacy of trust, authenticity, and legal protection.
                            We safeguard our brand so you can enjoy the real taste of tradition.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trademark & IP Section */}
            <section className="py-20 bg-cream relative overflow-hidden fade-in-up">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
                            backgroundSize: "60px 60px",
                        }}
                    ></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="flex sm:row-start-2 lg:row-start-1 flex-col">
                        <div className="flex items-center mb-6">
                            <Lock className="h-8 w-8 text-rose-500 mr-3" />
                            <h2 className="text-3xl font-bold text-dark font-serif">Trademark & IP Details</h2>
                        </div>
                        <p className="text-lg text-dark/80 leading-relaxed font-serif">
                            <b>Rajahmundry Rose Milk®</b> is a registered trademark protected under Indian IP laws.
                            Our brand name, design rights, packaging, and product identity are legally safeguarded
                            against imitation and misuse.
                        </p>
                    </div>
                    <div className="flex sm:row-start-1 justify-center">
                        <img
                            src={ipimg}
                            alt="IP Rights"
                            className="rounded-2xl shadow-2xl border-4 border-gold/40 max-h-[600px] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Verification Section */}
            <section className="py-20 bg-white relative overflow-hidden fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-white to-cream/50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="mt-10 flex justify-center">
                        <img src={RoseMilkSyrup} alt="Rose Milk Syrup Bottle" className="w-72 drop-shadow-2xl" />
                    </div>
                    <div>
                        <div className="flex items-center mb-6">
                            <Search className="h-8 w-8 text-mustard mr-3" />
                            <h2 className="text-3xl font-bold text-dark font-serif">How to Verify Authentic Products</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
                            {/* Grid 1 - Old Logo Image + Text */}
                            <div className="aspect-square bg-white flex flex-col items-center justify-center rounded-xl shadow-lg border border-gold/40 p-4 text-center">
                                <img
                                    src={OldLogo}
                                    alt="Official Logo"
                                    className="w-20 h-20 object-contain mb-3"
                                />
                                <p className="text-dark/80 font-serif text-lg">
                                    ✔️ Look for the official Rajahmundry Rose Milk® logo on packaging.
                                </p>
                            </div>

                            {/* Grid 2 - FSSAI Image + Text */}
                            <div className="aspect-square bg-white flex flex-col items-center justify-center rounded-xl shadow-lg border border-gold/40 p-4 text-center">
                                <img
                                    src={fssai}
                                    alt="FSSAI Approved"
                                    className="w-20 h-20 object-contain mb-3"
                                />
                                <p className="text-dark/80 font-serif text-lg">
                                    ✔️ Check for unique anti-counterfeiting marks on each product.
                                </p>
                            </div>

                            <div className="aspect-square bg-cream/70 grid items-center justify-center rounded-xl shadow-lg border border-gold/40 p-4 text-center gap-2">
                                <Store className="h-20 w-20 m-auto" />
                                <p className="text-dark/80 font-serif text-lg">
                                    ✔️ Buy only from authorized stores.
                                </p>
                                <FindNearestStoreCardButton />
                            </div>

                            {/* Grid 4 - Text Only */}
                            <div className="aspect-square bg-cream/70 flex-row gap-4 justify-center rounded-xl shadow-lg border border-gold/40 p-4 text-center">
                                <p className="text-dark/80 font-serif text-lg">
                                    ✔️ Order online from our trusted partners.
                                </p>
                                <a
                                    href="https://www.indiamart.com/rose-street/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 font-serif my-2.5"
                                >
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    IndiaMart
                                </a>
                                <a
                                    href="https://www.amazon.in/storefront?me=A2053PX3WBG6Y5&ref_=ssf_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 font-serif my-2.5"
                                >
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    Amazon
                                </a>
                                <a
                                    href="https://www.flipkart.com/product/p/itme?pid=FDMHF5A8T3A9VUYB"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-4 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 font-serif my-2.5"
                                >
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    Flipkart
                                </a>
                                <a
                                    href="http://zoma.to/r/20698094"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 font-serif my-2"
                                >
                                    <ExternalLink className="h-5 w-5 mr-2" />
                                    Zomato
                                </a>
                                <a
                                    href="https://www.swiggy.com/city/rajahmundry/rajahmundry-rosemilk-head-branch-east-godavari-dist-main-road-rest722250"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 font-serif my-2.5"
                                >
                                    <ExternalLink className="h-5 w-5 mr-2" />
                                    Swiggy
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Anti-Counterfeit Section */}
            <section className="py-20 bg-cream relative overflow-hidden fade-in-up">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
                            backgroundSize: "60px 60px",
                        }}
                    ></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center mb-6">
                        <ShieldCheck className="h-8 w-8 text-rose-500 mr-3" />
                        <h2 className="text-3xl font-bold text-dark font-serif">Anti-Counterfeiting Features</h2>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-6 text-lg text-dark/80 font-serif">
                        <li className="bg-white p-5 rounded-xl border-l-4 border-rose-500 shadow-md">✅ Tamper-proof holographic seal</li>
                        <li className="bg-white p-5 rounded-xl border-l-4 border-rose-500 shadow-md">✅ Unique batch codes for traceability</li>
                        <li className="bg-white p-5 rounded-xl border-l-4 border-rose-500 shadow-md">✅ FSSAI approval number on every label</li>
                        <li className="bg-white p-5 rounded-xl border-l-4 border-rose-500 shadow-md">✅ QR code verification for authenticity check</li>
                    </ul>
                </div>
            </section>

            {/* Report Fake Product */}
            <section className="py-20 bg-white relative overflow-hidden fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-white to-cream/50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center mb-6">
                        <AlertTriangle className="h-8 w-8 text-mustard mr-3" />
                        <h2 className="text-3xl font-bold text-dark font-serif">Report a Fake Product</h2>
                    </div>
                    <div className="bg-cream/50 p-8 rounded-2xl border-2 border-gold/30 shadow-xl">
                        <p className="mb-4 text-dark font-serif">
                            📧 Email:{" "}
                            <a href="mailto:rishik@rrosestreet.com" className="text-rose-500 font-semibold">
                                rishik@rrosestreet.com
                            </a>
                        </p>
                        <p className="mb-4 text-dark font-serif">
                            📞 Call: <span className="font-semibold">+91 62622 52519</span>
                        </p>
                        <p className="italic text-dark/70 font-serif">
                            Provide product photos, purchase details, and seller info for investigation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-20 bg-cream relative overflow-hidden fade-in-up">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
                            backgroundSize: "60px 60px",
                        }}
                    ></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center mb-6">
                        <FileText className="h-8 w-8 text-rose-500 mr-3" />
                        <h2 className="text-3xl font-bold text-dark font-serif">Legal Disclaimer</h2>
                    </div>
                    <p className="text-lg text-dark/80 leading-relaxed font-serif">
                        Rajahmundry Rose Milk reserves all intellectual property rights related to its brand,
                        product designs, and trademarks. Counterfeiting or imitation is punishable under Indian law.
                        Legal action will be taken against violators.
                    </p>
                </div>
            </section>
            <FindNearestStoreButton />
            <RoseStreetButton />
            <Footer />
        </div>
    );
};

export default AuthenticatePage;
