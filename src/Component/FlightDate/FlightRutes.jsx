import React, { useState } from 'react';
import { Plane } from 'lucide-react';

const FlightRoutes = () => {
  const flightData = {
    Domestic: [
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal International', to: "Cox's Bazar", toAirport: "Cox's Bazar Airport" },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal International', to: 'Jashore', toAirport: 'Jashore Airport' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal International', to: 'Chattogram', toAirport: 'Shah Amanat International' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal International', to: 'Sylhet', toAirport: 'Osmani International' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal International', to: 'Barisal', toAirport: 'Barisal Airport' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal International', to: 'Saidpur', toAirport: 'Saidpur Airport' },
    ],
    International: [
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal International', to: 'Kolkata', toAirport: 'Netaji Subhas Airport' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal International', to: 'Dubai', toAirport: 'Dubai International Airport' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal International', to: 'Kuala Lumpur', toAirport: 'KLIA' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal International', to: 'Bangkok', toAirport: 'Suvarnabhumi Airport' }
    ]
  };

  const [activeTab, setActiveTab] = useState('Domestic');

  return (
    <div className="px-4 sm:px-6 py-10 sm:py-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Explore Flight Routes</h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        Discover the best domestic and international flight routes, all in one place.
      </p>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
        {['Domestic', 'International'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 sm:px-6 py-2 rounded font-medium transition-all duration-200 text-sm sm:text-base
              ${activeTab === tab ? 'bg-[#FF204E] text-white' : 'bg-gray-100 text-gray-700 hover:bg-[#FF204E]/10'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {flightData[activeTab].map((route, index) => (
          <div
            key={index}
            className="border border-gray-200 hover:outline hover:outline-[#FF204E] hover:shadow-xl p-4 rounded-xl bg-white text-left transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg">{route.from}</h3>
                <p className="text-gray-500 text-sm">{route.fromAirport}</p>
              </div>
              <Plane className="text-[#FF204E] sm:mx-2" size={20} />
              <div>
                <h3 className="font-semibold text-lg">{route.to}</h3>
                <p className="text-gray-500 text-sm">{route.toAirport}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightRoutes;
