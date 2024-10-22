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
import {HiOutlineMail} from 'react-icons/hi';
import {ImWhatsapp} from 'react-icons/im';
import React , {useRef} from 'react';
import emailjs from 'emailjs-com';

export default function Home() {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_z4z48m4', 'template_hmji9he', form.current, 'user_v9UM2vFmhNbgJlPLH');
  
      e.target.reset();
    };

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
    <div className='bg-slate-600 '>
        <div className='mx-auto'>
            <h5 className='text-sky-100 text-center '>Get In Touch</h5>
            <h1 className='text-white text-3xl font-bold text-center mx-auto'>Contact Us</h1>
        </div>
        <div className=" flex justify-around my-5 items-start ">
            <div className="flex flex-col gap-5 my-3 ">
                <article className='bg-blue-950 p-5 rounded-xl text-center border-2 border-blue-950 mx-auto transition hover:bg-transparent hover:border-primary-variant'>
                    <HiOutlineMail className='text-[1.5rem] mb-2 mx-auto text-white'/>
                    <h4 className='font-semibold text-white'>Email</h4>
                    <h5 className='text-white'>info@albaniahomes.uk</h5>
                    <a href="mailto:info@albaniahomes.uk" target="_blank" className='mt-3 inline-block text-[0.8rem] text-blue-400 font-semibold'>Send Email</a>
                </article>
                
                <article className='bg-blue-950 px-9 py-5 rounded-xl text-center border-2 border-blue-950 transition hover:bg-transparent hover:border-primary-variant mx-auto'>
                    <ImWhatsapp className='text-[1.5rem] mb-2 mx-auto text-white'/>
                    <h4 className='text-white font-semibold'>WhatsApp</h4>
                    <h5 className='text-white'>+447786921525</h5>
                    <a href="https://api.whatsapp.com/send?phone=447786921525&text=Hi AlbaniaHomes! " target="_blank" className='mt-3 inline-block text-[0.8rem] font-bold text-blue-500'>Send Message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 w-[50%] '>
                <input type="text" name='name' placeholder='Your Full Name' required className='w-full p-6 rounded-md bg-transparent border-2 border-primary-variant text-white resize-none mx-auto' />
                <input type="email" name='email' placeholder='Your Email' required className='w-full p-6 rounded-md bg-transparent border-2 border-primary-variant text-white resize-none' />
                <textarea name="message" rows="7" placeholder='Your Message' required className='w-full p-6 rounded-md bg-transparent border-2 border-primary-variant text-white resize-none'></textarea>
                <button type='submit' className='bg-white text-blue-950 font-semibold  rounded-md p-3 mx-auto items-center mb-3'>Send Message</button>
            </form>
      </div>
    </div>
    </div>
  );
};
