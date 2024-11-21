import TeamCard from "../components/TeamCard";
import { TeamMembers } from "@/constantes";

export default function TheTeam() {
  return (
    <div className="container overflow-hidden">
      <div className="flex justify-center my-20">
        <div className="w-[900px] flex flex-col items-center">
          <div className="pill mb-5">
            Making A Difference!  
          </div>
          <h1 className="heading">Meet The Team</h1>
          <div className="spacer"></div>
          <p className="p text-center">Our team is the heart of our innovation and success. Each member brings unique expertise, dedication, and a shared passion for advancing 
            cancer treatment through precision and quality. Meet the talented individuals who collaborate daily to transform ideas into impactful solutions, driving our commitment to excellence and patient care.
          </p>
        </div>
      </div>

      <div className="flex overflow-hidden nowrap space-x-7">
        <div className="flex mb-20 animate-loop-scroll nowrap space-x-7">
          {TeamMembers.map((member, index) => (
            <TeamCard 
            key={`first-${index}`} 
            name={member.name}
            title={member.title}
            image={member.image}
            />
          ))}
        </div>
        <div className="flex animate-loop-scroll nowrap space-x-7">
          {TeamMembers.map((member, index) => (
            <TeamCard 
            key={`second-${index}`} 
            name={member.name}
            title={member.title}
            image={member.image}
            aria-hidden={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


  {/* <div className="absolute inset-x-0 top-0 h-20 z-10 bg-gradient-to-b from-background2 to-background2/0"></div>
          <div className="absolute inset-x-0 bottom-0 h-20 z-10 bg-gradient-to-t from-background to-background/0"></div> */}