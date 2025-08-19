import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import oldlogoImg from "../../public/oldlogo.png"; // Use your actual path

// Define the Store type
type Store = {
    id: number;
    name: string;
    lat: number;
    lng: number;
    directionsLink: string;
};

// ✅ You already filled coords correctly
const stores: Store[] = [
    { id: 1, name: "Own 1", lat: 17.0034319, lng: 81.7706223, directionsLink: "https://maps.app.goo.gl/38NiP68XLPfTF6hbA" },
    { id: 2, name: "Own 2", lat: 17.002361, lng: 81.770949, directionsLink: "https://maps.app.goo.gl/hemRu3Pn31WX3Dyg9" },
    { id: 3, name: "Own 3", lat: 17.004339, lng: 81.770399, directionsLink: "https://maps.app.goo.gl/HcXd2iNx6nF8Y3RGA" },
    { id: 4, name: "Franchise Tirupati", lat: 13.6364452, lng: 79.4152985, directionsLink: "https://maps.app.goo.gl/Mkm1W4PEi3XY1qz47" },
    { id: 5, name: "Franchise Vijayawada", lat: 16.5103651, lng: 80.6270324, directionsLink: "https://maps.app.goo.gl/okn437L7oXVGuhcu7" },
    { id: 6, name: "Franchise Hyderabad (DLF)", lat: 17.448809, lng: 78.3563721, directionsLink: "https://maps.app.goo.gl/7EpB6K3vNvDwPeQA6" },
    { id: 7, name: "Franchise Kakinada", lat: 16.9575648, lng: 82.2302822, directionsLink: "https://maps.app.goo.gl/3XydxMPTB8nzEjhs5" },
    { id: 8, name: "Franchise Hyderabad (Kukatpally)", lat: 17.4894184, lng: 78.3268036, directionsLink: "https://maps.app.goo.gl/wNGK98EpAq4jddfm8" },
    { id: 9, name: "Franchise Vijayawada (Gandhinagar)", lat: 16.5176099, lng: 80.6278849, directionsLink: "https://maps.app.goo.gl/yc8n67cDBRWDQdN58" },
    { id: 10, name: "Franchise Bhimavaram", lat: 16.5431745, lng: 81.3737347, directionsLink: "https://maps.app.goo.gl/3ufVHEzLs2Pp3tFH7" },
    { id: 11, name: "Franchise Annavaram", lat: 17.2821239, lng: 82.4053274, directionsLink: "https://maps.app.goo.gl/TTkABajJ976EQWPG7" },
];

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

const FindNearestStoreButton = () => {
    const [open, setOpen] = useState(false);

    const handleFindNearest = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                let nearest = stores[0];
                let minDist = getDistance(latitude, longitude, nearest.lat, nearest.lng);

                for (const store of stores) {
                    const dist = getDistance(latitude, longitude, store.lat, store.lng);
                    if (dist < minDist) {
                        nearest = store;
                        minDist = dist;
                    }
                }

                window.open(nearest.directionsLink, "_blank");
            },
            () => {
                alert("Unable to fetch your location.");
            }
        );
    };

    return (
        <div className="fixed bottom-8 left-8 z-50">
            {/* Closed (circle button with pin) */}
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="w-12 h-12 flex transition-all duration-500"
                >
                    <img
                        src={oldlogoImg}
                        alt="Rose Street Logo"
                        className="w-12 h-12 object-contain"
                    />
                </button>
            )}

            {/* Expanded card */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="bg-cream rounded-2xl border-2 border-gold/30 shadow-2xl py-5 px-6 flex flex-col items-center relative"
                >
                    <div className="flex flex-col gap-3 text-center">
                        {/* Logo */}
                        <motion.div
                            initial={{ scale: 0.2, opacity: 0, y: 8 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
                            className="flex-shrink-0"
                        >
                            <img
                                src={oldlogoImg}
                                alt="Rose Street Logo"
                                className="w-48 h-48 object-cover rounded-xl"
                            />
                        </motion.div>
                        <h3 className="text-lg font-bold text-dark font-serif">
                            Find Nearest Store
                        </h3>
                        <button
                            onClick={handleFindNearest}
                            className="inline-flex items-center bg-rose-500 text-cream px-5 py-2 rounded-full text-sm font-bold hover:bg-dark transition-all duration-300 border border-gold/50"
                        >
                            Get Directions
                            <Navigation className="ml-2 h-4 w-4" />
                        </button>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-2 right-2 text-dark/60 hover:text-dark"
                    >
                        ✕
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default FindNearestStoreButton;
