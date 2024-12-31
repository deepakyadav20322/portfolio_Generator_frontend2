import { useRouter } from "next/navigation";


export default function ProtectedLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
   const router = useRouter()
      const isLogin = true;
      if(!isLogin){
       router.push('/login')
       return;
      }

    return (
          <div>
            {children}
            </div>
         
    );
  }