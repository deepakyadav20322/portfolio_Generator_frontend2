'use client'
import React from "react";
import { motion } from "framer-motion";


interface Testimonial {
  name: string;
  username: string;
  text: string;
  verified?: boolean; 
}

const testimonials: Testimonial[] = [
  {
    name: "Kanishk Khurana",
    username: "@KanishkKhurana_",
    text: "Thank god someone made this. You're the best 💯",
    verified: true,
  },
  {
    name: "Whop",
    username: "@WhopIO",
    text: "You heard right. That looks amazing 😍",
  },
  {
    name: "Steven Tey",
    username: "@steventey",
    text: "Bruh, this is so good 😝",
    verified: true,
  },
  {
    name: "Amritpal Chera",
    username: "@achera23",
    text: "This looks crazy good! Congrats on the launch 🚀",
  },
  {
    name: "Ben Everman",
    username: "@benevman",
    text: "Sick, dude. Can not wait to build with this!",
    verified: true,
  },
];

const TwitterCarousel: React.FC = () => {
  return (
    <div className="w-full  pb-10 mb-6 px-3">
        <h1 className="text-3xl md:text-4xl py-4 text-center font-bold">Waht People say that</h1>
      <div className="max-w-7xl mx-auto overflow-hidden relative bg-gray-100 px-3 py-6 ">
        <motion.div
          className="flex space-x-4"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate testimonials for infinite scrolling------------------- */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md w-96 border border-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
            
              <div className="flex items-start mb-3">
                <img
                  src={`https://i.pravatar.cc/150?img=${index % testimonials.length + 10}`}
                  alt={item.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-3">
                  <div className="flex items-center space-x-2">
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    {item.verified && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.25 12c0 1.49-.34 2.9-.99 4.19a2.06 2.06 0 01-.65.81c-.55.45-1.05.94-1.53 1.46-.59.63-1.22 1.29-1.9 1.99a1.68 1.68 0 01-2.4 0 32.61 32.61 0 01-3.91-4.09l-.17-.18a10.45 10.45 0 01-1.75-2.73c-.45-1.05-.68-2.15-.68-3.26 0-1.49.34-2.9.99-4.19.28-.51.64-.96 1.06-1.35.55-.45 1.05-.94 1.53-1.46.59-.63 1.22-1.29 1.9-1.99a1.68 1.68 0 012.4 0c.68.7 1.31 1.36 1.9 1.99.48.52.98 1.01 1.53 1.46.43.39.79.84 1.06 1.35.65 1.3.99 2.7.99 4.19z" />
                        <path d="M15.41 11.09l-2.87-2.88a.75.75 0 00-1.06 1.06l2.34 2.35-2.34 2.34a.75.75 0 001.06 1.06l2.88-2.87a.75.75 0 000-1.06z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{item.username}</p>
                </div>
              </div>

           
              <p className="text-gray-800 text-sm">{item.text}</p>

             
              <div className="mt-3 flex items-center space-x-4 text-gray-500 text-sm">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M18 10c0-4.418-3.582-8-8-8S2 5.582 2 10s3.582 8 8 8 8-3.582 8-8zm-3-1H8.414l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 11H15a1 1 0 100-2z" />
                  </svg>
                  <p>1.2k</p>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M15 8a3 3 0 01-6 0V4a3 3 0 016 0v4zM9 9v1H4a3 3 0 000 6h1v1a3 3 0 006 0v-1h5a3 3 0 000-6H9V9z" />
                  </svg>
                  <p>430</p>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 3.293a1 1 0 00-1.414 0L10 9.586 4.707 4.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
                  </svg>
                  <p>98</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TwitterCarousel;
