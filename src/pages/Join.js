// import React, { useState, useRef } from 'react';
// import html2canvas from 'html2canvas';

// function Join() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     mobile: '',
//     state: '',
//     district: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const certificateRef = useRef(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const handleDownload = async () => {
//     const canvas = await html2canvas(certificateRef.current);
//     const link = document.createElement('a');
//     link.download = 'yadavmahasabha_certificate.png';
//     link.href = canvas.toDataURL();
//     link.click();
//   };

//   const handleShare = async () => {
//     const canvas = await html2canvas(certificateRef.current);
//     canvas.toBlob(async (blob) => {
//       const file = new File([blob], 'certificate.png', { type: 'image/png' });
//       try {
//         if (navigator.share && navigator.canShare({ files: [file] })) {
//           await navigator.share({
//             title: 'My Yadav Mahasabha Certificate',
//             text: 'I’ve joined Yadav Mahasabha!',
//             files: [file],
//           });
//         } else {
//           alert('Sharing not supported on this device. Please download and share manually.');
//         }
//       } catch (err) {
//         console.error('Share failed:', err);
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       {!submitted ? (
//         <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-xl">
//           <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
//             Join Yadav Mahasabha
//           </h2>

//           <div className="mb-6 text-center">
//             {selectedImage ? (
//               <img
//                 src={selectedImage}
//                 alt="Selected"
//                 className="w-32 h-32 object-cover rounded-full mx-auto border shadow"
//               />
//             ) : (
//               <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center text-gray-500 text-sm border">
//                 No Image
//               </div>
//             )}
//           </div>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="mobile"
//               placeholder="Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="district"
//               placeholder="District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             <div>
//               <label className="block mb-1 font-medium text-gray-700">
//                 Upload Photo
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Join Now
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-2xl text-center">
//           <div ref={certificateRef} className="p-6 bg-blue-50 border-4 border-blue-500 rounded-xl">
//             <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Congratulations!</h2>
//             <h3 className="text-xl font-bold text-blue-800 mb-2">Certificate of Membership</h3>
//             <p>This certifies that</p>
//             <h2 className="text-2xl font-bold text-gray-900 my-2">{formData.fullName}</h2>
//             <p>from <span className="font-semibold">{formData.district}, {formData.state}</span></p>
//             <p className="mt-2">is now a proud member of Yadav Mahasabha.</p>
//             {selectedImage && (
//               <img
//                 src={selectedImage}
//                 alt="User"
//                 className="w-24 h-24 object-cover rounded-full mx-auto mt-4 border-2 border-blue-400"
//               />
//             )}
//             <p className="mt-4 text-sm text-gray-600">Mobile: {formData.mobile}</p>
//           </div>

//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={handleDownload}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Download Certificate
//             </button>
//             <button
//               onClick={handleShare}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Share Certificate
//             </button>
//             <button
//               onClick={() => setSubmitted(false)}
//               className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//             >
//               Go Back
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Join;




// import React, { useState, useRef } from 'react';
// import html2canvas from 'html2canvas';

// function Join() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     mobile: '',
//     state: '',
//     district: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const certificateRef = useRef(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const handleDownload = async () => {
//     const canvas = await html2canvas(certificateRef.current);
//     const link = document.createElement('a');
//     link.download = 'yadavmahasabha_certificate.png';
//     link.href = canvas.toDataURL();
//     link.click();
//   };

//   const handleShare = async () => {
//     const canvas = await html2canvas(certificateRef.current);
//     canvas.toBlob(async (blob) => {
//       const file = new File([blob], 'certificate.png', { type: 'image/png' });
//       try {
//         if (navigator.share && navigator.canShare({ files: [file] })) {
//           await navigator.share({
//             title: 'My Yadav Mahasabha Certificate',
//             text: 'I’ve joined Yadav Mahasabha!',
//             files: [file],
//           });
//         } else {
//           alert('Sharing not supported on this device. Please download and share manually.');
//         }
//       } catch (err) {
//         console.error('Share failed:', err);
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       {!submitted ? (
//         <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-xl">
//           <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
//             Join Yadav Mahasabha
//           </h2>

//           <div className="mb-6 text-center">
//             {selectedImage ? (
//               <img
//                 src={selectedImage}
//                 alt="Selected"
//                 className="w-32 h-32 object-cover rounded-full mx-auto border shadow"
//               />
//             ) : (
//               <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center text-gray-500 text-sm border">
//                 No Image
//               </div>
//             )}
//           </div>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="mobile"
//               placeholder="Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="district"
//               placeholder="District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             <div>
//               <label className="block mb-1 font-medium text-gray-700">
//                 Upload Photo
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Join Now
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-2xl text-center">
//           <div
//             ref={certificateRef}
//             className="p-6 bg-blue-50 border-4 border-blue-500 rounded-xl relative"
//           >
//             {/* Bharat Logo */}
//             <img
//               src="/logo.png"
//               alt="Bharat Logo"
//               className="w-16 h-16 absolute top-4 left-4"
//             />

//             <h2 className="text-3xl font-bold text-green-600 mb-2 mt-6">🎉 Congratulations!</h2>
//             <h3 className="text-xl font-bold text-blue-800 mb-2">Certificate of Membership</h3>
//             <p>This certifies that</p>
//             <h2 className="text-2xl font-bold text-gray-900 my-2">{formData.fullName}</h2>
//             <p>from <span className="font-semibold">{formData.district}, {formData.state}</span></p>
//             <p className="mt-2">is now a proud member of Yadav Mahasabha.</p>

//             {selectedImage && (
//               <img
//                 src={selectedImage}
//                 alt="User"
//                 className="w-24 h-24 object-cover rounded-full mx-auto mt-4 border-2 border-blue-400"
//               />
//             )}

//             <p className="mt-4 text-sm text-gray-600">Mobile: {formData.mobile}</p>

//             {/* Signature */}
//             <div className="mt-8 text-right pr-4">
//               <img
//                 src="/signature.png"
//                 alt="Signature"
//                 className="w-32 h-auto inline-block"
//               />
//               <p className="text-sm font-medium text-gray-700 mt-1">National President</p>
//             </div>
//           </div>

//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={handleDownload}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Download Certificate
//             </button>
//             <button
//               onClick={handleShare}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Share Certificate
//             </button>
//             <button
//               onClick={() => setSubmitted(false)}
//               className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//             >
//               Go Back
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Join;



// import React, { useState, useRef } from 'react';
// import html2canvas from 'html2canvas';
// import yadavflg from '../assets/images/yadavflg.jpg';
// function Join() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     mobile: '',
//     state: '',
//     district: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const images = [yadavflg];
//   const certificateRef = useRef(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const handleDownload = async () => {
//     const canvas = await html2canvas(certificateRef.current);
//     const link = document.createElement('a');
//     link.download = 'yadavmahasabha_certificate.png';
//     link.href = canvas.toDataURL();
//     link.click();
//   };

//   const handleShare = async () => {
//     const canvas = await html2canvas(certificateRef.current);
//     canvas.toBlob(async (blob) => {
//       const file = new File([blob], 'certificate.png', { type: 'image/png' });
//       try {
//         if (navigator.share && navigator.canShare({ files: [file] })) {
//           await navigator.share({
//             title: 'My Yadav Mahasabha Certificate',
//             text: 'I’ve joined Yadav Mahasabha!',
//             files: [file],
//           });
//         } else {
//           alert('Sharing not supported on this device. Please download and share manually.');
//         }
//       } catch (err) {
//         console.error('Share failed:', err);
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       {!submitted ? (
//         <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-xl">
//           <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
//             Join Yadav Mahasabha
//           </h2>

//           <div className="mb-6 text-center">
//             {selectedImage ? (
//               <img
//                 src={selectedImage}
//                 alt="Selected"
//                 className="w-32 h-32 object-cover rounded-full mx-auto border shadow"
//               />
//             ) : (
//               <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center text-gray-500 text-sm border">
//                 No Image
//               </div>
//             )}
//           </div>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="mobile"
//               placeholder="Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="district"
//               placeholder="District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             <div>
//               <label className="block mb-1 font-medium text-gray-700">
//                 Upload Photo
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Join Now
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-2xl text-center">
//           <div
//             ref={certificateRef}
//             className="p-6 bg-blue-50 border-4 border-blue-500 rounded-xl relative"
//           >
//             {images.yadavflg}
//             <img
//               src="/logo.png"
//               alt="Bharat Logo"
//               className="w-16 h-16 absolute top-4 left-4"
//             />

//             <h2 className="text-3xl font-bold text-green-600 mb-2 mt-6">🎉 Congratulations!</h2>
//             <h3 className="text-xl font-bold text-blue-800 mb-2">Certificate of Membership</h3>
//             <p>This certifies that</p>
//             <h2 className="text-2xl font-bold text-gray-900 my-2">{formData.fullName}</h2>
//             <p>
//               from <span className="font-semibold">{formData.district}, {formData.state}</span>
//             </p>
//             <p className="mt-2">is now a proud member of Yadav Mahasabha.</p>

//             {selectedImage && (
//               <img
//                 src={selectedImage}
//                 alt="User"
//                 className="w-24 h-24 object-cover rounded-full mx-auto mt-4 border-2 border-blue-400"
//               />
//             )}

//             <p className="mt-4 text-sm text-gray-600">📱 Mobile: {formData.mobile}</p>
//             <p className="text-sm text-gray-600">📧 Email: <strong>yadavmahasabha@gmail.com</strong></p>

//             {/* Signature */}
//             <div className="mt-8 text-right pr-4">
//               <img
//                 src="/signature.png"
//                 alt="Signature"
//                 className="w-32 h-auto inline-block"
//               />
//               <p className="text-sm font-medium text-gray-700 mt-1">National President</p>
//             </div>
//           </div>

//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={handleDownload}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Download Certificate
//             </button>
//             <button
//               onClick={handleShare}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Share Certificate
//             </button>
//             <button
//               onClick={() => setSubmitted(false)}
//               className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//             >
//               Go Back
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Join;




import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import logo from '../assets/images/logo.png'; // Yadav flag
import bharatLogo from '../assets/images/logo.png'; // Bharat logo
import signature from '../assets/images/signature.png'; // Signature

function Join() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    state: '',
    district: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const certificateRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownload = async () => {
    const canvas = await html2canvas(certificateRef.current);
    const link = document.createElement('a');
    link.download = 'yadavmahasabha_certificate.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleShare = async () => {
    const canvas = await html2canvas(certificateRef.current);
    canvas.toBlob(async (blob) => {
      const file = new File([blob], 'certificate.png', { type: 'image/png' });
      try {
        if (navigator.share && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'My Yadav Mahasabha Certificate',
            text: 'I’ve joined Yadav Mahasabha!',
            files: [file],
          });
        } else {
          alert('Sharing not supported on this device. Please download and share manually.');
        }
      } catch (err) {
        console.error('Share failed:', err);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      {!submitted ? (
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
            Join Yadav Mahasabha
          </h2>

          <div className="mb-6 text-center">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-32 h-32 object-cover rounded-full mx-auto border shadow"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center text-gray-500 text-sm border">
                No Image
              </div>
            )}
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="district"
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Upload Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Join Now
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-2xl text-center">
          <div
            ref={certificateRef}
            className="p-6 bg-blue-50 border-4 border-blue-500 rounded-xl relative"
          >
            {/* Bharat Logo */}
            <img
              src={bharatLogo}
              alt="Bharat Logo"
              className="w-16 h-16 absolute top-4 left-4"
            />

            {/* Yadav Flag */}
            <img
              src={logo}
              alt="Yadav Flag"
              className="w-16 h-16 absolute top-4 right-4"
            />

            <h2 className="text-3xl font-bold text-green-600 mb-2 mt-6">🎉 Congratulations!</h2>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Certificate of Membership</h3>
            <p>This certifies that</p>
            <h2 className="text-2xl font-bold text-gray-900 my-2">{formData.fullName}</h2>
            <p>
              from <span className="font-semibold">{formData.district}, {formData.state}</span>
            </p>
            <p className="mt-2">is now a proud member of Yadav Mahasabha.</p>

            {selectedImage && (
              <img
                src={selectedImage}
                alt="User"
                className="w-24 h-24 object-cover rounded-full mx-auto mt-4 border-2 border-blue-400"
              />
            )}

            <p className="mt-4 text-sm text-gray-600">📱 Mobile: {formData.mobile}</p>
            <p className="text-sm text-gray-600">📧 Email: <strong>yadavmahasabha@gmail.com</strong></p>

            {/* Signature */}
            <div className="mt-8 text-right pr-4">
              <img
                src={signature}
                alt="Signature"
                className="w-32 h-auto inline-block"
              />
              <p className="text-sm font-medium text-gray-700 mt-1">National President</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownload}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download Certificate
            </button>
            <button
              onClick={handleShare}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Share Certificate
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Join;



// // Join.js
// import React, { useState, useEffect } from "react";
// import { db, storage } from "../firebase";
// import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// function Join() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobile: "",
//     state: "",
//     district: "",
//   });
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     fetchMembers();
//   }, []);

//   const fetchMembers = async () => {
//     const snapshot = await getDocs(collection(db, "members"));
//     const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setMembers(data);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setSelectedImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedImage) return alert("Please upload an image");

//     try {
//       const imageRef = ref(storage, `members/${Date.now()}_${selectedImage.name}`);
//       await uploadBytes(imageRef, selectedImage);
//       const imageUrl = await getDownloadURL(imageRef);

//       await addDoc(collection(db, "members"), {
//         ...formData,
//         imageUrl,
//         createdAt: new Date(),
//       });

//       alert("Member added successfully");
//       setFormData({ fullName: "", mobile: "", state: "", district: "" });
//       setSelectedImage(null);
//       fetchMembers();
//     } catch (err) {
//       console.error(err);
//       alert("Error adding member");
//     }
//   };

//   const handleDelete = async (id) => {
//     await deleteDoc(doc(db, "members", id));
//     fetchMembers();
//   };

//   return (
//     <div className="container">
//       <h2>Join Yadav Mahasabha</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           placeholder="Full Name"
//           required
//         />
//         <input
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           placeholder="Mobile"
//           required
//         />
//         <input
//           name="state"
//           value={formData.state}
//           onChange={handleChange}
//           placeholder="State"
//           required
//         />
//         <input
//           name="district"
//           value={formData.district}
//           onChange={handleChange}
//           placeholder="District"
//           required
//         />
//         <input type="file" accept="image/*" onChange={handleImageChange} required />
//         <button type="submit">Submit</button>
//       </form>

//       <h3>Members List</h3>
//       {members.map((member) => (
//         <div key={member.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
//           <p><strong>Name:</strong> {member.fullName}</p>
//           <p><strong>Mobile:</strong> {member.mobile}</p>
//           <p><strong>State:</strong> {member.state}</p>
//           <p><strong>District:</strong> {member.district}</p>
//           <img src={member.imageUrl} alt={member.fullName} style={{ width: "100px" }} />
//           <button onClick={() => handleDelete(member.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Join;


// import React, { useState, useRef } from "react";
// import html2canvas from "html2canvas";
// import { db, storage } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// // Replace with your assets
// import logo from "../assets/images/logo.png";
// import bharatLogo from "../assets/images/logo.png";
// import signature from "../assets/images/signature.png";

// function Join() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobile: "",
//     state: "",
//     district: "",
//   });
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [submitted, setSubmitted] = useState(false);
//   const certificateRef = useRef(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);
//     if (file) setImagePreview(URL.createObjectURL(file));
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedImage) return alert("Please upload an image");

//     try {
//       const imageRef = ref(storage, `members/${Date.now()}_${selectedImage.name}`);
//       await uploadBytes(imageRef, selectedImage);
//       const imageUrl = await getDownloadURL(imageRef);

//       await addDoc(collection(db, "members"), {
//         ...formData,
//         imageUrl,
//         createdAt: new Date(),
//       });

//       setSubmitted(true);
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong.");
//     }
//   };

//   const handleDownload = async () => {
//     const canvas = await html2canvas(certificateRef.current);
//     const link = document.createElement("a");
//     link.download = "yadav_certificate.png";
//     link.href = canvas.toDataURL();
//     link.click();
//   };

//   const handleShare = async () => {
//     const canvas = await html2canvas(certificateRef.current);
//     canvas.toBlob(async (blob) => {
//       const file = new File([blob], "certificate.png", { type: "image/png" });
//       if (navigator.share && navigator.canShare({ files: [file] })) {
//         await navigator.share({
//           title: "Yadav Mahasabha Certificate",
//           files: [file],
//         });
//       } else {
//         alert("Sharing not supported. Please download and share manually.");
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
//       {!submitted ? (
//         <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-xl">
//           <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
//             Join Yadav Mahasabha
//           </h2>

//           <div className="mb-6 text-center">
//             {imagePreview ? (
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="w-32 h-32 object-cover rounded-full mx-auto border shadow"
//               />
//             ) : (
//               <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center text-gray-500 text-sm border">
//                 No Image
//               </div>
//             )}
//           </div>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="mobile"
//               placeholder="Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="district"
//               placeholder="District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-2xl text-center">
//           <div
//             ref={certificateRef}
//             className="p-6 bg-blue-50 border-4 border-blue-500 rounded-xl relative"
//           >
//             <img
//               src={bharatLogo}
//               alt="Bharat Logo"
//               className="w-16 h-16 absolute top-4 left-4"
//             />
//             <img
//               src={logo}
//               alt="Yadav Flag"
//               className="w-16 h-16 absolute top-4 right-4"
//             />

//             <h2 className="text-3xl font-bold text-green-600 mb-2 mt-6">🎉 Congratulations!</h2>
//             <h3 className="text-xl font-bold text-blue-800 mb-2">Certificate of Membership</h3>
//             <p>This certifies that</p>
//             <h2 className="text-2xl font-bold text-gray-900 my-2">{formData.fullName}</h2>
//             <p>
//               from <span className="font-semibold">{formData.district}, {formData.state}</span>
//             </p>
//             <p className="mt-2">is now a proud member of Yadav Mahasabha.</p>

//             {imagePreview && (
//               <img
//                 src={imagePreview}
//                 alt="User"
//                 className="w-24 h-24 object-cover rounded-full mx-auto mt-4 border-2 border-blue-400"
//               />
//             )}

//             <p className="mt-4 text-sm text-gray-600">📱 Mobile: {formData.mobile}</p>
//             <p className="text-sm text-gray-600">📧 Email: yadavmahasabha@gmail.com</p>

//             <div className="mt-8 text-right pr-4">
//               <img
//                 src={signature}
//                 alt="Signature"
//                 className="w-32 h-auto inline-block"
//               />
//               <p className="text-sm font-medium text-gray-700 mt-1">National President</p>
//             </div>
//           </div>

//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={handleDownload}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Download Certificate
//             </button>
//             <button
//               onClick={handleShare}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Share Certificate
//             </button>
//             <button
//               onClick={() => setSubmitted(false)}
//               className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//             >
//               Go Back
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Join;
