import { Navigation } from "lucide-react";
import { handleFindNearest } from "./FindNearestStoreButton";

const FindNearestStoreCardButton = () => {
  return (
    <button
      onClick={handleFindNearest}
      className="flex items-center justify-center px-4 py-3 bg-rose-500 text-white rounded-lg 
                 hover:bg-rose-600 transition-colors font-bold shadow-lg hover:shadow-xl 
                 transform hover:scale-105 font-serif my-2"
    >
      <Navigation className="h-5 w-5 mr-2" />
      Find Nearest Store
    </button>
  );
};

export default FindNearestStoreCardButton;
