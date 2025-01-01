'use client'


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from 'lucide-react'
import { SetStateAction, Dispatch, useState } from "react";
import { toast } from "sonner";

type FormState = 'step1' | 'step2' | 'completed';

interface RouteCheckerProps {
  setPortfolioURL: Dispatch<SetStateAction<string>>;
  portfolioURL: string;
  setCurrentStep: Dispatch<SetStateAction<FormState>>; // Add this line to include setCurrentStep
}

export default function RouteChecker({ setPortfolioURL, portfolioURL, setCurrentStep}: RouteCheckerProps) {

  const [availability, setAvailability] = useState<boolean| null>(null);
//  const {user,setUser} = useAuth()
 const [loadingCircle,setLoadingCircle] = useState<boolean>(false);



  const checkRouteAvailability = async (url: string) => {
     // root must be without space
    const regex = /^[a-zA-Z0-9-]*$/;
    if (!regex.test(url)) {
      toast.error(
      'Route can only contain letters, numbers, and hyphens not space');
      return;
    }

    try {
      setLoadingCircle(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/check-availability?route=${url}`, { method: 'GET' });
        const data = await response.json();
        console.log(data);
      if (response.status === 200 &&  data.available==true) {
        console.log('Available');
        setAvailability(true);
        setLoadingCircle(false)
        setCurrentStep('step2');
        return;
      }
      toast.error('Route is not available');
    } catch (error) {
      console.error('Error checking URL availability:', error);
      setAvailability(false);
      setLoadingCircle(false)
    }finally{
      setLoadingCircle(false)
    }
  };

  return (
    <>

      
  
    <div className="min-h-[85vh] flex items-center justify-center bg-background p-4">
      
      <div className="w-full max-w-xl space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Route Name</h1>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              [https://portfolio.dev/portfolio-name]
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              placeholder="your-unique-route"
              className={`h-11 ${availability?'border border-green-400':""}`}
             
              onChange={(e) => setPortfolioURL(e.target.value)}
            />
          </div>
          <Button
            variant="secondary"
            onClick={() => checkRouteAvailability(portfolioURL)}
            size="lg"
            className={`min-w-[160px] ${loadingCircle?" bg-zinc-700":"bg-zinc-900"} text-white hover:bg-zinc-700`}
          >
            {loadingCircle?'Loading....':'Check Availability'}
          </Button>
        </div>

        {/* {availability && (
          <div className="text-sm text-muted-foreground">
            Route is {availability?'':"not available"}.
          </div>
        )} */}
      </div>
    </div>
    </>
  );
}
