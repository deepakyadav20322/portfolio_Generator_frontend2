'use client'
import React from 'react'
import { useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useAuth ,User} from '@/app/context/authContect'
import { toast } from 'sonner'



const DeletePortfolioButton = () => {
    const router = useRouter();
    const { user,setUser } = useAuth();
    const [loading, setLoading] = useState(false);

    const deletePortfolio = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/delete-portfolio?userId=${user?.userId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Portfolio deleted successfully');
                setUser({ ...user, route: '' } as User);
                toast.success('Portfolio deleted successfully');
                router.push('/');
            } else {
                console.error('Failed to delete portfolio');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            < Button
                variant="destructive" 
                className="w-full py-5"
                onClick={deletePortfolio}
                disabled={loading}
            >
                {loading ? 'Deleting...' : 'Delete Portfolio'}
            </Button>
        </div>
    );
};

export default DeletePortfolioButton;