import { Button } from "@/components/ui/button"

import { DiscIcon as Discord} from 'lucide-react'
import ContactPage from "@/components/Contact"
import HeroSection from "@/components/Hero_home"
import FAQ from '@/components/Faq'
import PortfolioDirectory from "@/components/PortfolioDirectory"
import Footer from "@/components/Footer"
import Pricing from "@/components/Pricing"
import Navbar from "@/components/Navbar"
import Benefit from "@/components/Benefit"
import  GridWithBackgroundAndCells from '@/components/BackgroundBoxCells'
import FeaturesSection from "@/components/FeatureSection"
export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
    
    <Navbar/> 
      <main className="flex-1 max-w-7xl w-full mx-auto ">
        {/* Hero Section */}
        <GridWithBackgroundAndCells>
       <HeroSection/>
       </GridWithBackgroundAndCells>

        {/* Portfolio Directory */}
      <PortfolioDirectory/>

        {/* Benefits Section */}
       <Benefit/>


        {/* Features Grid */}
       <FeaturesSection/>

        {/* Community Section */}
        <section className="bg-slate-50 py-24">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <Discord className="mx-auto h-16 w-16 text-[#5865F2]" />
              <h2 className="mt-6 text-3xl font-bold">
                Ready to join this Community?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join our Discord community to connect with other portfolio creators
                and get help when you need it.
              </p>
              <Button size="lg" className="mt-8">
                Join Discord
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        
        <Pricing/>

        {/* Contact Form */}
       <ContactPage/>

        {/* FAQ Section */}
      
       <FAQ/>
      </main>

    <Footer/>
    </div>
  )
}





