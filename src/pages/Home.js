// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// // ✅ Local images
// import akhilesh1 from "../assets/images/akhilesh1.jpg";
// import akhilesh2 from "../assets/images/akhilesh2.jpg";
// import lalu1 from "../assets/images/lalu1.jpg";
// import d1 from "../assets/images/d1.jpg";
// import d2 from "../assets/images/d2.jpg";
// import d3 from "../assets/images/d3.jpg";
// import d4 from "../assets/images/d4.jpg";

// const images = [akhilesh1, akhilesh2, lalu1,d1,d2,d3,d4];

// function Home() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//   };

//   return (
//     <div className="p-6 bg-white text-center">
//       <h2 className="text-3xl font-bold mb-4">Welcome to Yadav Mahasabha</h2>

//       <div className="max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg bg-black">
//         <Slider {...settings}>
//           {images.map((img, index) => (
//             <div key={index}>
//               <div className="w-full h-[450px] flex justify-center items-center">
//                 <img
//                   src={img}
//                   alt={`Slide ${index + 1}`}
//                   className="max-h-[450px] object-contain"
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <p className="mt-6 text-gray-700">Join our community and stay connected.</p>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import akhilesh1 from "../assets/images/akhilesh1.jpg";
import akhilesh2 from "../assets/images/akhilesh2.jpg";
import lalu1 from "../assets/images/lalu1.jpg";
import d1 from "../assets/images/d1.jpg";
import d2 from "../assets/images/d2.jpg";
import d3 from "../assets/images/d3.jpg";
import d4 from "../assets/images/d4.jpg";

const images = [
  { src: akhilesh1, caption: "Akhilesh Yadav - Visionary Leader" },
  { src: akhilesh2, caption: "Inspiring Youth & Progress" },
  { src: lalu1, caption: "Lalu Prasad Yadav - Strong Voice" },
  { src: d1, caption: "Yadav Unity at Events" },
  { src: d2, caption: "Cultural Pride" },
  { src: d3, caption: "Community Strength" },
  { src: d4, caption: "Leadership in Action" },
];

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-2 animate-fade-in-up">
        Welcome to <span className="text-red-600">Yadav Mahasabha</span>
      </h2>
      <p className="text-lg text-gray-600 mb-6 animate-fade-in-up delay-200">
        Join our community and stay connected with our mission and culture.
      </p>

      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-xl border bg-black animate-fade-in-up delay-300">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-lg p-4 font-semibold">
                {item.caption}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <button className="mt-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition">
        Join Now
      </button>
    </div>
  );
}

export default Home;
