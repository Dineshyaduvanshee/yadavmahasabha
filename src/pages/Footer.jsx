// import React from 'react';
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
//       <div className="max-w-screen-xl mx-auto px-4 py-8 md:flex md:justify-between">
        
//         {/* Logo & Description */}
//         <div className="mb-6 md:mb-0">
//           <Link to="/" className="flex items-center">
//             <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600">
//               Yadav
//             </span>
//             <span className="ml-1 text-2xl font-semibold text-gray-900 dark:text-white">
//               Mahasabha
//             </span>
//           </Link>
//           <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
//             Uniting and empowering the Yadav community for a brighter future.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
//           <div>
//             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
//             <ul className="text-gray-500 dark:text-gray-400 text-sm">
//               <li className="mb-2">
//                 <Link to="/" className="hover:underline">Home</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/join" className="hover:underline">Join</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/about" className="hover:underline">About</Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
//             <ul className="text-gray-500 dark:text-gray-400 text-sm">
//               <li className="mb-2">
//                 <a href="#" className="hover:underline">Facebook</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline">Instagram</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline">YouTube</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
//             <ul className="text-gray-500 dark:text-gray-400 text-sm">
//               <li className="mb-2">
//                 <a href="#" className="hover:underline">Privacy Policy</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline">Terms & Conditions</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="px-4 py-4 bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
//         © {new Date().getFullYear()} <span className="font-medium text-blue-600">Yadav Mahasabha</span>. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:flex md:justify-between">
        
        {/* Logo & Description */}
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600">
              Yadav
            </span>
            <span className="ml-1 text-2xl font-semibold text-gray-900 dark:text-white">
              Mahasabha
            </span>
          </Link>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-md">
            Uniting and empowering the Yadav community for a brighter future.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          
          {/* Site Links */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
            <ul className="text-gray-500 dark:text-gray-400 text-sm">
              <li className="mb-2">
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/join" className="hover:underline">Join</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:underline">About</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
            <ul className="text-gray-500 dark:text-gray-400 text-sm">
              <li className="mb-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              </li>
              <li className="mb-2">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 text-sm">
              <li className="mb-2">
                <a href="dineshyadav74950@gmail.com" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="dineshyadav74950@gmail.com" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-4 py-4 bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()}{' '}
        <span className="font-medium text-blue-600">Yadav Mahasabha</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
