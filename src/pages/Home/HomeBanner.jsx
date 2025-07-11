// TourBanner.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router';

const HomePageBanner = () => {
  const banners = [
    {
      image: 'https://i.ibb.co/N6hYR13P/pexels-sampreety-ali-213915-695794.jpg',
      title: 'Discover Bandarban',
      subtitle: 'Explore the hills and serenity of nature',
    },
    {
      image: 'https://i.ibb.co/S75BtxKs/pexels-rezwan-nobi-741721-1633318.jpg',
      title: 'Tea Gardens of Sylhet',
      subtitle: 'Witness the beauty of endless greenery',
    },
    {
      image: 'https://i.ibb.co/wNfCJmB0/pexels-rony-storyteller-499458095-30923523.jpg',
      title: 'Saint Martin’s Paradise',
      subtitle: 'Sun, sea, and tranquility await you',
    },
    {
      image: 'https://i.ibb.co/Z6zFTcP9/pexels-maksudur-rahman-138931853-13584828.jpg',
      title: 'Cox Bazar Paradise',
      subtitle: 'Sun, sea, and tranquility await you',
    },
    {
      image: 'https://i.ibb.co/SD1FMq28/pexels-rushow-122107.jpg',
      title: 'Cox Bazar Paradise',
      subtitle: 'Sun, sea, and tranquility await you',
    },
    {
      image: 'https://i.ibb.co/Hf21bb32/mainul-islam-zz-GGb-HIc-WMU-unsplash.jpg',
      title: 'Srimangal Tea Trail',
      subtitle: 'Tea estate tour, Lawachara rainforest, and 7-layer tea experience.',
    },
    {
      image: 'https://i.ibb.co/PvHQ4WQr/simon-reza-o-C36ujwf-SDY-unsplash.jpg',
      title: 'Rangamati Lake Journey',
      subtitle: 'Kaptai lake cruise, tribal crafts, hanging bridge visit',
    },
    
  ];

  


  return (
    <div className="w-full h-[60vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center flex items-end justify-start text-yellow-400 text-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="p-8 rounded-xl">
                <h2 className="text-4xl font-bold mb-2">{banner.title}</h2>
                <p className="text-xl">{banner.subtitle}</p>
                <Link to='/all-packages' className='btn btn-soft bg-[#FF204E] hover:bg-[#00224D] hover:text-white mt-4'>Explore All Packages</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageBanner;
