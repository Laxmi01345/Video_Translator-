import React from 'react';

const Languages = () => {
  return (
    <div className='mx-8 bg-white'>
      <h1 className='text-center p-4 font-bold text-3xl text-blue-600'>Supported Languages</h1>
      
      <div className='grid grid-cols-3 m-2 p-4 justify-center text-center gap-4'>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            Hindi - <span className='rounded-md bg-gray-200 px-2 text-black'>हिन्दी</span>
          </h1>
        </div>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            Marathi - <span className='rounded-md bg-gray-200 px-2 text-black'>मराठी</span>
          </h1>
        </div>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            Bengali - <span className='rounded-md bg-gray-200 px-2 text-black'>বাংলা</span>
          </h1>
        </div>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            Tamil - <span className='rounded-md bg-gray-200 px-2 text-black'>தமிழ்</span>
          </h1>
        </div>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            Telugu - <span className='rounded-md bg-gray-200 px-2 text-black'>తెలుగు</span>
          </h1>
        </div>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-pink-400 via-red-500 to-orange-600 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            Kannada - <span className='rounded-md bg-gray-200 px-2 text-black'>ಕನ್ನಡ</span>
          </h1>
        </div>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            Gujarati - <span className='rounded-md bg-gray-200 px-2 text-black'>ગુજરાતી</span>
          </h1>
        </div>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            Punjabi - <span className='rounded-md bg-gray-200 px-2 text-black'>ਪੰਜਾਬੀ</span>
          </h1>
        </div>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            Malayalam - <span className='rounded-md bg-gray-200 px-2 text-black'>മലയാളം</span>
          </h1>
        </div>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            Odia - <span className='rounded-md bg-gray-200 px-2 text-black'>ଓଡ଼ିଆ</span>
          </h1>
        </div>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            Urdu - <span className='rounded-md bg-gray-200 px-2 text-black'>اُردُو</span>
          </h1>
        </div>
        <div className='transition-transform transform hover:scale-105 hover:shadow-lg hover:brightness-110 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-lg'>
          <h1 className='border-2 border-black rounded-md p-4 text-white font-semibold'>
            English
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Languages;
