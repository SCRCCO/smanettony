// Listing.js

import React from 'react';

const Listing = ({ id, title, description, price, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex p-4">
      <div className="flex-shrink-0 mr-4">
        <img className="w-32 h-32 object-cover" src={imageUrl} alt={title} />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <p className="text-lg font-semibold text-gray-800">{price}</p>
      </div>
    </div>
  );
};

export default Listing;
