
'use client'
import Login from '@/components/Login'
import React,{useState,useEffect} from 'react'
import { useAuth } from "@/app/context/authContect";
import { useRouter } from "next/navigation";
import LoadingSpinner from '@/components/Spinner'

const page = () => {

  const { user, setUser, loading } = useAuth();
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // Track authentication check

  useEffect(() => {
    if (user) {
      const fetchRoute = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-portfolio-route?${user.userId}`) // Replace with your API endpoint
          const data = await response.json()
          console.log(data,"kjhkjhkjhkjhkjhj")
         if(data.route){
          router.push(`/${data.route}`); // Redirect if user is authenticated
         }else{
          // if user login but not have portfolio
          router.push('/create-portfolio');
         }
        } catch (error) {
          console.error('Error fetching hero data:', error)
        }
      }
      fetchRoute()
    } else {
      setIsCheckingAuth(false); // Stop the authentication check once complete
    }
  }, [user, router]);


  if ( isCheckingAuth) {
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <LoadingSpinner size="md" color="blue" />
      </div>
    ); // Show a loader while checking authentication
  }
  return (
    <div><Login/></div>
  )
}

export default page