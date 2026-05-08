import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-left'>
      <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
      <p>As you shop, we want you to feel confident in every choice you make. Adding something to your cart is just the beginning of something great, and we’re here to make sure the entire journey feels smooth and rewarding. From carefully packed orders to reliable delivery, we handle every step with attention so your purchase arrives just the way you expect.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Our mission is to create a shopping experience that feels effortless, reliable, and genuinely enjoyable. We aim to bring you products that combine quality, value, and thoughtful design, so every purchase feels like the right choice. By focusing on trust, transparency, and attention to detail, we strive to make sure you always know what you’re getting—and feel good about it.</p>
      </div>
    </div>

    <div className='text-xl py-4 text-left'>
      <Title text1={'WHY'} text2={'CHOOSE US?'}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b >Quality Assurance:</b>
        <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b >Convenience:</b>
        <p className='text-gray-600'>We make shopping easy and accessible, with a seamless experience from browsing to checkout.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b >Exceptional Customer Service:</b>
        <p className='text-gray-600'>We are committed to providing outstanding customer support and ensuring your satisfaction with every interaction.</p>
      </div>
    </div>
 
     <NewsLetterBox/>
    
    </div>
  )
}

export default About