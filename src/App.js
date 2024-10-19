// CalendarApp.js


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faSettings, faCog, faTimes, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import yourImage from './assets/kesariya.jpg';
import {
  faChevronLeft,
  faChevronRight,
  faHome,
  faUser,
  faBook,
  faFolder,
  faMusic,
  faTags,
  faCalendarAlt,
  faGlobe,
  faUsers,
  faTrophy,
  faCalendarCheck,
  faSearch,
  faSmile,
  faHeart,
  faCompactDisc,
  faChevronDown,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
const CalendarApp = () => {
  // 54789
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setIsOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faHome} className="text-yellow-500" />
            <span className="text-lg font-semibold text-yellow-500">Home</span>
          </div>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
              <FontAwesomeIcon icon={faUser} />
              <span className="ml-2">Profile</span>
            </li>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
              <FontAwesomeIcon icon={faBook} />
              <span className="ml-2">Library</span>
            </li>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
              <FontAwesomeIcon icon={faFolder} />
              <span className="ml-2">Collection</span>
              <FontAwesomeIcon icon={faChevronDown} className="ml-auto" />
            </li>
            <ul className="ml-8">
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faMusic} />
                <span className="ml-2">Playlists</span>
              </li>
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faMusic} />
                <span className="ml-2">Tracks</span>
              </li>
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faUser} />
                <span className="ml-2">Artists</span>
              </li>
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faCompactDisc} />
                <span className="ml-2">Albums</span>
              </li>
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faTags} />
                <span className="ml-2">Genres</span>
              </li>
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span className="ml-2">Decades</span>
              </li>
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faGlobe} />
                <span className="ml-2">Geos</span>
              </li>
            </ul>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
              <FontAwesomeIcon icon={faUsers} />
              <span className="ml-2">Community</span>
              <FontAwesomeIcon icon={faChevronDown} className="ml-auto" />
            </li>
            <ul className="ml-8">
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faCalendarCheck} />
                <span className="ml-2">Scheduled listening</span>
              </li>
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faSearch} />
                <span className="ml-2">Music discovery</span>
              </li>
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faSmile} />
                <span className="ml-2">Positive music</span>
              </li>
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faHeart} />
                <span className="ml-2">Mood regulation</span>
              </li>
            </ul>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
              <FontAwesomeIcon icon={faTrophy} />
              <span className="ml-2">Performance</span>
              <FontAwesomeIcon icon={faChevronDown} className="ml-auto" />
            </li>
            <ul className="ml-8">
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span className="ml-2">Calendar</span>
              </li>
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faUsers} />
                <span className="ml-2">Groups</span>
              </li>
              <li className="flex items-center p-4 text-gray-600 hover:bg-gray-100">
                <FontAwesomeIcon icon={faSearch} />
                <span className="ml-2">Music analysis</span>
              </li>
            </ul>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-full">
              All
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full">
              Listening
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full">
              Learning
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full">
              Rehearsal
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full">
              Perform
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLock} />
            <span>Google Calendar</span>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-800 cursor-pointer"
              ></label>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Calendar</h2>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-full">
              + Schedule session
            </button>
          </div>

          <div className="mt-4 flex">
            <div className="flex-1">
              <div className="flex items-center ">
                <div className="flex items-center space-x-2">
                  <div className="date">
                    <button className="btn btn-light mgnr">
                      <svg
                        className="svg-inline--fa fa-chevron-left fa-w-10"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-left"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                        />
                      </svg>
                      {/* <i class="fas fa-chevron-left"></i> Font Awesome fontawesome.com */}
                    </button>
                    <span>May 27, 2022 Today</span>
                    <button className="btn btn-light mgnl">
                      <svg
                        className="svg-inline--fa fa-chevron-right fa-w-10"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                        />
                      </svg>
                      {/* <i class="fas fa-chevron-right"></i> Font Awesome fontawesome.com */}
                    </button>
                  </div>
                </div>
                <div className="flex items-center dwm">
                  <button className="px-4 py-2 bg-yellow-500 text-white ">
                    Day
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-600 ">
                    Week
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-600">
                    Month
                  </button>
                </div>
              </div>

              {/* Calendar Entries */}
              <div className="mt-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <table className="schedule-table">
                      <tbody>
                        <tr>
                          <th className="time-slot">08:00</th>
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <th className="time-slot">09:00</th>
                          <td>
                          
      {/* Div that triggers the popup */}
      <div className="event to-be-played mrgt" onClick={openPopup}>
        <div className="red">Jai Shree raam</div>
        <div className="status">To be played in 15 min</div>
      

      {/* Popup */}
     
    </div>
                            <div className="event to-be-played mrgt2">
                              Radha 2023
                              <div className="status">To be played</div>
                            </div>
                            <div className="event checked-in mrgt1">
                              <div className="red">B Prank</div>
                              <div className="status">Checked in</div>
                            </div>
                          </td>
                          <td>
                            <div className="event office-chill mrgt1">
                              Office chill track
                              <div className="status">To be played</div>
                            </div>
                            <div className="event jacob-jones mrgt3">
                              Jacob Jones
                              <div className="status">To be played</div>
                            </div>
                            <div className="event kristin-watson mrgt2">
                              Kristin Watson
                              <div className="status">To be played</div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="time-slot">10:00</th>
                          <td>
                            <div className="event to-be-played mrgt3">
                              Arlene mccoy track
                              <div className="status">To be played</div>
                            </div>
                          </td>
                          <td>
                            <div className="event to-be-played mrgt4">
                              Esther Track
                              <div className="status">To be played</div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="time-slot">11:00</th>
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <th className="time-slot">12:00</th>
                          <td>
                            <div className="event to-be-played mrgt3">
                              Chloe McKinney Hits
                              <div className="status">To be played</div>
                            </div>
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <th className="time-slot">13:00</th>
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <th className="time-slot">14:00</th>
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <th className="time-slot">15:00</th>
                          <td />
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="max-w-md p-4 bg-white rounded-3xl shadow-md relative"
           style={{ width: 379 }}
           >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faShare} className="ml-2" /> {/* Share Icon */}
              <FontAwesomeIcon icon={faEdit} className="ml-2" /> {/* Edit Icon */}
              <FontAwesomeIcon icon={faTrash} className="ml-2" /> {/* Delete Icon */}
              <FontAwesomeIcon icon={faCog} className="ml-2" /> 
              <FontAwesomeIcon icon={faTimes} className="ml-2" /> {/* Close Icon */}
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
                    src="./kesariya.jpg"
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
                    src="./kesariya.jpg"
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

            <button className="mt-4 text-orange-600 hover:underline">Show More</button>
          </div>
        </div>
      )}

            <div className="w-64 ml-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">January 2022</h3>
                  <div className="flex items-center space-x-2">
                    <button className="btn btn-light mgnr">
                      <svg
                        className="svg-inline--fa fa-chevron-left fa-w-10"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-left"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                        />
                      </svg>
                    </button>

                    <button className="btn btn-light mgnl">
                      <svg
                        className="svg-inline--fa fa-chevron-right fa-w-10"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <div
                    className="grid grid-cols-7 gap-2 text-center text-gray-600"
                    style={{ fontSize: "smaller", fontWeight: "bolder" }}
                  >
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                  </div>
                  <div
                    className="grid grid-cols-7 gap-2 text-center mt-2"
                    style={{ fontSize: "smaller", fontWeight: "bold" }}
                  >
                    <div className="text-gray-400">26</div>
                    <div className="text-gray-400">27</div>
                    <div className="text-gray-400">28</div>
                    <div className="text-gray-400">29</div>
                    <div className="text-gray-400">30</div>
                    <div className="text-gray-400">31</div>
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>08</div>
                    <div>09</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                    <div>16</div>
                    <div>17</div>
                    <div>18</div>
                    <div>19</div>
                    <div>20</div>
                    <div>21</div>
                    <div>22</div>
                    <div>23</div>
                    <div>24</div>
                    <div>25</div>
                    <div>26</div>
                    <div>27</div>
                    <div>28</div>
                    <div>29</div>
                    <div>30</div>
                    <div>31</div>
                    <div className="text-gray-400">01</div>
                    <div className="text-gray-400">02</div>
                    <div className="text-gray-400">03</div>
                    <div className="text-gray-400">04</div>
                    <div className="text-gray-400">05</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Schedule</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span
                    className="px-2 py-1 bg-gray-200 text-gray-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Listen
                  </span>
                  <span
                    className="px-2 py-1 bg-yellow-200 text-yellow-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Learn
                  </span>
                  <span
                    className="px-2 py-1 bg-red-200 text-red-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Work-Out
                  </span>
                  <span
                    className="px-2 py-1 bg-green-200 text-green-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Study
                  </span>
                  <span
                    className="px-2 py-1 bg-gray-200 text-brown-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Practice
                  </span>
                  <span
                    className="px-2 py-1 bg-gray-200 text-gray-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Other
                  </span>
                  <span
                    className="px-2 py-1 bg-red-200 text-red-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Work-Out
                  </span>
                  <span
                    className="px-2 py-1 bg-green-200 text-green-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Study
                  </span>
                  <span
                    className="px-2 py-1 bg-yellow-200 text-yellow-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Learn
                  </span>
                  <span
                    className="px-2 py-1 bg-red-200 text-red-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Work-Out
                  </span>
                  <span
                    className="px-2 py-1 bg-gray-200 text-gray-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Practice
                  </span>
                  <span
                    className="px-2 py-1 bg-gray-200 text-gray-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Other
                  </span>
                  <span
                    className="px-2 py-1 bg-red-200 text-red-600 rounded-full"
                    style={{ fontSize: 12, height: 23 }}
                  >
                    Work-Out
                  </span>
                </div>
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Music</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span>Ronald rich playlist</span>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle"
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="toggle"
                      className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-800 cursor-pointer"
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
