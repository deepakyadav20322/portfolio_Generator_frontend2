import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t py-10 max-w-7xl w-full mx-auto bg-gray-50 dark:bg-gray-900">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
              Portfolio
            </span>
          </div>

         
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>

          <nav className="flex flex-wrap gap-4" aria-label="Footer Navigation">
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:underline">
              Contact
            </Link>
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:underline">
              About
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
