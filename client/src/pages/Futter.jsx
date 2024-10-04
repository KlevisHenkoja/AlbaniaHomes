import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {ImWhatsapp} from 'react-icons/im';
import {useRef} from 'react';
import emailjs from 'emailjs-com';

export default function Futter() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_y814xbr', 'template_dwr48ln', form.current, 'v9UM2vFmhNbgJlPLH');
  
      e.target.reset();
    };


  return (
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
                    <h5 className='text-white'>klevishn@gmail.com</h5>
                    <a href="mailto:klevishn@gmail.com" target="_blank" className='mt-3 inline-block text-[0.8rem] text-blue-400 font-semibold'>Send Email</a>
                </article>
                
                <article className='bg-blue-950 px-9 py-5 rounded-xl text-center border-2 border-blue-950 transition hover:bg-transparent hover:border-primary-variant mx-auto'>
                    <ImWhatsapp className='text-[1.5rem] mb-2 mx-auto text-white'/>
                    <h4 className='text-white font-semibold'>WhatsApp</h4>
                    <h5 className='text-white'>+355683302209</h5>
                    <a href="https://api.whatsapp.com/send?phone=355683302209&text=Hi AlbaniaHomes! " target="_blank" className='mt-3 inline-block text-[0.8rem] font-bold text-blue-500'>Send Message</a>
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
  )
}
