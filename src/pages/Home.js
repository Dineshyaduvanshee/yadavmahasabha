import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ✅ Local images
import akhilesh1 from "../assets/images/akhilesh1.jpg";
import akhilesh2 from "../assets/images/akhilesh2.jpg";
import lalu1 from "../assets/images/lalu1.jpg";
import d1 from "../assets/images/d1.jpg";
import d2 from "../assets/images/d2.jpg";
import d3 from "../assets/images/d3.jpg";
import d4 from "../assets/images/d4.jpg";

const images = [akhilesh1, akhilesh2, lalu1,d1,d2,d3,d4];

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="p-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Yadav Mahasabha</h2>

      <div className="max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg bg-black">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <div className="w-full h-[450px] flex justify-center items-center">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="max-h-[450px] object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <p className="mt-6 text-gray-700">Join our community and stay connected.</p>
    </div>
  );
}

export default Home;
