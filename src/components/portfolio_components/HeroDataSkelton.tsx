import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonProfile() {
  return (
    <div className="space-y-6 p-4 max-w-2xl">
      {/* Name */}
      <Skeleton className="h-14 w-72" />
      
      {/* Role */}
      <Skeleton className="h-8 w-64" />
      
      {/* Tagline */}
      <Skeleton className="h-6 w-48" />
      
      {/* Contact & Skills Section */}
      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-72" />
        </div>
        
        {/* Skills */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded-full" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-16 rounded-full" />
            <Skeleton className="h-8 w-20 rounded-full" />
          </div>
        </div>
        
        {/* Phone */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        
        {/* LinkedIn */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-40" />
        </div>
        
        {/* GitHub */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-64" />
        </div>
        
        {/* YouTube */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>
    </div>
  )
}

