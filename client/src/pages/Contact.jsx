import React from 'react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            Have questions about our jewelry collection? We'd love to hear from you.
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <div className="border-t border-gray-200 pt-8">
              <InquiryForm wishlist={[]} />
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">Store Location</h3>
              <div className="mt-4 space-y-4 text-sm text-gray-600">
                <p>123 Jewelry Lane</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
              </div>

              <h3 className="mt-8 text-lg font-medium text-gray-900">Business Hours</h3>
              <div className="mt-4 space-y-4 text-sm text-gray-600">
                <p>Monday - Friday: 9am - 7pm</p>
                <p>Saturday: 10am - 6pm</p>
                <p>Sunday: Closed</p>
              </div>

              <h3 className="mt-8 text-lg font-medium text-gray-900">Contact Information</h3>
              <div className="mt-4 space-y-4 text-sm text-gray-600">
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@jewelryshop.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
