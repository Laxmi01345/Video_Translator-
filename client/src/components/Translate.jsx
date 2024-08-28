import  { useState, useRef } from 'react';
import video_img from '../images/video_img.png'; // Ensure this path is correct
import shortid from 'shortid'
import axios from 'axios';

const Translate = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uniqueId, setUniqueId] = useState(''); 


  // Ref to reference the hidden file input
  const inputRef = useRef(null);

  // Function to handle div click and trigger file input
  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.click(); // Programmatically click the hidden file input
    }
  };

  // Function to handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]); // Store the selected file in state
    }
  };

  // Function to handle form submission
  const handleSubmit = async () => {

    const formData = new FormData();
    const newUniqueId = shortid.generate(); 
    setUniqueId(newUniqueId);
    formData.append('videofile', selectedFile);
    
  
    if (selectedFile) {
      try {
       
        const res = await axios.post('http://localhost:3000/video', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          params: {
            uniqueId // Send uniqueId as query parameter
          }
        });
        
      } catch (error) {
        console.error('An error occurred:', error);
      }
    
    }
  };

  return (
    <div className='text-center container bg-gradient-to-r from-[#f7abab] via-[#facbf1] to-[#ffd2d2]'>
      <h1 className='text-xl p-4 font-bold'>A Transforming Model for Language Translator</h1>
      
      {/* Clickable div that triggers the file input */}
      <div
        className='border-4 border-black mx-80 mt-10 p-4 cursor-pointer bg-gray-100'
        onClick={handleDivClick}
      >
        <img src={video_img} alt="Video" className='mx-auto' />
        
        {/* Hidden file input */}
        <input
          ref={inputRef} // Attach the ref to the input element
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }} // Hide the input element
        />
        
        <p className='font-bold'>Click to upload Video</p>
      </div>

      <div className='grid grid-cols-2 mx-80 p-2'>
        <div>
        <p className='p-2 font-semibold'>Original Video Language</p>
        <select name="Select Language" placeholder="Select Language" className='w-80'  id="">
        <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Bengoli">Bengoli</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Marathi">Marathi</option>
        </select>
        </div>
        <div>
          <p className='p-2 font-semibold'>Target Language</p>
          <select name="" id="" className='w-80' >
          <option value="Hindi">Hindi</option>
          <option value="Bengoli">Bengoli</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Marathi">Marathi</option>
        </select>
        </div>
      </div>
      
      {selectedFile && (
        <div className='mt-8'>
          <h2 className='text-xl font-bold'>Selected File:</h2>
          <p>Name: {selectedFile.name}</p>
          <p>Size: {selectedFile.size} bytes</p>
          <p>Type: {selectedFile.type}</p>
          {/* You can add more file details or a preview here */}
        </div>
      )}

      

      <div className='mt-10'>
        <button
          type="button"
          className='border-2 border-black bg-red-500 p-2 text-xl text-white font-semibold'
          onClick={handleSubmit} // Attach the submit handler
        >
          Translate
        </button>
      </div>
    </div>
  );
};

export default Translate;
