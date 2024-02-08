// ContentSection.js

import React from 'react';
import Listing from './Listing';

const ContentSection = () => {
  // Dummy data for listings (replace with actual data)
  const listings = [
    {
        id: 1,
        title: "Handcrafted Ceramic Mug",
        description: "Beautiful handmade ceramic mug for your morning coffee.",
        price: "$20",
        imageUrl: "https://via.placeholder.com/300x200?text=Product+1",
      },
      {
        id: 2,
        title: "Botanical Watercolor Print",
        description: "Original botanical watercolor print for your home decor.",
        price: "$30",
        imageUrl: "https://via.placeholder.com/300x200?text=Product+2",
      },
      {
        id: 3,
        title: "Vintage Leather Wallet",
        description: "Handmade vintage leather wallet with multiple compartments.",
        price: "$50",
        imageUrl: "https://via.placeholder.com/300x200?text=Product+3",
      },
      {
        id: 1,
        title: "Handcrafted Ceramic Mug",
        description: "Beautiful handmade ceramic mug for your morning coffee.",
        price: "$20",
        imageUrl: "https://via.placeholder.com/300x200?text=Product+1",
      },
      {
        id: 2,
        title: "Botanical Watercolor Print",
        description: "Original botanical watercolor print for your home decor.",
        price: "$30",
        imageUrl: "https://via.placeholder.com/300x200?text=Product+2",
      },
      {
        id: 3,
        title: "Vintage Leather Wallet",
        description: "Handmade vintage leather wallet with multiple compartments.",
        price: "$50",
        imageUrl: "https://via.placeholder.com/300x200?text=Product+3",
      },
      // Add more hardcoded listings here...
      {
        id: 15,
        title: "Scented Candle Set",
        description: "Set of scented candles in different fragrances.",
        price: "$25",
        imageUrl: "https://via.placeholder.com/300x200?text=Product+15",
      },
    // Add more listings here...
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {listings.map((listing) => (
          <Listing
            key={listing.id}
            id={listing.id}
            title={listing.title}
            description={listing.description}
            price={listing.price}
            imageUrl={listing.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};


export default ContentSection;
