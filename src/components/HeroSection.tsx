"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioThemeSelector from "@/components/portfolio_components/PortfolioThemeSelector";
import { EditHeroSectionDialog } from "./portfolio_components/edit-hero-section-dialog";
import { themes } from "@/data/themeData";
import { useParams } from "next/navigation";
import { ProfileTheme } from "@/types/ProfileTheme";
import { HeroData } from "@/types/HeroData";
import SkeletonProfile from "./portfolio_components/HeroDataSkelton";
import {
  Briefcase,
  Github,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import { Badge } from "./ui/badge";

const HeroSection = () => {
  const [heroSectionOpen, setHeroSectionOpen] = useState(false);
  const [profileTheme, setProfileTheme] = useState<ProfileTheme>(themes[0]);
  const { route } = useParams();
  const [heroData, setHeroData] = useState<HeroData>(
    {
      fullName: "",
      title: "",
      tagline: "",
      description: ".",
      email: "",
      phone: "",
      skills: [],
      linkedin: "",
      github: "",
      youtube: "",
    }
  );
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (route) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/hero-data?route=${route}`
          );
          const result = await response.json();
          setHeroData(result.portfolioIntroData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false); // Data fetch complete
        }
      };

      fetchData();
    }
  }, [route]);

  return (
    <div>
      <div className="flex justify-end m-2">
        <PortfolioThemeSelector
          currentTheme={profileTheme}
          setProfileTheme={setProfileTheme}
          themes={themes}
        />
        <Button
          type="button"
          onClick={() => setHeroSectionOpen(true)}
          className="ml-4"
        >
          Edit Profile Section
        </Button>
      </div>

      <section
        className={`grid md:grid-cols-2 gap-8 items-center rounded p-2 transition-all duration-300 ease-in-out ${
          profileTheme.value === "minimalist"
            ? "border-black border-2 bg-[#f4f4f5] px-6 md:py-10"
            : ""
        } ${profileTheme.value === "sidekick" ? " " : ""}`}
      >
        <div
          className={`space-y-6 ${
            profileTheme.value === "sidekick" ? "order-last" : ""
          }`}
        >
          {loading ? (
           <SkeletonProfile/>
          ) : (
            <>
              <h1 className="text-5xl font-extrabold">{heroData?.fullName}</h1>
              <div className="text-2xl font-semibold">
                <p className="text-muted-foreground font-medium">
                  <span >{`{${heroData?.title}}`}</span>
                </p>
                <p className="text-lg my-3">{heroData?.tagline}</p>
                
                <p className="max-w-3xl text-sm text-muted-foreground sm:text-base font-normal ">{heroData?.description}</p>
              </div>
              <div className="space-y-2 font-medium flex flex-col gap-y-3 text-sm">
                <a target="_blanck" href={`mailto:${heroData?.email}`} className="flex items-center space-x-2 text-blue-400 hover:underline">
                  <Mail className="h-5 w-5" />
                  <span className="text-blue-400">{heroData?.email}</span>
                </a>
                <div className="flex justify-start gap-3">
                  <Briefcase />
                  {heroData?.skills.map((skill, id) => (
                    <Badge
                      key={id}
                      className="bg-[#F4F4F5] text-black rounded-full"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="flex items-center space-x-2 text-blue-400 hover:underline">
                  <Phone />
                  <span className="text-blue-400">{heroData?.phone}</span>
                </p>
                <p className="flex items-center space-x-2 text-blue-400 hover:underline">
                  <Linkedin />
                  <span className="text-blue-400">{heroData?.linkedin}</span>
                </p>
                <p className="flex items-center space-x-2 text-blue-400 hover:underline">
                  <Github />
                  <span className="flex items-center space-x-2 text-blue-400 hover:underline">{heroData?.github}</span>
                </p>
                <p className="flex items-center space-x-2 text-blue-400 hover:underline">
                  <Youtube />
                  <span className="text-blue-400">{heroData?.youtube}</span>
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-center transition-all duration-300 ease-in-out">
          <div className="w-full max-w-sm rounded-full bg-muted flex items-center justify-center">
            <img src="/profile.svg" alt="Profile" className="w-full max-w-2xl" />
          </div>
        </div>
      </section>

      <EditHeroSectionDialog
        open={heroSectionOpen}
        onOpenChange={setHeroSectionOpen}
        heroData={heroData}
        setHeroData={setHeroData}
        initialData={heroData}
        onSave={(updatedData) => setHeroData(updatedData)}
      />
    </div>
  );
};

export default HeroSection;
