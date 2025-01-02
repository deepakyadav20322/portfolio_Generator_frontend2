'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { User, Folder, Briefcase } from 'lucide-react'

import { EducationSection } from '@/components/EducationSection'
import { AddProjectSection } from '@/components/AddprojectSection'
import WorkExperienceSection from '@/components/WorkExprienceSection'
import SkillSection from '@/components/SkillSection'
import HeroSection from '@/components/HeroSection'
import ContactPage from '@/components/Contact'
import { PortfolioDrawer } from '@/components/PortfolioDrawer'
import { useRouter } from 'next/navigation'

export default function PortfolioPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [found,setFound] = useState(true);
  const router = useRouter()


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark')
  }

  // we write the api for checking that this url portfolio exist or not?
  useEffect(() => {
    const checkUserExists = async () => {
      const username = window.location.pathname.split('/').pop();
      if (username) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${username}`);
          if (response.ok) {
            const userExists = await response.json();
            console.log('User exists:', userExists);
            setFound(true);
          } else {
            setFound(false);
          }
        } catch (error) {
          console.error('Error checking user existence:', error);
          setFound(false); // Ensure 'not found' is handled properly even if an error occurs.
        }
      }
    };
  
    checkUserExists();
  }, [router]); // Dependency updated to re-run on URL change.
  

  if(found==false){
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
        <div className="text-center p-6 rounded-lg shadow-lg bg-white">
          <h1 className="text-6xl font-bold text-blue-500 animate-bounce">404</h1>
          <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
          <p className="text-gray-600 mt-2">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow transition-transform transform hover:scale-105"
          >
            Go Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={theme}>
      <div className="min-h-screen bg-background text-foreground ">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl w-full">
            <h1 className="text-xl font-bold">Portfolio</h1>
            <nav className="flex items-center gap-8 text-gray-500 text-sm font-medium">
  <a
    href="#about"
    className="flex items-center gap-2 hover:text-gray-700 transition-colors"
  >
    <User className="w-5 h-5" />
    About Me
  </a>
  <a
    href="#projects"
    className="flex items-center gap-2 hover:text-gray-700 transition-colors"
  >
    <Folder className="w-5 h-5" />
    Projects
  </a>
  <a
    href="#experience"
    className="flex items-center gap-2 hover:text-gray-700 transition-colors"
  >
    <Briefcase className="w-5 h-5" />
    Work Experience
  </a>


              <PortfolioDrawer/>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-4 hidden"
              >
                {/* {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />} */}
                {theme}
              </Button>
             
            </nav>
          </div>
        </header>

        <main className="container px-4 py-8 space-y-12 max-w-7xl w-full mx-auto">
          {/* Profile Section */}
         <HeroSection/>

          {/* Skills Section */}
          <section id="skills" className="space-y-4">
            {/* <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                Skills
                <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Pro</span>
              </h2>
              <Button onClick={() => setSkillDialogOpen(true)}>Add Skill</Button>
            </div> */}
            <SkillSection/>
           
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-4">
            <div className="flex items-center justify-between">
              {/* <Button onClick={() => setProjectDialogOpen(true)}>Add Project</Button> */}
            </div>
            {/* <p className="text-muted-foreground">No projects added yet.</p> */}
            <AddProjectSection/>
          </section>

          {/* Work Experience Section */}
          <section id="experience" className="space-y-4">
            {/* <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Work Experience</h2>
              <Button onClick={() => setWorkExperienceOpen(true)}>Add Experience</Button>
            </div> */}
            <WorkExperienceSection/>
           
          </section>

          {/* Education Section */}
          <section id="education" className="space-y-4">
           
            <EducationSection/>
          </section>

          {/* Contact Section------------- */}
          {/* <section id="contact" className="space-y-8">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl font-bold text-center">Connect With Me</h2>
              <p className="text-center text-muted-foreground">
                I'm always eager to discuss new projects, creative ideas, or opportunities to be part of
                your visions. Feel free to reach out if you'd like to collaborate or simply have a chat about
                the latest in web development and design.
              </p>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-2 p-4 border rounded-lg">
                  <Mail className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">deep01@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-4 border rounded-lg">
                  <Clock className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <div className="flex items-center gap-4 w-full">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
        Connect With Me
      </h2>
      <div className="h-[3px] w-[7rem] bg-foreground/90" />
    </div> */}
          <ContactPage/>
        </main>

        <footer className="border-t mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
            © 2024 portly.dev all rights reserved.
          </div>
        </footer>

        {/* <AddWorkExperienceDialog 
          open={workExperienceOpen} 
          onOpenChange={setWorkExperienceOpen} 
        /> */}
        {/* <AddProjectDialog 
          open={projectDialogOpen} 
          onOpenChange={setProjectDialogOpen} 
        /> */}
        {/* <AddSkillDialog   
          open={skillDialogOpen} 
          onOpenChange={setSkillDialogOpen} 
        /> */}
        {/* <AddEducationDialog 
         isOpen={educationDialogOpen} 
         onClose={setEducationDialogOpen} 
         onSave={}
        /> */}
        
        
      
      </div>
    </div>
  )
}

