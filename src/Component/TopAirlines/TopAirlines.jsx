import React from "react";

const airlines = [
  { name: "Biman Bangladesh Airlines", logo: "https://i.ibb.co/pjgF05XF/668e566f847a2841c9ada814.png" },
  { name: "US-Bangla Airlines", logo: "https://i.ibb.co/7NbGSJgF/669690c41c244cd0873e5e8d.png" },
  { name: "NOVOAIR", logo: "https://i.ibb.co/PZg99Xss/669e58eb74ab2dd97b14a573.png" },
  { name: "Air Astra", logo: "https://i.ibb.co/x8GM1Ytj/6106716434a7e50004330e5b.png" },
  { name: "Emirates", logo: "https://i.ibb.co/r2JSW4n5/585e9da1cb11b227491c34fa.png" },
  { name: "Singapore Airlines", logo: "https://i.ibb.co/V0N2DXqR/587b518244060909aa603a8b.png" },
  { name: "Turkish Airlines", logo: "https://i.ibb.co/RkBCxT8D/idt-CWa-RO3d-1751405179590.png" },
  { name: "Qatar Airways", logo: "https://i.ibb.co/nNdMYqnS/585e9e12cb11b227491c34fd.png" },
  { name: "Malaysia Airlines", logo: "https://i.ibb.co/wVvMcVw/587b51ad44060909aa603a8f.png" },
  { name: "Vistara", logo: "https://i.ibb.co/JRvHG8qz/668e6c5d847a2841c9ada87f.png" },
  { name: "Etihad Airways", logo: "https://i.ibb.co/Q75GQGg8/5847f199cef1014c0b5e485b.png" },
  { name: "Cathay Pacific Airways", logo: "https://i.ibb.co/35Ht2fM5/668e57d0847a2841c9ada81d.png" },
  { name: "Himalaya Airlines", logo: "https://i.ibb.co/fG05B0Fb/66a2773925d9e5816ff4279e.png" },
  { name: "Thai Lion Air", logo: "https://i.ibb.co/kg4V4dBQ/66994ea26d1af6e4ad0a91f7.png" },
  { name: "Saudia Airlines", logo: "https://i.ibb.co/WQPshBx/668e68ec847a2841c9ada864.png" },
  { name: "Batik Air", logo: "https://i.ibb.co/bgLJ1QDt/6696c22ef3ff3c421cbcb0af.png" },
  { name: "British Airways", logo: "https://i.ibb.co/d40MQrmm/668e5752847a2841c9ada819.png" },
  { name: "Jetstar Pacific", logo: "https://i.ibb.co/76Pwgfs/6102f59b7bcc7d000476ae41.png" },
  { name: "Maldivian", logo: "https://i.ibb.co/wNLsmGd0/idbs-YCZ9w-P-1751404675489.png" },
];


const TopAirlines = () => {
  return (
    <div className="py-12 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Search Top Airlines</h2>
        <p className="text-gray-600 mb-8">
          TourTide is your ultimate travel companion that connects you instantly with top-rated airlines, hotels, and tour packages. Designed with a clean, user-friendly interface, TourTide ensures a smooth, hassle-free booking experience for travelers of all types. Whether you're planning a quick getaway or a long international trip, TourTide makes travel planning easier, faster, and more enjoyable — all in one place.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {airlines.map((airline, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-white shadow rounded-lg hover:shadow-md transition"
            >
              <img
                src={airline.logo}
                alt={airline.name}
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm font-medium text-gray-700">{airline.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAirlines;
