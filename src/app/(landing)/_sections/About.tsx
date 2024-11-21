import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[url('/shop.jpg')] w-full bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background2 to-background2/80 z-0"></div>
        <div className="flex justify-center h-full">
          <div className="container h-full flex items-center z-10">
            <div className="max-w-[900px]">
                <h2 className="heading">About Our Company</h2>
                <div className="spacer"></div>
                <p className="p ">
                  At .decimal®, we are leaders in precision manufacturing of patient-specific devices for radiation therapy. <span className="text-highlight">Since 1986,</span> our 
                  mission has been to support cancer care through innovative, solutions and collaborations with top medical institutions. 
                  Trusted globally, we have enhanced treatment for <span className="text-highlight">over 100,000 patients</span> Discover more about our history and commitment to advancing 
                  oncology solutions.
                </p>
                <div className="flex gap-4 mt-5">
                <Link 
                className={buttonVariants({ variant: "default" })}
                href="/about"
                >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
