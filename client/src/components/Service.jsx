import React from 'react';

const Service = () => {
  const paragraphs = [
    "India, with its rich cultural diversity and 22 official languages, presents a unique challenge in education.",
    "Breaking Down Barriers: We're bridging the gap with accurate, culturally relevant video translation in Indian languages. Our platform ensures every student has access to quality education, regardless of language or location.",
    "Empowering Students: By breaking down language barriers, we're unlocking the full potential of India's students, providing equal opportunities for all to learn and grow."
  ];

  const features = [
    "Video Translation with Captions: Seamlessly translate your video content into multiple languages, with accurate and synchronized captions for clear understanding.",
    "Audio Translation with Human Voice: Experience natural and fluent audio translation, delivered by human-like voice synthesis to maintain authenticity and engagement.",
    "Accurate Lip Sync: Enjoy perfectly synchronized lip movements with translated audio, ensuring your videos retain their original impact and professional quality."
  ];

  return (
    <div className='p-8 bg-gradient-to-r  from-[#f7abab] via-[#facbf1] to-[#ffd2d2]'>
      <h1 className='text-center p-4 font-bold text-4xl text-blue-600'>Our Service</h1>
      <div className="mx-8 md:mx-20 bg-white shadow-lg rounded-lg p-6">
        {paragraphs.map((text, index) => (
          <p key={index} className='text-lg text-black mb-4'>
            {text}
          </p>
        ))}
        <h2 className='text-2xl font-semibold text-blue-900 mt-6'>
          Our Comprehensive Video Translation Services Include:
        </h2>
        <ul className='list-disc pl-6 text-black  mt-4'>
          {features.map((feature, index) => (
            <li key={index} className='mb-2'>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Service;
