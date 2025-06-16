import React from 'react';

const videoPlaylists = [
  { title: 'Samajwadi Party Songs', url: 'https://www.youtube.com/embed/videoseries?list=PLlBTRvaC0XtKnzRLR5m7dc1S58gk_nZJ_' },
  { title: 'Samajwadi Party Songs (mobile)', url: 'https://www.youtube.com/embed/videoseries?list=PL9_r2JcvJgpT4bOoj_89J_yoJPFXWlfLU' },
  { title: 'Samajwadi Party Song 2024', url: 'https://www.youtube.com/embed/videoseries?list=PLhxU4Vi1rkhrPlK0ndTEGCeaR04dTa3YH_' },
  { title: 'SAMAJVADI SONG TOP Videos', url: 'https://www.youtube.com/embed/videoseries?list=PLAa6-BEN8zADvwRZLM9uxo0mI5gw43v_a' },
  { title: 'Samajwadi Song Playlist', url: 'https://www.youtube.com/embed/videoseries?list=PL-HAqxzv718Kx_MmFMI2_LEydZN3SD2lQ' },
  { title: 'Akhilesh Yadav Samajwadi Speech & Songs', url: 'https://www.youtube.com/embed/videoseries?list=PLJGB1MZZk_3uJ4Uz91Kv8FSkzJ1VXeI4k' },
  { title: 'Doli Saja Ke Rakhna – Khesari Lal Yadav', url: 'https://www.youtube.com/embed/videoseries?list=PLxVVf7PqMqInAzUvk5OVXm0nCGQhnOrwd' },
  { title: 'Tuntun Yadav Super Hit Songs', url: 'https://www.youtube.com/embed/videoseries?list=PL2NFDAvOrsDVp6kF3yQ35dOI8hQutv36P' },
  { title: 'Tuntun Yadav Song Collection', url: 'https://www.youtube.com/embed/videoseries?list=PLrgv-u9drwqwM1GPBIMbn6-XBEv2JUc2g' },
  // Add more playlist entries here...
    {
    title: 'Khesari Lal Yadav – All Songs (full playlist)',
    url: 'https://www.youtube.com/embed/videoseries?list=PL2uIjHdhuKSE7iTd63ZOuIxULvJkMZG0n'
  },
  {
    title: 'Khesari Lal Yadav – Superhit Songs (SRK Music)',
    url: 'https://www.youtube.com/embed/videoseries?list=PLxVVf7PqMqInf7soRnlWejuHk0o0b8qED'
  },
  {
    title: 'Khesari Lal Yadav – Popular Bhojpuri Songs (Worldwide Records)',
    url: 'https://www.youtube.com/embed/videoseries?list=PLJ3M6AoVR-gaUcqDu7gOFSGWwtk0pQjXP'
  },
  {
    title: 'Khesari Lal Yadav – Hits Collection',
    url: 'https://www.youtube.com/embed/videoseries?list=PLNUnGbFEByrii8gREHfiQxyfFiXs6nONk'
  },
  {
    title: 'Best of Khesari Lal Yadav',
    url: 'https://www.youtube.com/embed/videoseries?list=PL2NFDAvOrsDVTOOuuVUJIakhBvZIjnF2j'
  },
];

function Reels() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">🎬 Yadav Samaj Reels</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoPlaylists.map((video, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
            <iframe
              className="w-full h-56 md:h-64 lg:h-72"
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reels;
