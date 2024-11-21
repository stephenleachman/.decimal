
import Image from "next/image"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  interface TeamCardProps {
    name: string;    
    title: string;       
    image: string;    
  }
const TeamCard: React.FC<TeamCardProps> = ({ name, title, image }) => {
  return (
    <Card className="text-center z-0  nowrap flex-shrink-0 ">
      <CardHeader>
        <div className="flex flex-col items-center gap-3">
        <Image 
          src={image}
          alt="avatar"
          className="w-24 h-24 rounded-full border-2 border-primary border-dashed p-1"
          width={100}
          height={100}
        />
        <CardTitle className="text-headingtext text-nowrap">{name}</CardTitle>
        <CardDescription>{title}</CardDescription>
        </div>
    </CardHeader>
</Card>
  )
}
export default TeamCard
