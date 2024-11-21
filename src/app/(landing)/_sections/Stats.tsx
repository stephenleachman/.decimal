import Image from "next/image"
import Map from "@/../public/Map-for-july2023-2048x1338.png"

export default function Stats() {
  return (
    <div className="flex justify-center mb-20">
      <div className="container">
        <div className="flex justify-around my-20">
          <div className="p-5 w-[300px] ring-1 ring-ring rounded-lg text-center">
            <h2 className="text-headingtext tracking-normal text-3xl font-medium">Clinics</h2>
            <h3 className="text-headingtext tracking-wide text-6xl mt-5 font-medium">949</h3>
          </div>
          <div className="p-5 w-[300px] ring-1 ring-ring rounded-lg text-center">
            <h2 className="text-headingtext tracking-normal text-3xl font-medium">Devices Made</h2>
            <h3 className="text-headingtext tracking-wide text-6xl mt-5 font-medium">497<span className="text-primary">K</span></h3>
          </div>
          <div className="p-5 w-[300px] ring-1 ring-ring rounded-lg text-center">
            <h2 className="text-headingtext tracking-normal text-3xl font-medium">Patients Served</h2>
            <h3 className="text-headingtext tracking-wide text-6xl mt-5 font-medium">133<span className="text-primary">K</span></h3>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[800px] flex-col justify-center">
            <p className="leading text-center"><span className="text-highlight">.decimal</span> customers represent <span className="text-highlight">949 clinics</span> across the United States.</p>
            <Image 
              src={Map}
              alt="Map of United States Clients"
              style={{
                width: 'auto',
                height: 'auto',
              }}
              className="mt-20 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
