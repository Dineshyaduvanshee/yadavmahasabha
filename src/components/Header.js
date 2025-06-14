// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import krishna from '../assets/images/krishna.jpg'; // ✅ Local image import

// function Header() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLoginLogout = () => {
//     setIsLoggedIn(!isLoggedIn);
//     setDropdownOpen(false);
//   };

//   return (
//     <header className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//       <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        
//         {/* Logo */}
//         <div
//           className="text-2xl font-bold cursor-pointer text-gray-900 dark:text-white"
//           onClick={() => navigate('/')}
//         >
//           <span className="text-blue-600">Yadav</span> Mahasabha
//         </div>

//         {/* Hamburger for mobile */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-700 dark:text-white"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={
//                   menuOpen
//                     ? 'M6 18L18 6M6 6l12 12'
//                     : 'M4 6h16M4 12h16M4 18h16'
//                 }
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Nav Links */}
//         <nav
//           className={`${
//             menuOpen ? 'block' : 'hidden'
//           } lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
//         >
//           <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0 text-lg">
//             <li>
//               <button
//                 onClick={() => navigate('/')}
//                 className="text-gray-700 dark:text-white hover:text-blue-600"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => navigate('/join')}
//                 className="text-gray-700 dark:text-white hover:text-blue-600"
//               >
//                 Join
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => navigate('/About')}
//                 className="text-gray-700 dark:text-white hover:text-blue-600"
//               >
//                 About
//               </button>
//             </li>
//           </ul>
//         </nav>

//         {/* Profile Dropdown */}
//         <div className="relative ml-4 hidden lg:flex items-center">
//           <button
//             className="flex items-center focus:outline-none"
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           >
//             <img
//               src={krishna} // ✅ Use imported image
//               className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600"
//               alt="User"
//             />
//           </button>

//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-50">
//               <div className="px-4 py-3">
//                 <p className="text-sm font-medium text-gray-900 dark:text-white">
//                   Yadav User
//                 </p>
//                 <p className="text-sm text-gray-500 dark:text-gray-300">
//                   dineshyadav74950@gmail.com
//                 </p>
//               </div>
//               <ul className="py-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
//                   >
//                     Dashboard
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
//                   >
//                     Settings
//                   </a>
//                 </li>
//                 <li>
//                   <button
//                     onClick={handleLoginLogout}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
//                   >
//                     {isLoggedIn ? 'Logout' : 'Login'}
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import krishna from '../assets/images/krishna.jpg'; // ✅ Local image import

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
    setDropdownOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer text-gray-900 dark:text-white"
          onClick={() => navigate('/')}
        >
          <span className="text-blue-600">Yadav</span> Mahasabha
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0 text-lg">
            <li>
              <Link
                to="/"
                className="text-gray-700 dark:text-white hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/join"
                className="text-gray-700 dark:text-white hover:text-blue-600"
              >
                Join
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 dark:text-white hover:text-blue-600"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Profile Dropdown */}
        <div className="relative ml-4 hidden lg:flex items-center">
          <button
            className="flex items-center focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src={krishna}
              className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600"
              alt="User"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-50">
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Yadav User
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  dineshyadav74950@gmail.com
                </p>
              </div>
              <ul className="py-2">
                <li>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/settings')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    Settings
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLoginLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    {isLoggedIn ? 'Logout' : 'Login'}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
