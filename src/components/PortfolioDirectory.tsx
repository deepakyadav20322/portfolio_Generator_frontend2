'use client'
import React from 'react';
import { motion } from 'framer-motion';

const PortfolioDirectory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animations for children elements
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div>
    <motion.section
      className="container py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="rounded-lg border bg-card p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold">Portfolio Directory</h2>
        <p className="text-muted-foreground">
          Over 153 users who have created their professional portfolios
        </p>
        <motion.div
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 rounded-lg border p-4"
              variants={cardVariants}
            >
              <div
                className="h-10 w-10 rounded-full bg-muted flex justify-center items-center"
              >
                <span className="text-medium text-center">J</span>
              </div>
              <div>
                <div className="font-medium">John Smith</div>
                <div className="text-sm text-muted-foreground">Software Engineer</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
    </div>
  );
};

export default PortfolioDirectory;
