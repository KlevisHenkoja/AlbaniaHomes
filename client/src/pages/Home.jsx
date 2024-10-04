import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import berat from '../assets/berat.jpg';
import tirana from '../assets/tirana2.jpg';
import vlora from '../assets/vlora.jpg';
import tirana2 from '../assets/tirana.jpg';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-blue-950 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-blue-900'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-600 text-xs sm:text-sm'>
          AlbaniaHomes is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className='py-20 px-4 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-blue-950 text-center'>Our Expertise</h1>
        <div className='flex flex-col md:flex-row md:max-w-sm: gap-7 items-center justify-center'>
          <p className='mb-2 text-blue-900 font-semibold w-72'>
          With over two decades of experience, our dedicated team of professionals and local partners provide comprehensive services, including buying, renting, property management, finance, and legal advice. We pride ourselves on delivering honest, reliable support throughout the entire property transaction process. Our deep market knowledge and long-standing relationships with developers, architects, and legal advisors ensure that we provide the best solutions for our clients needs.
          </p>
          <img src={berat} alt="tirana" className='rounded-lg w-[50%] sm:w-80'/>
        </div>    
    </div>
    <div className='py-20 px-4 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-blue-950 text-center'>Our Commitment</h1>
        <div className='flex flex-col md:flex-row md:max-w-sm: gap-7 items-center justify-center'>
          <img src={tirana} alt="tirana" className='rounded-lg max-w-80'/>
          <p className='mb-2 text-blue-900 font-semibold w-72'>
          Our goal is to exceed customer expectations by providing first-class service, from consulting and financing to furnishing and reselling properties.
          We offer free property tours, airport pickup, and discounted accommodation and car rentals for our clients. We ensure that all properties marketed have clean title deeds and conduct thorough due diligence to protect our clients investments.
          </p>
        </div>    
    </div>
    <div className='py-20 px-4 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-blue-950 text-center'>Our Services</h1>
        <div className='flex flex-col md:flex-row md:max-w-sm: gap-7 items-center justify-center'>
          <div className='mb-2 text-blue-900 font-semibold w-72'>
            <p>•	Collaboration with reputable developers: Long-term partnerships with trusted developers ensure access to the best properties and investment opportunities.</p>
            <p>•	High-quality furniture packages: Complete furniture setups for apartments and houses at competitive prices, including delivery and installation.</p>
            <p>•	Legal and financial advice: We provide access to independent legal advisors and assist with securing financing options through our banking partners.</p>
          </div>
          
          <img src={vlora} alt="tirana" className='rounded-lg max-w-80'/>
        </div>    
    </div>
    <div className='py-20 px-4 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-blue-950 text-center'>Why Choose Us</h1>
        <div className='flex flex-col md:flex-row md:max-w-sm: gap-7 items-center justify-center'>
          <p className='mb-2 text-blue-900 font-semibold w-72'>As the most experienced real estate agency in Albania, we are trusted by clients for our deep market knowledge, extensive network, and commitment to customer satisfaction. Our team is equipped to handle all aspects of real estate transactions, from initial consultation to finalizing the purchase or lease. Contact us today to turn your real estate aspirations into reality.</p>
          <img src={tirana2} alt="tirana" className='rounded-lg'/>
        </div>    
    </div>
    </div>
  );
};