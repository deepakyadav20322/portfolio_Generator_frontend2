'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Step1Form from '@/components/Step1Form';
import React, { useState, useEffect } from 'react';
import Step2Form from '@/components/Step2Form';
import { useAuth } from '../context/authContect';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/Spinner';
import { motion, AnimatePresence } from 'framer-motion';

type FormState = 'step1' | 'step2' | 'completed';

const Page = () => {
  const [currentStep, setCurrentStep] = useState<FormState>('step1');
  const [portfolioURL, setPortfolioURL] = useState('');
  const [loadingCircle, setLoadingCircle] = useState<boolean>(true); // Default to true
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkUserIdInPortfolio = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/has-portfolio?userId=${user?.userId}`
        );
        const data = await response.json();
        const hasPortfolio = data.hasPortfolio;

        if (user) {
          if (hasPortfolio == false) {
            console.log(hasPortfolio, "user", user)
            console.log('1212120')
            router.push('/create-portfolio');
            return
          } else {
            router.push(`/${data.portfolioURL}`);
            console.log('12121200')
            return
          }
        } else {
          router.push('/signIn');
          console.log('121212000')
          return
        }
      } catch (error) {
        console.error('Error checking user ID in portfolio:', error);
      } finally {
        setLoadingCircle(false);
      }
    };

    checkUserIdInPortfolio();
  }, [user, router]);

  useEffect(() => {
    if (!user && !loading) {
      router.push('/signIn');
    }
  }, [user, loading, router]);

  if (loading || loadingCircle) {
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <LoadingSpinner size="md" color="blue" />
      </div>
    );
  }

  return (
    <div className='overflow-hidden'>
       <Link href={'/'} className="inline-flex h-9 items-center justify-center rounded-md bg-background border-s-gray-300 border-[2px] px-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground font-semibold text-black mx-6 my-6"
        >
          Home
        </Link>
    <AnimatePresence mode='wait'>
      {currentStep === 'step1' && (
        <motion.div
          key="step1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <Step1Form
            setPortfolioURL={setPortfolioURL}
            portfolioURL={portfolioURL}
            setCurrentStep={setCurrentStep}
          />
        </motion.div>
      )}
      {currentStep === 'step2' && (
        <motion.div
          key="step2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <Step2Form portfolioURL={portfolioURL} />
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
};

export default Page;
