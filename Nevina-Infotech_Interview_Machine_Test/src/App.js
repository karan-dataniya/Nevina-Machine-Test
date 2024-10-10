import React, { useState } from 'react';
import './index.css'; 
import './App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faSettings, faCog, faTimes, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import yourImage from './assets/kesariya.jpg';
function App() {
  const [isOpen, setIsOpen] = useState(true); 

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="max-w-md p-4 bg-white rounded-3xl	 shadow-md relative">
            
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 scroll-ms-6 hover:text-gray-900"
            >
              
              
              
              <FontAwesomeIcon icon={faShare} className="ml-2" />  {/* Share Icon */}
              
   <FontAwesomeIcon icon={faEdit} className="ml-2" />  {/* Edit Icon */}
  <FontAwesomeIcon icon={faTrash} className="ml-2" />  {/* Delete Icon */}
  <FontAwesomeIcon icon={faCog} className="ml-2" /> 
  <FontAwesomeIcon icon={faTimes} className="ml-2" />
            </button>

           
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round" 
                    d="M8 7V3m8 4V3m-6 18h6a2 2 0 002-2v-8a2 2 0 00-2-2h-6a2 2 0 00-2 2v8a2 2 0 002 2zm0-10h6m-6 0h6"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold">15 November</p>
                <p className="text-gray-600">10:00 - 11:00 AM</p>
              </div>
            </div>

            {/* Title */}
            <h2 className="mt-4 text-xl font-bold">Upcoming song for morning prayers</h2>

            {/* Description */}
            <p className="mt-2 text-gray-500 text-sm">
              Lorem Ipsum Dolor Sit Amet Consectetur. Ultrices Consectetur Est
              Orci Elementum Commodo Velit Nec At Egestas.
            </p>

            {/* Time remaining */}
            <p className="mt-4 text-sm text-gray-700">
              To be played in <span className="text-green-500">(15 min)</span>
            </p>

            {/* Playlist */}
            <div className="mt-4">
              <h3 className="font-semibold">Playlist</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg">
                  <img
                    src="./assets/kesariya.jpg"
                    alt="Song Thumbnail"
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <p className="font-semibold">Kesariya</p>
                    <p className="text-sm text-gray-600">
                      Pritam chakraborty - Kesariya (from "Brahmastra")
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg">
                  <img
                    src="kesariya.jpg"
                    alt="Song Thumbnail"
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <p className="font-semibold">Kesariya</p>
                    <p className="text-sm text-gray-600">
                      Pritam chakraborty - Kesariya (from "Brahmastra")
                    </p>
                  </div>
                </div>
              </div>
            </div>

           
            <button className="mt-4 text-orange-600 hover:underline">
              Show More
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;