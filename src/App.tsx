import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AuthenticatePage from './pages/AuthenticatePage';
import StoryPage from './pages/StoryPage';
import LeadershipPage from './pages/LeadershipPage';
import FranchiseEnquiryPage from './pages/FranchiseEnquiryPage';
import GalleryPage from './pages/GalleryPage';
import AwardsPage from './pages/AwardsPage';
import ScrollToTop from './components/ScrollToTop'; // Add this import

function App() {
  return (
    <>
      <ScrollToTop /> {/* Add this line */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/authenticate" element={<AuthenticatePage />} />
        <Route path="/about/story" element={<StoryPage />} />
        <Route path="/about/leadership" element={<LeadershipPage />} />
        <Route path="/franchise" element={<FranchiseEnquiryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/awards" element={<AwardsPage />} />
      </Routes>
    </>
  );
}

export default App;