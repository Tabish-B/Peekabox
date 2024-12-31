import React from "react";
import Link from "next/link";

const BusinessPage = () => {
  return (
    <div className="bg-gray-100 p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-primary">Business Services</h1>
        <p className="text-xl mt-4 text-gray-700">
          Join Peekabox and help reduce food waste by offering your surplus food to customers at a discounted price.
        </p>
      </div>

      {/* How It Works Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">How It Works</h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start space-x-3">
              <span className="text-3xl text-primary font-semibold">1.</span>
              <div>
                <h3 className="text-xl font-semibold">Sign Up</h3>
                <p>Create a profile for your business and get started quickly.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-3xl text-primary font-semibold">2.</span>
              <div>
                <h3 className="text-xl font-semibold">List Your Leftover Food</h3>
                <p>Post your unsold or surplus food items to sell them at a discount.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-3xl text-primary font-semibold">3.</span>
              <div>
                <h3 className="text-xl font-semibold">Connect with Consumers</h3>
                <p>Customers browse and purchase your food at discounted prices.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-3xl text-primary font-semibold">4.</span>
              <div>
                <h3 className="text-xl font-semibold">Reduce Waste</h3>
                <p>By offering your surplus food, you’re helping to reduce food waste and support sustainability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">Benefits for Your Business</h2>
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-start space-x-3">
              <span className="text-3xl text-primary font-semibold">✅</span>
              <div>
                <h3 className="text-xl font-semibold">Save Money</h3>
                <p>Reduce food waste by selling unsold food instead of throwing it away.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-3xl text-primary font-semibold">✅</span>
              <div>
                <h3 className="text-xl font-semibold">Attract New Customers</h3>
                <p>Gain visibility among eco-conscious consumers looking for affordable meals.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-3xl text-primary font-semibold">✅</span>
              <div>
                <h3 className="text-xl font-semibold">Promote Sustainability</h3>
                <p>Show your commitment to reducing food waste and supporting local communities.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-primary">Ready to Join Us?</h2>
        <p className="mt-4 text-lg text-gray-700">
          Sign up today and start offering your surplus food to customers in your area.
        </p>
        <Link
          href="/signup"
          className="mt-6 inline-block bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-secondary transition-all duration-300"
        >
          Get Started
        </Link>
      </div>

      {/* Testimonials Section*/}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-primary text-center mb-6">What Businesses Say</h2>
        <div className="flex flex-wrap justify-center">
          {/* testamonials*/}
          <div className="bg-gray-100 p-6 rounded-lg max-w-xs m-4 shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              &quot;Peekabox has helped us reduce food waste significantly and attract new customers. It&apos;s a win-win! &quot;
            </p>
            <p className="font-semibold text-gray-900">John D.</p>
            <p className="text-sm text-gray-500">Owner, Local Restaurant</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700">
          Have questions? <span className="text-primary">Contact us</span> today to learn more about how we can help your business.
        </p>
      </div>
    </div>
  );
};

export default BusinessPage;