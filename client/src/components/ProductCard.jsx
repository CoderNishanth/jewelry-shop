import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';

const ProductCard = ({ product, onAddToWishlist, wishlist = [] }) => {
  const isInWishlist = wishlist.some(item => item._id === product._id);

  const handleWishlist = () => {
    if (isInWishlist) {
      onAddToWishlist(product, 'remove');
    } else {
      onAddToWishlist(product, 'add');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/products/${product._id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">
          <Link to={`/products/${product._id}`} className="hover:text-indigo-600">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-gray-500">${product.price}</p>
        <p className="mt-2 text-sm text-gray-600">{product.category}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handleWishlist}
            className="flex items-center text-gray-600 hover:text-indigo-600 focus:outline-none"
          >
            {isInWishlist ? (
              <SolidHeartIcon className="h-5 w-5 mr-1 text-red-600" />
            ) : (
              <HeartIcon className="h-5 w-5 mr-1" />
            )}
            {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
