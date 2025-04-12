import React from 'react';
import InquiryForm from '../components/InquiryForm';

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your Wishlist</h2>
        
        {wishlist.length === 0 ? (
          <div className="mt-6 text-center">
            <p className="text-gray-500">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="mt-6">
            <div className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200">
                {wishlist.map((product) => (
                  <li key={product._id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{product.name}</h3>
                          <p className="ml-4">${product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <button
                          type="button"
                          onClick={() => removeFromWishlist(product._id)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {wishlist.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-medium text-gray-900">Inquire About Your Wishlist</h3>
            <div className="mt-6">
              <InquiryForm wishlist={wishlist} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
