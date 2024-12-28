import { Button } from "@/components/ui/button"
import { useAuth } from "@/app/context/authContect"
import { Label } from "@/components/ui/label"
import DeletePortfolioButton from "@/components/DeletePortfolioButton"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Settings, Upload } from "lucide-react"
import Link from "next/link"
import Logout from "./Logout"


export function PortfolioDrawer() {
  const { user } = useAuth();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Settings className="w-5 h-5"/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Portfolio Settings</SheetTitle>
          <SheetDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
          </SheetDescription>
        </SheetHeader>
       <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Home Route:</label>
              <Link href='/' className="text-sm text-blue-500">{" "}/Home</Link>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Route:</label>
              <Link href={`${user?.route}`} className="text-sm text-blue-500">{" "}/{user?.route}</Link>
            </div>
          </div>

          <div className="space-y-4">
            <div></div>
            <Logout/>
            
            {/* <Button 
              variant="destructive" 
              className="w-full py-5"
              onClick={() => console.log('Delete portfolio')}
            >
              Delete Portfolio
            </Button> */}

            <DeletePortfolioButton/>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
           
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
