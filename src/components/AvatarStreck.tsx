import Image from 'next/image'

interface AvatarProps {
  src: string
  alt: string
}

const avatars: AvatarProps[] = [
  {
    src: "/Male1.png",
    alt: "Team member 1"
  },
  {
    src: "/Male1.png",
    alt: "Team member 2"
  },
  {
    src: "/Male1.png",
    alt: "Team member 3"
  },
  {
    src: "/Male1.png",
    alt: "Team member 4"
  },
  {
    src: "/Male1.png",
    alt: "Team member 5"
  },
  {
    src: "/Male1.png",
    alt: "Team member 6"
  }
]

export default function AvatarStack() {
    return (
      <div className="flex items-center">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="relative -ml-3 first:ml-0 transition-transform duration-300 hover:z-10 hover:-translate-y-1"
          >
            <div className="h-12 w-12 rounded-full border-2 border-white overflow-hidden">
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  
