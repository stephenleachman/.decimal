import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";


export default function Hero() {
  return ( 
      <div className="mt-[100px] relative rounded-xl ring-1 ring-ring overflow-hidden mx-5 mb-[60px]">
        <div className="">
          <video 
            src="/video-banner.mp4"
            autoPlay 
            muted 
            loop 
            className="object-cover z-0 h-[800px] w-[1800px]"
          /> 
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black to-block">
            <div className="flex justify-center h-full">
              <div className="container h-full flex items-center">
                <div className="max-w-[700px] ">
                  <div className="pill mb-5">
                    Precision-driven, innovative machining.
                  </div>
                  <h1 className="heading">Empowering Precision Cancer Treatment Through Innovative Solutions.</h1>
                  <div className="spacer"></div>
                  <p className="leading">Delivering customized solutions that advance patient care and set new standards in radiation therapy.</p>
                  <div className="flex gap-4 mt-5">
                  <Link 
                    className={buttonVariants({ variant: "default" })}
                    href="/contact"
                    >
                      Our Products
                  </Link>
                  <Link 
                    className={buttonVariants({ variant: "outline" })}
                    href="/contact"
                    >
                      Contact Us
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
