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


