import React from 'react';

function About() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          About <span className="text-blue-600">Yadav</span> Mahasabha
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Yadav Mahasabha is a social organization committed to the unity, growth, and representation of the Yadav community.
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-700" />
        <div className="text-left text-gray-700 dark:text-gray-300 space-y-5">
          <p>
            <strong>Mission:</strong> To empower and unite the Yadav community through education, awareness, leadership, and social initiatives.
          </p>
          <p>
            <strong>Vision:</strong> To build a strong, educated, and self-reliant society that actively contributes to national development and cultural preservation.
          </p>
          <p>
            <strong>Objectives:</strong>
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Promote education and scholarships for underprivileged Yadav students.</li>
            <li>Support employment opportunities and skill development.</li>
            <li>Organize cultural, religious, and social events.</li>
            <li>Unite the Yadav community across India and beyond.</li>
            <li>Raise awareness of community rights and social justice.</li>
          </ul>
          <p>
            <strong>Join Us:</strong> If you're passionate about community service, cultural heritage, or social upliftment, we welcome you to be a part of Yadav Mahasabha.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
