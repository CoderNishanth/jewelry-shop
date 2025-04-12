import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';

const ProductDetails = ({ wishlist, onAddToWishlist }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const isInWishlist = wishlist.some(item => item._id === product._id);

  const handleWishlist = () => {
    if (isInWishlist) {
      onAddToWishlist(product, 'remove');
    } else {
      onAddToWishlist(product, 'add');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover object-center"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-6">${product.price}</p>
          
          <div className="space-y-4 mb-8">
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-600">Category: {product.category}</p>
          </div>

          <div className="flex space-x-4">
            {!isInWishlist && (
              <button
                className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
            )}
            <button
              onClick={handleWishlist}
              className="flex-1 bg-yellow-400 text-gray-800 px-4 py-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              {isInWishlist ? (
                <>
                  <SolidHeartIcon className="h-5 w-5 mr-1 text-red-600" />
                  Remove from Wishlist
                </>
              ) : (
                <>
                  <HeartIcon className="h-5 w-5 mr-1" />
                  Add to Wishlist
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
