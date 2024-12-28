'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'
import Logout from './Logout'
import { useAuth } from '@/app/context/authContect'
import { Skeleton } from './ui/skeleton'
const NavigationRootLinkChange = () => {
    const {user,loading} = useAuth()   
    if(loading) {
        return(
            <div className='gap-x-2 flex'>
             <Skeleton className="h-8 w-36" />
             <Skeleton className="h-8 w-36" />
            </div>
        )
    }
  return (
    <div className='flex gap-x-2'>{!user?
         (<> <Link href={'/create-portfolio'}>  <Button >Create Your Portfolio</Button></Link>
         <Link href={'/signIn'} >
            <Button className='bg-slate-100 hover:bg-slate-200 text-black'><Download className='rotate-[-90deg]'/>Login</Button>
            </Link> </>)
            :(<> <a href={`/${(user.route? user.route:'create-portfolio')}`}>  <Button variant={'secondary'} >{user.email}</Button></a><Logout/></>)
         
    }
    </div>
  )
}

export default NavigationRootLinkChange