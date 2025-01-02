import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <div className="text-center p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-6xl font-bold text-blue-500 ">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow transition-transform transform hover:scale-105"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default Page;
