'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import GridWithBackgroundAndCells from '@/components/BackgroundBoxCells'
import AvatarStack from './AvatarStreck';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="container py-24 sm:py-32 relative bg-transparent z-10">
  
      <motion.div
        className="mx-auto max-w-[980px] text-center"
        initial="hidden"
        animate="visible"
        variants={parentVariants}
      >
        <motion.h1
          className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
          variants={textVariants}
        >
          Build Your Portfolio
          <motion.span
            className="block text-blue-600"
            variants={textVariants}
          >
            Effortlessly
          </motion.span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-muted-foreground sm:text-xl"
          variants={textVariants}
        >
          Create stunning portfolios in minutes with portfolio dev. Stand out from
          the crowd and land your dream opportunities.
        </motion.p>
        <motion.div className="mt-8 flex justify-center gap-4" variants={textVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg">Create Your Portfolio</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline">
              View Demo Portfolio →
            </Button>
          </motion.div>
        </motion.div>
        <motion.div className='flex justify-center items-center  my-4' variants={textVariants}>
          {/* <AvatarStack/> */}
        </motion.div>

      </motion.div>
    
    </section>
  );
};

export default HeroSection;
